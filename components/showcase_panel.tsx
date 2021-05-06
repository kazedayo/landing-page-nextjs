import GithubLink from './github_link'
import ShowcaseSector from './showcase_sector'

export default function ShowcasePanel() {
    return (
        <>
            <div className="px-8 md:px-16 py-8 md:py-16 md:overflow-auto">
                <h1 className="text-2xl font-bold leading-8">Personal Projects</h1>
                <div className="grid lg:grid-cols-2 gap-x-12 py-2 max-w-screen-lg">
                    <ShowcaseSector 
                        title="hkGalden" 
                        description="Originally an iOS client for a small Hong Kong forum hkGalden written in Swift, now rewritten in Flutter."
                        imgSrc="/images/project1.png"
                        repo="kazedayo/hkgalden_flutter"
                    />
                    <ShowcaseSector 
                        title="HoloSchedule" 
                        description="Simple app to keep track of Hololive members' stream schedules and receive notifications. Written in Flutter."
                        imgSrc="/images/project2.png"
                        repo="kazedayo/hololive_app"
                    />
                </div>
                <h1 className="text-2xl font-bold leading-8">Contributed Open Souce Projects</h1>
                <div className="py-2">
                    <div className="py-2">
                        <div className="flex flex-row items-center space-x-2">
                            <h2 className="text-xl font-medium">Moya</h2><GithubLink repo="Moya/Moya" />
                        </div>
                        <p className="text-gray-400">Network Abstraction Layer for Swift based on Alamofire.</p>
                    </div>
                    <div className="py-2">
                        <div className="flex flex-row items-center space-x-2">
                            <h2 className="text-xl font-medium">Holodex</h2><GithubLink repo="RiceCakess/Holodex" />
                        </div>
                        <p className="text-gray-400">An PWA that centralizes Virtual YouTubers' livestreams/VODs/Clips.</p>
                    </div>
                </div>
            </div>
        </>
    )
}