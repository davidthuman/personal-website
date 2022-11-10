import Link from 'next/link'
import Image from 'next/image'

export default function TopNavBar() {
    return (
        <div className="bg-[#3d3652ff] p-7 shadow-xl flex items-center" >
            <Link className='text-white font-body text-3xl mx-10' href="/"> DAVID THUMAN </Link>
            <Link className='text-white font-body mx-4 text-2xl' href="builds"> BUILDS </Link>
            <Link className='text-white font-body mx-4 text-2xl' href="ideas"> IDEAS </Link>
            <Link className='text-white font-body mx-4 text-2xl' href="media"> MEDIA </Link>
            <Link className='text-white font-body mx-4 text-2xl' href="about"> ABOUT </Link>
            <Link className='text-white font-body mx-4 text-2xl' href="resume"> RESUME </Link>
            <Link className='text-white font-body mx-4 text-2xl' href="contactMe"> CONTACT ME </Link>
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