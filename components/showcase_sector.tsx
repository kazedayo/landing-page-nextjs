// Copyright (c) 2021 Kin Wa Lam
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import ImageContainer from './image_container'
import GithubLink from './github_link'

export default function ShowCaseSector(
    {title, description, imgSrc, repo}: {title: string, description: string, imgSrc: string, repo: string}
) {
    return(
        <>
            <div className="flex flex-col">
                <div className="flex flex-row items-center space-x-2">
                    <h2 className="text-xl font-medium">{title}</h2><GithubLink repo={repo} />
                </div>
                <p className="text-gray-400">{description}</p>
                <div className="flex flex-wrap overflow-hidden">
                    <ImageContainer src={imgSrc} />
                </div>
            </div>
        </>
    )
}