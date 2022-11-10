


export default function ExploreCards(props: any) {
    return (
        <div className="shadow-lg bg-white rounded-xl p-3">
            <div className="text-center text-xl pt-2 pb-2 text-[#3d3652ff]">
                {props.title}
            </div>
            <div>
                {props.description}
            </div>
        </div>
    )
}