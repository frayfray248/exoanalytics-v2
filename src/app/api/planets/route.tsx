// next
import { type NextRequest, type NextResponse } from 'next/server'

// api
import { getPlanetData } from '@/api/api'

export async function GET(request : NextRequest) {
    try {

        const searchParams = request.nextUrl.searchParams
        const columns = searchParams.get('columns')?.split(',') || ["pl_name"]
        
        const planets = await getPlanetData(columns, true)
    
        return Response.json(planets)

    } catch(error) {

        if (error instanceof Error) {
            console.log(error.message)
        }

        return Response.json({ error: 'Internal Server Error' }, { status: 500 })

    }
}
