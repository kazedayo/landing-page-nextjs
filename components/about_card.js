import { SocialIcon } from 'react-social-icons'

export default function AboutCard({name, aboutText}) {
    return (
        <>
            <header className="flex-auto flex-col items-center">
                <img
                    src="/images/profile.jpg"
                    className="object-cover w-32 h-32 rounded-full shadow-lg"
                    alt={name}
                />
                <div className="">
                    <h1 className="text-4xl leading-5 font-extrabold tracking-tight my-6">{name}</h1>
                    <div className="flex flex-row">
                        <SocialIcon className="mx-1 rounded-full shadow-md" fgColor="#fff" bgColor="#333" url="https://github.com/kazedayo" />
                        <SocialIcon className="mx-1 rounded-full shadow-md" fgColor="#fff" url="https://twitter.com/kaze_hayashi97" />
                    </div>
                </div>
            </header>
            <main className="max-w-md">
                <section className="text-xl font-medium leading-normal py-7">
                    <p>{aboutText}</p>
                </section>
            </main>
        </>
    )
}