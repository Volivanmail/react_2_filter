import React from "react";

export default function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props
    return (
        <div className="toolbar">
            {filters.map((filter) => {
                return (
                    <div className={filter === selected ? 'toolbar-btn toolbar-btn-current' : 'toolbar-btn'}
                        onClick={() => onSelectFilter(filter)}>{filter}
                    </div>
                );
            })}
        </div>
    )
}