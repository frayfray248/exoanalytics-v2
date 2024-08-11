// components
import PageLayout from "@/components/shared/PageLayout"
import Main from "@/components/Main"

import logo from "@/res/exoanalytics.png"
import Image from "next/image"

export default async function Home() {

    return (
        <PageLayout>
            <section className="m-4">
                <div className="max-w-4xl mx-auto py-12">
                    <div className='pb-6 flex justify-center'>
                        <div className="max-w-4xl">
                            <h1 className='relative title-side-block title-side-block-padding bg-gray-100 mb-2 text-center max-w-2xl text-4xl md:text-6xl'>EXOANALYTICS</h1>
                            <h2 className=' bg-black text-center text-white mb-2 px-6 max-w-2xl text-xl sm:text-2xl md:text-4xl'>EXOPLANET DATA VISUALIZER</h2>
                        </div>
                    </div>
                    <Image className="border-2 border-black mx-auto my-12" src={logo} alt="Exoanalytics" width={300} height={300} />
                    <p className="text-lg py-2">
                        This website is a data visualizer for exoplanet data from NASA's <a className="text-blue-500" href="https://exoplanetarchive.ipac.caltech.edu/index.html" target="_blank">Exoplanet Archive</a>. The data is presented in various charts and tables, allowing you to explore relationships, aggregations, distributions, individual planet properties, and more. Start exploring the data by clicking on the tabs above.
                    </p>
                    <p className="text-lg py-2">
                        All data is fetched using the <a className="text-blue-500" href="https://exoplanetarchive.ipac.caltech.edu/docs/TAP/usingTAP.html" target="_blank">Table Access Protocol (TAP)</a> from the Exoplanet Archive. The data is then formatted on a backend server and sent to the frontend for visualization. Some data is cached for 24 hours to enhance performance.
                    </p>
                    <p className="text-lg py-2">
                        This is a personal project by <a className="text-blue-500" href="https://fmacal.com" target="_blank">Fraser Macallum</a>. The source code is available on <a className="text-blue-500" href="https://github.com/frayfray248/exoanalytics-v2" target="_blank">Github</a>. The purpose of this project is to make exoplanet data easily accessible to the average user, demonstrate large-scale data fetching and caching using <a href="https://nextjs.org/" className="text-blue-500" target="_blank">Next.js</a>, and practice data visualization with <a href="https://www.chartjs.org/" className="text-blue-500" target="_blank">Chart.js</a>.
                    </p>
                    <p className="text-lg py-2">
                        Please visit my <a className="text-blue-500" href="https://fmacal.com" target="_blank">portfolio</a> for more information about me.
                    </p>
                    <p className="text-lg py-2">
                        GUI inspired by the video game <a className="text-blue-500" href="https://bethesda.net/en/game/starfield" target="_blank">Starfield</a>.
                    </p>
                </div>
            </section>
        </PageLayout>
    )
}


