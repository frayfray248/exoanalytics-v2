'use client'
// react
import React, { useState } from 'react'

const Select = ({ items, onChange }: { items: string[], onChange: (index : number) => void}) => {

    return (
        <select className='block' onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event.target.selectedIndex)}>
            {items.map((item, index) => {
                return <option 
                key={index} 
                value={item}
                >{item}</option>
            })} 
        </select>
    )
}

export default Select