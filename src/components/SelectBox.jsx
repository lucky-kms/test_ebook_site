import React from "react";

/**
 * 
 * @param {기본 select box} param0 
 * @returns 
 */
export default function SelectBox({
    options, 
    value,
    onChange, 
    placeholderText = "선택 하세요", 
    readonly = false, 
    disabled = false
    }) 
    {
        return (
            <select 
                value={value} 
                onChange={onChange} 
                placeholderText={placeholderText} 
                readonly={readonly}
                disabled={disabled}
                >
                {
                    options.map(option => (
                        <option 
                            key={option.value} 
                            value={option.value} 
                            disabled={option.value == "placeholder"? true : false}
                        >
                            {option.label}
                        </option>
                    ))
                }
            </select>   
        )
}