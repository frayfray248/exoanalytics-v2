'use client'
// react
import React, { useState } from 'react'

const Select = ({ items, onChange, label, className="" }: { items: string[], onChange: (index : number) => void, label? : string, className? : string}) => {

    return (
        <>
        {label && <label>{label}</label>}
        <select className={`block border border-slate-400 mb-4 whitespace-nowrap overflow-hidden truncate w-full ${className}`} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event.target.selectedIndex)}>
            {items.map((item, index) => {
                return <option 
                key={index} 
                value={item}
                >{`${item}\n${item}`}</option>
            })} 
        </select>
        </>
    )
}

export default Select