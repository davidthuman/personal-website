import Image from "next/image";
import ExploreCards from "../components/exploreCards";
import PocketBase from 'pocketbase';


async function getExplore() {
  const client = new PocketBase('http://0.0.0.0:8090');
  const data = await client.collection('code').getList();
  return data?.items as any[];
}


export default async function HomePage() {

  const explore = await getExplore();

  return (
      <div className="grid grid-cols-4 h-full justify-items-center bg-[#efefefff]">
        <div className=" bg-white rounded-3xl shadow-lg w-80 my-6">
          <div className="relative border-4 border-[#3d3652ff] w-full h-60 flex rounded-t-3xl shadow-xl items-center justify-center">
            <Image
              className="aspect-auto"
              src="/headshot.png"
              alt="Picture of David Thuman"
              width={235}
              height={0}
            />
          </div>
          
          <div className="m-2">
            <div className="text-center text-3xl mt-8 mb-8">
              Welcome!
            </div>
            <div className="flex flex-col">
              <div className="text-center">My name is David Thuman. You have arrived at the my website. Here you will a digital 
                portfolio which serves to collect and share material that I have created on a personal, 
                educational, and professional level. Topics will range from computer science, to physics, 
                to politics.
                </div>
              <ul className="list-disc pt-8 pl-5">
                <li>Senior at Cornell University</li>
                <li>Double Major in Engineering Physics and Computer Science</li>
                <li>Minor in Public Policy</li>
                <li>President the Beta Theta Chapter of The Pi Kappa Alpha Fraternity</li>
                <li>Born and Raised in Wilmington, North Carolina</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-3 p-7 bg-[#efefefff]">
          <div className="text-center text-4xl mb-7">
            Explore
          </div>
          
          <div className="grid grid-cols-2 gap-5">
            {explore?.map( (post) => {
                return <ExploreCards key={post.id} id={post.id} title={post.title} summary={post.summary} />
              })
            }
          </div>
        </div>
      </div>
  )
}
