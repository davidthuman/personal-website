import Link from "next/link";
import PocketBase from 'pocketbase';

async function getPolitics() {
    const db = new PocketBase('http://0.0.0.0:8090/');
    const data = await db.collection('politics').getList();
    return data?.items as any[];
}

export default async function BuildsPage() {

    const politics = await getPolitics();

    return (
            <div className="bg-white rounded-r-3xl w-11/12 border-4 border-[#3d3652ff] h-full">
                <div>
                    <div className="text-[#3d3652ff] text-3xl pt-7 pl-5 w-3/4 border-4 border-white border-b-[#3d3652ff]">
                        Politics
                    </div>
                    <div className="w-3/4 pt-4 pl-4">
                    The Politics section is here to showcase my passion for deep and useful thought. Presenting both my professional and personal works, we are able to explore the garden of ideas in modern politics and philosophy.
                    </div>
                </div>
                <div className="flex">
                    <div className="m-5 w-1/2">
                        <div className="text-[#3d3652ff] text-2xl pt-3 pl-5 mb-5 w-full border-2 border-white border-b-[#3d3652ff]">
                            Professional
                        </div>
                        <div className="grid grid-flow-row gap-5">
                            {politics?.map( (post) => {
                                if (post.tags.includes('Professional')) {
                                    return <Link className="ml-7 text-[#3d3652ff]" href={`/politics/${post.id}`}>{post.title}</Link>;
                                }})
                            }
                        </div>
                    </div>
                    <div className="m-5 w-1/2">
                        <div className="text-[#3d3652ff] text-2xl pt-3 pl-5 mb-5 w-full border-2 border-white border-b-[#3d3652ff]">
                            Personal
                        </div>
                        <div className="grid grid-flow-row gap-5">
                            {politics?.map( (post) => {
                                if (post.tags.includes('Personal')) {
                                    return <Link className="ml-7 text-[#3d3652ff]" href={`/politics/${post.id}`}>{post.title}</Link>;
                                }})
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}