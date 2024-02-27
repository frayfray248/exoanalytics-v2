// react
import React from 'react'

// components
import PageLayout from '@/components/shared/PageLayout'
import IndividualsClientComponent from './IndividualsClientComponent'
import Select from '@/components/shared/Select'

// api
import api from '@/api/api'


const page = async () => {

    const names : string[] = await api.getPlanetNames()


    return (
        <IndividualsClientComponent planetNames={names} />
    )
}

export default page