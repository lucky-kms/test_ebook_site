import React, { useMemo, useState } from "react";
import ListCss from '../assets/css/List.module.css';


// fnc1 : 두값을 비교해서 정렬 기준을 만드는 함수
function defaultCompare(a, b) {
    if (a == null && b == null) return 0;
    if (a == null) return -1;
    if (b == null) return 1;

    // Date
    if (a instanceof Date && b instanceof Date) return a.getTime() - b.getTime();

    // number-link
    const na = Number(a);
    const nb = Number(b);

    if(!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
    
    // string
    return String(a).localeCompare(String(b));
}

// fnc2 : 
function applySort(rows, columns, sort) {
    if (!sort) return rows;

    const col = columns.find(c => c.id === sort.columnId);
    if(!col) return rows;

    const getValue = col.sortValue || col.accessor || (row => row[col.id]);

    const sorted = [...rows].sort((r1, r2) => defaultCompare(getValue(r1), getValue(r2)));

    return sort.direction === "asc"? sorted : sorted.reverse();
}

// fnc3
function applyPagination(rows, page, pageSize) {
    const start = (page - 1) * pageSize;

    return rows.slice(start, start + pageSize);
}

export default function ListTable({
    columns,
    data,
    rowKey, // row => string
    pageSize = 10,
    onRowClick, // row => void
    className,
}) {
    const [sort, setSort] = useState(null); // (columnId, direction) | null
    const [page, setPage] = useState(1);

    const Processed = useMemo(() => {
        const sorted = applySort(data, columns, sort);
        const total = sorted.length;
        const paged = applyPagination(sorted, page, pageSize);

        return { rows: paged, total };
    }, [data, columns, sort, page, pageSize]);

    const totalPages = Math.max(1, Math.ceil(Processed.total / pageSize));

    const toggleSort = col => {
        if (!col.sortable) return;

        setPage(1);

        setSort(prev => {
            if (!prev || prev.columnId !== col.id) return {columnId: col.id, direction: "asc"};
            if (prev.direction === "asc") return { columnId: col.id, direction: "desc"};
            return null;
        });
    }

    return (
        <div className={className} style={{ width: "100%", overflowX: "auto"}}>
            <table style={{width: "100%", borderCollapse: "collapse"}}>

                <thead>
                    <tr>
                        {columns.map( col => (
                            <th key={col.id}
                                onClick={() => toggleSort(col)}
                                style={{
                                    cursor: col.sortable ? "pointer" : "default",
                                    textAlign: col.align || "left",
                                    width: col.width,
                                    borderBottom: "1px solid #ddd",
                                    padding: "10px",
                                    userSelect: "none"
                                }}
                            >
                                <span style={{ display: "inline-flex", gap: 6, alignItems: "center"}} >
                                    {col.header}
                                    {sort?.columnId === col.id ? (sort.direction === "asc"? "▲" : "▼") : null}
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {Processed.rows.map( row => (
                        <tr
                            key={rowKey(row)}
                            onClick={() => onRowClick && onRowClick(row)}
                            style={{ cursor: onRowClick ? "pointer" : "default"}}
                        >
                            {columns.map(col => {
                                const content = 
                                    (col.cell && col.cell(row)) ||
                                    (col.accessor ? col.accessor(row) : row[col.id]);
                            
                                return (
                                    <td key={col.id}
                                        style={{
                                            padding: "10px",
                                            borderBottom: "1px solid #f0f0f0",
                                            textAlign: col.align || "left",
                                        }}
                                    >
                                        { content }
                                    </td>
                                )
                            })}
                        </tr>
                    ))}

                    {Processed.rows.length === 0 && (
                        <tr>
                            <td colSpan={columns.length} style={{ padding: 16, textAlign: "center"}}>
                                데이터가 없습니다.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination */}
            <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center", margin: "0 auto", width: "100%", }}>
                <button style={{ backgroundColor: '#fff', color: '#111', }} onClick={ () => setPage( p => Math.max(1, p - 1))}
                disabled = {page === 1}
                >
                    {"<"}
                </button>

                <span>
                    { page } / { totalPages }
                </span>

                <button style={{ backgroundColor: '#fff', color: '#111', }} onClick={ () => setPage( p => Math.min(totalPages, p + 1))}
                disabled = {page === totalPages}
                >
                    {">"}
                </button>
            </div>
        </div>
    )

}