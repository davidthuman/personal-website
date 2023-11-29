import Image from "next/image"

export default function ContactMe() {

    const className_0 = "flex flex-col gap-10 p-10"
    const className_1 = "flex flex-row self-center w-fit h-fit justify-evenly shadow-lg bg-white rounded-xl border-2 border-[#3d3652ff]"
    const className_2 = "flex flex-row self-center gap-10 lg:flex-row"
    const className_3 = "flex flex-col self-center w-fit h-fit shadow-lg bg-white rounded-xl border-2 border-[#3d3652ff] w-1/2"

    return (
    <div className={className_0}>
        <div className={className_1} >
            <div className="w-1/2 p-3 rounded-l-xl border-2 border-white border-r-[#3d3652ff]">
                <div className="text-center text-2xl p-5">Reach out with Email !</div>
                <div className="flex flex-col text-center">
                    <div className="font-bold">Cornell University</div>
                    <a href = "mailto: dmt93@cornell.edu">dmt93@cornell.edu</a>
                    <div>-</div>
                    <div className="font-bold">Personal</div>
                    <a href = "mailto: davidmthuman@gmail.com">davidmthuman@gmail.com</a>
                    <div>-</div>
                    <div className="font-bold">Pi Kappa Alpha</div>
                    <a href = "mailto: dthumanpike@gmail.com">dthumanpike@gmail.com</a>
                </div>
            </div>
            <Image
                className="aspect-auto object-contain rounded-r-xl "
                src="/contact/Berto_Bo_Orc.jpeg"
                alt="David's LinkedIn Profile Page"
                width={600}
                height={0}
            />
        </div>
        <div className={className_2}>
            <div className={className_3}>
                <div className="rounded-t-xl border-2 border-white border-b-[#3d3652ff] text-center text-2xl p-3">
                    <a href="https://www.linkedin.com/in/david-thuman/">Connect on LinkedIn !</a>
                </div>
                <Image
                    className="aspect-auto object-contain rounded-b-xl"
                    src="/contact/linkedinPage.png"
                    alt="David's LinkedIn Profile Page"
                    width={500}
                    height={0}
                />
            </div>
            <div className={className_3}>
                <div className="rounded-t-xl border-2 border-white border-b-[#3d3652ff] text-2xl text-center p-3">
                    <a href="https://github.com/davidthuman">Follow on GitHub !</a>
                </div>
                <Image
                    className="aspect-auto object-contain rounded-b-xl"
                    src="/contact/githubPage.png"
                    alt="David's Github Profile Page"
                    width={500}
                    height={0}
                />
            </div>
            </div>
        
    </div>)
}