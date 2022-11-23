import Image from "next/image"
import ExploreCards from "../components/exploreCards"


async function getExplore() {
  // const db = new PocketBase('http://127.0.0.1:8090/');
  // const data = await db.records.getList('test_content');
  const res = await fetch('http://0.0.0.0:8090/api/collections/test_content/records?page=1&perPage=30');
  const data = await res.json();
  return data?.items as any[];
}


export default async function HomePage() {

  const explore = await getExplore();

  return (
      <div className="grid grid-cols-4 gap-5 h-full">
        <div className="grid grid-rows-3 bg-white m-9 rounded-3xl  shadow-lg">
          <div className="grid border-4 border-[#3d3652ff] w-full rounded-t-3xl shadow-xl justify-items-center">
            <Image
            className=""
            src="/headshot.png"
            alt="Picture of David Thuman"
            width={250}
            height={250}
          />
          </div>
          
          <div className=" text-center row-span-2">
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
                return <ExploreCards key={post.id} title={post.title} summary={post.summary} />
              })
            }
          </div>
        </div>
      </div>
  )
}
