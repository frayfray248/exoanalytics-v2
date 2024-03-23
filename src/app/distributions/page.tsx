// components
import DistributionsClientComponent from './DistributionClientComponent'

// api
import api from '@/api/api'

// types
import { DistributionChartData } from '@/types/types'

const Page = async () => {

    const items = [ 
        'soltype', 
        'pl_letter',
        'sy_snum',
        'sy_pnum',
        'discoverymethod',
        'disc_locale',
        'disc_facility',
        'disc_telescope',
        'disc_instrument',
        'pl_tranmidlim',
        'disc_year',
        
    ]

    const columns = (await api.getColumnDescriptions()).filter(column => items.includes(column.name)).map(column => (
        {
            name: items[items.indexOf(column.name)],
            description: column.description
        }
    ))

    const datasets : DistributionChartData[][] = await Promise.all(
        columns.map(async column => await api.getPlanetAggregateDataGroups(column.name))
    )

    return (
        <DistributionsClientComponent columns={columns} datasets={datasets} />
    )
}

export default Page