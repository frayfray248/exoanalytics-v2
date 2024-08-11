'use client'

// react
import React, { useState, useEffect } from 'react'

// components
import PageLayout from '@/components/shared/PageLayout'
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from '@/components/shared/Table'

const IndividualsClientComponent = (
    {
        planetNames,
        columnDescriptions
    }: {
        planetNames: string[],
        columnDescriptions: { name: string, description: string }[]
    }
) => {

    const [selectedPlanet, setSelectedPlanet] = useState<{ [key: string]: string } | null>(null)
    const [displayPlanets, setdisplayPlanets] = useState<string[]>(planetNames)
    const [planetListRange, setPlanetListRange] = useState<[number, number]>([0, 100])
    const [searchInput, setSearchInput] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {

        if (searchInput) {

            setdisplayPlanets(planetNames.filter(planet => planet.toLowerCase().includes(searchInput)))

        } else {

            setdisplayPlanets(planetNames)

        }

    }, [searchInput, planetNames])

    const resetPlanetListRange = () => {
        setPlanetListRange([0, 100])
    }


    const handleClick = (index: number) => {
        ; (async () => {
            try {

                setLoading(true)

                const res = await fetch(`/api/planets/${displayPlanets[index]}`)

                const planet: { [key: string]: string }[] = await res.json()

                setSelectedPlanet(planet[0])

            } catch (error) {

                if (error instanceof Error) {
                    console.log(error.message)
                }

            }
            finally {

                setLoading(false)

            }
        })()

    }



    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setSearchInput(e.target.value.toLowerCase())

        resetPlanetListRange()

    }

    const planetListOnScroll = (e: React.UIEvent<HTMLDivElement>) => {

        const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight

        if (bottom) {
            setPlanetListRange([planetListRange[0], planetListRange[1] + 100])
        }

    }

    return (
        <PageLayout>

            <div className="flex xl:flex-row flex-col max-w-6xl p-4 mx-auto min-h-0">

                <div className="border border-slate-400 m-4 p-2 xl:max-w-96 flex flex-col max-h-96">

                    <div className='flex flex-col py-2'>
                        <span>Search:</span>
                        <input className='border' onChange={handleSearchInputChange} type='text' />
                    </div>

                    <div className='overflow-auto' onScroll={planetListOnScroll}>
                        <table className='text-left'>
                            <thead>
                                <tr>
                                    <th>Planet</th>
                                </tr>
                            </thead>
                            <tbody  >
                                {displayPlanets.slice(planetListRange[0], planetListRange[1]).map((planet, index) => {
                                    return (
                                        <tr
                                            className='hover:bg-gray-200 cursor-pointer'
                                            key={index}
                                            onClick={() => handleClick(index)}

                                        >
                                            <td>{planet}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="relative border border-slate-400 m-4 flex-1 xl:w-192 overflow-auto max-h-96">
                    {

                        loading ?
                            <div className='flex justify-center items-center'>
                                <span>Loading...</span>
                            </div>
                            :
                            selectedPlanet ?
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableHeaderCell>Column</TableHeaderCell>
                                            <TableHeaderCell>Value</TableHeaderCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {Object.keys(selectedPlanet).map((key, index) => {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell>{columnDescriptions.find(column => column.name === key)?.description || key}</TableCell>
                                                    <TableCell>{selectedPlanet[key] || "null"}</TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                                :
                                <div className='flex justify-center items-center'>
                                    <span>Select a planet</span>
                                </div>
                    }
                </div>

            </div>





        </PageLayout>
    )
}

export default IndividualsClientComponent