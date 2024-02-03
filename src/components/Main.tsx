import React from 'react'

import LineChart from './LineChart'

const Main = () => {
    return (
        <div className='w-full h-full flex flex-row'>
            <div className='border flex-1'></div>
            <div className='border relative md:w-144 lg:w-160 xl:w-208 2xl:w-288'><LineChart title="foobar" labels={['foo', 'bar']} datasets={[{ label : "foo", data : [2, 4]}]} /></div>
            <div className='border flex-1'></div>
        </div>
    )
}

export default Main