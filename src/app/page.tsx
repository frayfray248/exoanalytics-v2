// components
import PageLayout from "@/components/shared/PageLayout"
import Main from "@/components/Main"

export default async function Home() {

    return (
        <PageLayout>
            <div className="flex flex-row flex-wrap p-4 h-96">
                <div className="border border-black flex-1 m-4"></div>
                <div className="border border-black flex-2 m-4"></div>
                <div className="border border-black flex-1 m-4"></div>
            </div>
        </PageLayout>
    )
}


