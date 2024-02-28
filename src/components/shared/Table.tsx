import React from 'react'

export const Table = ({ children } : {children : React.ReactNode}) => {
  return (
    <table className='text-left relative border-separate border-spacing-0'>
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

export const TableRow = ({ children } : {children : React.ReactNode}) => {
    return (
        <tr className='border-b'>
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