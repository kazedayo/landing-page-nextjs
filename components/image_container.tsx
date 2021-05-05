export default function ImageContainer({src}: {src: string}) {
    return (
    <>
        <img src={src} className="h-full object-contain"/>
    </>
    )
}