// import React, { react, useState } from 'react';
import styles from "./Tabs.module.css";

const Tabs = ({
    items = [], 
    activeKey, 
    defaultActiveKey, 
    onChange, 
    className ="",
    listClassName = "",
    buttonClassName = "",
    activeButtonClassName = "",
    renderTab,
}) => {

    const currentActiveKey = activeKey ?? defaultActiveKey ?? items[0]?.key

    const visibleItems = items.filter((item) => !item.hidden);

    const handleClick = (event, item) => {
        if(item.disabled) return;

        item.onClick?.({
            event, item, key: item.key,
        });

        onChange?.(item.key, item);
    };


    return (
        <div className={`${styles.tabs} ${className}`}>
            <div className={`${styles.tabList} ${listClassName}`} role="tablist">
                {visibleItems.map((item) => {
                    const isActive = currentActiveKey === item.key;

                    return (
                        <button
                            key={item.key}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            aria-disabled={item.disabled || false}
                            disabled={item.disabled}
                            className={[
                                styles.tabButton,
                                buttonClassName,
                                item.className || "",
                                isActive ? `${styles.active} ${activeButtonClassName}` : ""
                            ].filter(Boolean).join(" ")}
                            style={item.style}
                            onClick={(event) => handleClick(event, item)}
                            >
                                {
                                    renderTab ? (
                                        renderTab(item, isActive)
                                    ) : (
                                        <>
                                            {item.icon ? <span className={styles.icon}>{item.icon}</span> : null}
                                            <span>{item.label}</span>
                                            {item.badge ? <span className={styles.badge}>{item.badge}</span>: null}
                                        </>
                                    )
                                }
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Tabs;

