import ImageContainer from './image_container'
import GithubLink from './github_link'

export default function ShowcasePanel() {
    return (
    <>
        <h1 className="text-2xl font-bold leading-8">Personal Projects</h1>
        <div className="flex flex-row items-center space-x-2">
            <h2 className="text-xl font-medium">hkGalden</h2><GithubLink repo="kazedayo/hkgalden_flutter"/>
        </div>
        <p className="text-gray-400">Originally an iOS client for a small Hong Kong forum hkGalden, now in Flutter.</p>
        <div className="flex flex-wrap overflow-hidden">
            <ImageContainer src="/images/project1/mockup1.png"/>
            <ImageContainer src="/images/project1/mockup2.png"/>
            <ImageContainer src="/images/project1/mockup3.png"/>
        </div>
    </>
    )
}