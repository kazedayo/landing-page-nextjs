export default function ImageContainer({src}: {src: string}) {
    return (
    <>
        <img src={src} className="w-full h-full md:w-1/3 object-contain"/>
    </>
    )
}