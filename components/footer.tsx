import React from "react";

export default function Footer({children}:{children:React.ReactNode}) {
    return (
        <div className="fixed p-4 bottom-0 inset-x-0 w-full backdrop-filter backdrop-blur">
            <p className="text-xs text-center text-gray-400">{children}</p>
        </div>
    )
}