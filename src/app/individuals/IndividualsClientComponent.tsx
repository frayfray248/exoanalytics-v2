'use client'

// react
import React, { useState, useEffect } from 'react'

// components
import PageLayout from '@/components/shared/PageLayout'
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell} from '@/components/shared/Table'

const IndividualsClientComponent = ({ planetNames }: { planetNames: string[] }) => {

    const [selectedPlanet, setSelectedPlanet] = useState<{ [key: string]: string } | null>(null)
    const [displayPlanets, setdisplayPlanets] = useState<string[]>(planetNames)
    const [planetListRange, setPlanetListRange] = useState<[number, number]>([0, 100])
    const [searchInput, setSearchInput] = useState<string>('')

    useEffect(() => {

        if (searchInput) {

            setdisplayPlanets(planetNames.filter(planet => planet.toLowerCase().includes(searchInput)))

        } else {

            setdisplayPlanets(planetNames)

        }

    }, [searchInput])

    const resetPlanetListRange = () => {
        setPlanetListRange([0, 100])
    }


    const handleClick = (index: number) => {


        ; (async () => {
            try {

                const res = await fetch(`/api/planets/${displayPlanets[index]}`)

                const planet: { [key: string]: string }[] = await res.json()

                setSelectedPlanet(planet[0])

            } catch (error) {

                if (error instanceof Error) {
                    console.log(error.message)
                }

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
            <div className='w-full h-full flex flex-row'>
                <div className='border p-2 overflow-auto' onScroll={planetListOnScroll}>
                    <div className='flex flex-col'>
                        <span>Search:</span>
                        <input className='border' onChange={handleSearchInputChange} type='text' />
                    </div>
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
                <div className='border relative flex flex-1 flex-wrap overflow-auto'>
                    {
                        selectedPlanet &&
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
                                            <TableCell>{key}</TableCell>
                                            <TableCell>{selectedPlanet[key] || "null"}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>

                        </Table>
                    }
                </div>
            </div>

        </PageLayout>
    )
}

export default IndividualsClientComponent