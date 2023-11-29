import Link from "next/link"

export default function ExploreCard( { explore }) {

    return (
        <div className="m-8 flex flex-col lg:px-40">
            <div className="place-self-center text-center text-4xl w-full p-3 bg-white rounded-3xl shadow-lg border-2 text-[#3d3652ff] border-[#3d3652ff] lg:w-full">
                Explore
            </div>
            
            <div className="grid lg:grid-cols-2 gap-5 py-7">
                {explore.map( (post) => {
                    return <ExploreCards key={post.id} props={post} />
                })
                }
            </div>
        </div>
    )
}

function ExploreCards({ props }) {
    return (
        <div className="shadow-lg bg-white rounded-xl p-3 border-2 border-white hover:border-[#3d3652ff]">
            <Link
                className="text-center text-xl pt-2 pb-2 text-[#3d3652ff]"
                href={`/posts/${props.id}`}
            >
                {props.title}
            </Link>
            <div>
                {props.date}
            </div>
        </div>
    )
}