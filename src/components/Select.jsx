import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";


export default function Select({
    options,
    value,
    onChange,
    placeholder = "선택하세요",
    disabled = false,
    searchable = false,
    searchPlaceholder = "검색...",
    className = "",
}) {
    const rootRef = useRef(null);
    const listRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [query, setQuery] = useState("");

    const selected = useMemo(() => options.find((o) => o.value === value) ?? null, 
    [options, value]);

    const filtered = useMemo(() => {
        if(!searchable) return options;

        const q  = query.trim().toLowerCase();

        if(!q) return options;

        return options.filter((o) => o.label.toLowerCase().includes(q));
    }, [options, query, searchable]);

    // 외부 클릭 닫기
    useEffect(() => {
        const onDocMouseDown = (e) => {
            if(!rootRef.current) return;
            if(!rootRef.current.contains(e.target)) setOpen(false);
        };

        document.addEventListener("mousedown", onDocMouseDown);
        return () => document.removeEventListener("mousedown", onDocMouseDown);
    }, []);

    // 열릴 때 activeIndex 맞추고, DOM 반영 직후 스크롤
    useEffect(() => {
        if (!open) return;

        const found = filtered.findIndex((o) => o.value === value);
        const nextIdx = found >= 0 ? found : 0;

        setActiveIndex((prev) => (prev === nextIdx ? prev : nextIdx));
    }, [open, filtered, value]);

    useLayoutEffect(() => {
        if (!open) return;
        if (activeIndex < 0) return;

        const el = listRef.current?.querySelector(`[data-idx="${activeIndex}"]`);
        el?.scrollIntoView({ block: "nearest" });
    }, [open, activeIndex]);
    
    //열린 상태에서 키보드 조작
    const onKeyDown = (e) => {
        if(disabled) return;

        // 닫힌 상태에서 열기
        if (!open && (e.key === "Enter" || e.key === " " || e.key === "ArrowDown")) {
            e.preventDefault();
            setOpen(true);
            return;
        }

        if (!open) return;

        if(e.key === "Escape") {
            e.preventDefault();
            setOpen(false);
            return;
        }

        if(e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((prev) => Math.min(prev + 1, filtered.length - 1));
            return;
        }

        if(e.key == "ArrowUp") {
            e.preventDefault();
            setActiveIndex((prev) => Math.max(prev - 1, 0));
        }

        if(e.key === "Home") {
            e.preventDefault();
            setActiveIndex(0);
            return;
        }

        if(e.key === "Enter") {
            e.preventDefault();
            const item = filtered[activeIndex];

            if(item) {
                onChange(item.value);
                setOpen(false);
                setQuery("");
            }
        }
    }

    const toggle = () => {
        if(disabled) return;
        setOpen((v) => !v);
    }

    const handleSelect = (item) => {
        onChange(item.value);
        setOpen(false);
        setQuery("");
    }

    return (
        <div
            ref={rootRef}
            className={`select-root ${disabled ? "is-disabled" : ""} ${className}`}
            tabIndex={disabled? -1 : 0}
            onKeyDown={onKeyDown}
            role="combobox"
            aria-expanded={open}
            aria-disabled={disabled}
        >
            
            <button
                type="button"
                className="select-trigger"
                onClick={toggle}
                disabled={disabled}
            >
                <span className={`select-value ${selected ? "" : "is-placeholder"}`}>
                    { selected ? selected.label : placeholder}
                </span>
                <span className="select-arrow" aria-hidden="true">▾</span>
            </button>


            {open && (
                <div className="select-popover" role="listbox" ref={listRef}>
                    {searchable && (
                        <div className="select-search">
                            <input  
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={searchPlaceholder}
                                autoFocus
                            />
                        </div>
                    )}

                    <ul className="select-list">
                        {filtered.length === 0? (
                            <li>결과가 없어요</li>
                        ) : (
                            filtered.map((item, idx) => {
                                const isSelected = item.value === value;
                                const isActive = idx === activeIndex;

                                return (
                                    <li
                                        key={item.value}
                                        data-idx={idx}
                                        className={[
                                            "select-item",
                                            isSelected ? "is-selected" : "",
                                            isActive ? "is-active" : "",
                                        ].join(" ")}
                                        role="option"
                                        aria-selected={isSelected}
                                        onMouseEnter={() => setActiveIndex(idx)}
                                        onMouseDown={(e) => e.preventDefault()}
                                        onClick={() => handleSelect(item)}
                                    >
                                        <span>{item.label}</span>

                                        {isSelected && <span className="select-check">✓</span>}
                                    </li>
                                )
                            })

                        )    
                    }
                    </ul>
                </div>
            )}
        </div>
    )
}