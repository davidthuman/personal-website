import Link from "next/link"


export default function ExploreCards(props: any) {
    return (
        <div className="shadow-lg bg-white rounded-xl p-3">
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