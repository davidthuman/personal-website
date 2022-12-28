import Link from "next/link"

// The Side Panel needs all Tags associated with a piece of content and the content's ID
export default function SidePanel({ type, tag, side }: any) {

    return (
        <div className="hidden lg:flex flex-col bg-white rounded-r-3xl w-80 border-4 border-[#3d3652ff] divide-y-4 divide-[#3d3652ff] h-full fixed left-0">
            <div className="text-[#3d3652ff] text-2xl p-3 text-center">
                {tag + " " + type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
            <div className="flex flex-col gap-2 p-3">
                {side?.map( (post: any) => {
                    return <Link key={post.id} className="text-[#3d3652ff] text-lg" href={`/${type}/${post.id}`}>{post.title}</Link>;
                })}
            </div>

        </div>
    )
}