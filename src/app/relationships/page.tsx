// react
import React from 'react'

// components
import RelationshipClientComponent from './RelationshipClientComponent'

// api
import { getPlanetNumberColumnNames, getPlanetData } from '@/api/api'

const Page = async () => {

    const planetColumns = await getPlanetNumberColumnNames()

    return (
        <RelationshipClientComponent planetColumns={planetColumns} />
    )
}


export default Page