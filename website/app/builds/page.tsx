import Link from 'next/link'
// import PocketBase from '../../pocketbase';

async function getBuilds() {
    // const db = new PocketBase('http://127.0.0.1:8090/');
    // const data = await db.records.getList('test_content');
    const res = await fetch('http://0.0.0.0:8090/api/collections/test_content/records?page=1&perPage=30');
    const data = await res.json();
    return data?.items as any[];
}


export default async function BuildsPage() {

    const builds = await getBuilds();

    return (
            <div className="bg-white rounded-r-3xl w-11/12 border-4 border-[#3d3652ff] h-full">
                <div>
                    <div className="text-[#3d3652ff] text-3xl pt-7 pl-5 w-3/4 border-4 border-white border-b-[#3d3652ff]">
                        Builds
                    </div>
                    <div className="w-3/4 pt-4 pl-4">
                    The Builds section is here to showcase my technical skills within the computer science realm. Presenting both my professional and personal projects, one is able to understand the technologies I am proficient in, my level of organization, and my passions.
                    </div>
                </div>
                <div className="flex">
                    <div className="m-5 w-1/2">
                        <div className="text-[#3d3652ff] text-2xl pt-3 pl-5 w-full border-2 border-white border-b-[#3d3652ff]">
                            Professional
                        </div>
                        
                    </div>
                    <div className="m-5 w-1/2">
                        <div className="text-[#3d3652ff] text-2xl pt-3 pl-5 mb-5 w-full border-2 border-white border-b-[#3d3652ff]">
                            Personal
                        </div>
                        <div className="grid grid-flow-row gap-5">
                            {builds?.map( (build) => {
                                    return <Build key={build.id} build={build} />;
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
    )
}

function Build({ build }: any) {

    const {id, title, summary } = build || {};

    return (
        <div className="grid grid-flow-row">
            <Link className="ml-7 text-[#3d3652ff]" href={`/builds/${id}`}>{title}</Link>
            {summary}
        </div>
    )
}