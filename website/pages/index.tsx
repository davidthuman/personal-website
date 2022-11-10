import TopNavBar from "../components/topNavBar"
import Image from "next/image"
import ExploreCards from "../components/exploreCards"

export default function Home() {
  return (
    <div className="bg-[#efefefff] h-screen font-body">
      <TopNavBar></TopNavBar>
      <div className="grid grid-cols-4 gap-5 m-10">
        <div className="grid grid-rows-3 bg-white m-5 rounded-3xl h-fit shadow-lg">
          <div className="grid border-4 border-[#3d3652ff] w-full rounded-t-3xl shadow-xl justify-items-center">
            <Image
            className=""
            src="/headshot.png"
            alt="Picture of David Thuman"
            width={250}
            height={250}
          />
          </div>
          
          <div className="text-3xl mt-8 text-center row-span-2">
            Welcome!
          </div>
        </div>
        <div className="col-span-3">
          <div className="text-center text-4xl pb-8">
            Explore
          </div>
          
          <div className="grid grid-cols-2 gap-5">
            <ExploreCards title="Weekly Schedule Analysis" description="For my Junior year at Cornell University, I tracked what I did on a day-today basis in 15-minute intervals. I then analyzed and graphed the results."/>
            <ExploreCards />
            <ExploreCards />
            <ExploreCards />
          </div>
        </div>
      </div>
    </div>
  )
}
