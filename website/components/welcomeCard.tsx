import Image from "next/image"

export default function WelcomeCard() {

    return (

        <div className=" bg-white rounded-3xl shadow-lg flex flex-col divide-y-2 m-8">
            <div className="flex mb-5 lg:flex-col">
                <div className="w-full border-2 relative border-[#3d3652ff] rounded-t-3xl shadow-xl flex items-center justify-center lg:h-60">
                    <Image
                        className="object-contain"
                        src="/headshot.png"
                        alt="Picture of David Thuman"
                        fill
                    />
                </div>

                <div className="p-6">
                    <div className="text-3xl text-center pb-5 text-[#3d3652ff]">
                    Welcome!
                    </div>
                    <WelcomeText />
                </div>
            </div>
            <ButtetList />
        </div>
    )
}

function WelcomeText() {
    return (
        <div className="flex flex-col">
            <div className="text-center">My name is David Thuman and you have arrived at the my website. Here you will find a digital 
            portfolio which serves to collect and share material that I have created on a personal, 
            professional, and educational level. Topics will range from computer science, to physics, 
            to politics. Have fun exploring!
            </div>
        </div>
    )
}

function ButtetList() {
    return (
        <ul className="list-disc self-center p-8">
            <li>Senior at Cornell University</li>
            <li>Double Major in Engineering Physics and Computer Science</li>
            <li>Minor in Public Policy</li>
            <li>President the Beta Theta Chapter of The Pi Kappa Alpha Fraternity</li>
            <li>Born and Raised in Wilmington, North Carolina</li>
        </ul>
    )
}