import Link from 'next/link'
import Image from 'next/image'

export default function TopNavBar() {
    return (
        <div className="bg-[#3d3652ff] shadow-xl flex justify-evenly items-center h-1/10 w-screen fixed top-0" >
            <Link className='text-white font-body mx-10 md:text-3xl text-2xl' href="/"> DAVID THUMAN </Link>
            <Link className='text-white font-body mx-4 md:text-2xl text-xl' href="builds"> BUILDS </Link>
            <Link className='text-white font-body mx-4 md:text-2xl' href="ideas"> IDEAS </Link>
            <Link className='text-white font-body mx-4 md:text-2xl' href="media"> MEDIA </Link>
            <Link className='text-white font-body mx-4 md:text-2xl' href="about"> ABOUT </Link>
            <Link className='text-white font-body mx-4 md:text-2xl' href="resume"> RESUME </Link>
            <Link className='text-white font-body mx-4 md:text-2xl' href="contactMe"> CONTACT ME </Link>
            <Link className='mx-4' href="https://www.linkedin.com/in/david-thuman/">
                <Image
                    src="/linkedinLogo"
                    alt="Link to David's LinkedIn"
                    width={50}
                    height={50}
                />
            </Link>
            <Link className='mx-4 invert' href="https://github.com/davidthuman">
                <Image
                    src="/GitHubLogo"
                    alt="Link to David's GitHub"
                    width={50}
                    height={50}
                />
            </Link>
        </div>
    )
}