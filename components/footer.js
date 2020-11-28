export default function Footer({children}) {
    return (
        <div className="fixed p-4 bottom-0 left-0 w-full backdrop-blur">
            <p className="text-xs text-center text-gray-400">{children}</p>
        </div>
    )
}