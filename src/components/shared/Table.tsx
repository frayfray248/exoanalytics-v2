import React from 'react'

export const Table = ({ children, className } : {children : React.ReactNode, className? : string}) => {
  return (
    <table className={`text-left relative border-separate border-spacing-0 ${className}`}>
        {children}
    </table>
  )
}

export const TableHead = ({ children } : {children : React.ReactNode}) => {
    return (
        <thead>
            {children}
        </thead>
    )
    }

export const TableBody = ({ children } : {children : React.ReactNode}) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

export const TableRow = ({ children, className="" } : {children : React.ReactNode, className? : string}) => {
    return (
        <tr className={`border-b ${className}`}>
            {children}
        </tr>
    )
}

export const TableHeaderCell = ({ children } : {children : React.ReactNode}) => {
    return (
        <th className='border-b sticky top-0  bg-white'>
            {children}
        </th>
    )
}

export const TableCell = ({ children } : {children : React.ReactNode}) => {
    return (
        <td className='border-b'>
            {children}
        </td>
    )
}
    

export default Table