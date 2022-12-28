import Link from "next/link"

export default function ExploreCard( explore: any ) {
    var values = Object.keys(explore).map(function(key) {
        return explore[key];
    });

    return (
        <div className="m-8 flex flex-col">
            <div className="place-self-center text-center text-4xl w-4/6 p-3 bg-white rounded-3xl shadow-lg border-2 text-[#3d3652ff] border-[#3d3652ff] lg:w-full">
                Explore
            </div>
            
            <div className="grid grid-cols-2 gap-5 py-7">
                {values.map( (post: any) => {
                    return <ExploreCards key={post.id} id={post.id} title={post.title} summary={post.summary} />
                })
                }
            </div>
        </div>
    )
}

function ExploreCards(props: any) {
    return (
        <div className="shadow-lg bg-white rounded-xl p-3 border-2 border-white hover:border-[#3d3652ff]">
            <Link
                className="text-center text-xl pt-2 pb-2 text-[#3d3652ff]"
                href={`/code/${props.id}`}
            >
                {props.title}
            </Link>
            <div>
                {props.summary}
            </div>
        </div>
    )
}