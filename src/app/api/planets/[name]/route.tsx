// next
import { type NextRequest, type NextResponse } from 'next/server'

// api
import { getPlanetData } from '@/api/api'

export async function GET(request : NextRequest, { params } : { params: { name: string } }) {
    try {

        const planet = await getPlanetData(['*'], true, params.name)


        return Response.json(planet, { status: 200 })

    } catch(error) {

        if (error instanceof Error) {
            console.log(error.message)
        }

        return Response.json({ error: 'Internal Server Error' }, { status: 500 })

    }
}
