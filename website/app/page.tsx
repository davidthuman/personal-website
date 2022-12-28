import WelcomeCard from "../components/welcomeCard";
import ExploreCard from "../components/exploreCards";
import database from "../pages/api/baseData";


async function getExplore() {
  const client = database();
  const data = await client.collection('code').getList();
  return data?.items as any[];
}


export default async function HomePage() {

  const explore = await getExplore();


  return (
      <div className="justify-items-center bg-[#efefefff] flex flex-col lg:flex-row">
        <WelcomeCard />
        <ExploreCard {...explore}/>
      </div>
  )
}
