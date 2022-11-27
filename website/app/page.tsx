import Image from "next/image";
import ExploreCards from "../components/exploreCards";
import PocketBase from 'pocketbase';


async function getExplore() {
  const client = new PocketBase('http://0.0.0.0:8090');
  const data = await client.collection('testContent').getList();
  return data?.items as any[];
}


export default async function HomePage() {

  const explore = await getExplore();

  return (
      <div className="grid grid-cols-4 h-full justify-items-center p-5">
        <div className=" bg-white rounded-3xl shadow-lg w-60 my-6">
          <div className="relative border-4 border-[#3d3652ff] w-full h-60 rounded-t-3xl shadow-xl justify-items-center">
            <Image
            className=""
            src="/headshot.png"
            alt="Picture of David Thuman"
            fill
          />
          </div>
          
          <div className="text-center m-2">
            <div className="text-3xl mt-8 mb-8">
              Welcome!
            </div>
            <div className="text-center flex">
              You have arrived at the my website. Here you will a digital portfolio which serves to collect and share material that I have created on a personal, educational, and professional level. Topics will range from computer science, to physics, to politics. 
            </div>
          </div>
        </div>
        <div className="col-span-3 p-7">
          <div className="text-center text-4xl pb-7">
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
