import ImageContainer from './image_container'
import GithubLink from './github_link'

export default function ShowcasePanel() {
    return (
        <>
            <div className="px-8 py-8 md:overflow-y-scroll">
                <h1 className="text-2xl font-bold leading-8">Personal Projects</h1>
                <div className="py-2 max-w-screen-xl">
                    <div className="flex flex-row items-center space-x-2">
                        <h2 className="text-xl font-medium">hkGalden</h2><GithubLink repo="kazedayo/hkgalden_flutter" />
                    </div>
                    <p className="text-gray-400">Originally an iOS client for a small Hong Kong forum hkGalden, now in Flutter.</p>
                    <div className="flex flex-wrap overflow-hidden">
                        <ImageContainer src="/images/project1/mockup1.png" />
                        <ImageContainer src="/images/project1/mockup2.png" />
                        <ImageContainer src="/images/project1/mockup3.png" />
                    </div>
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