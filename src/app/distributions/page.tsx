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
    ]

    const datasets : DistributionChartData[][] = await Promise.all(
        items.map(async item => await api.getPlanetAggregateDataGroups(item))
    )

    return (
        <DistributionsClientComponent items={items} datasets={datasets} />
    )
}

export default Page