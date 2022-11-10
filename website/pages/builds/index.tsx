import TopNavBar from "../../components/topNavBar"

export default function Builds() {
    return (
        <div className="bg-[#efefefff] h-screen font-body">
            <TopNavBar />
            <div className="bg-white rounded-r-3xl w-5/6 h- border-4 border-[#3d3652ff]">
                <div>
                    <div className="text-[#3d3652ff] text-3xl pt-7 pl-5 w-3/4 border-4 border-white border-b-[#3d3652ff]">
                        Builds
                    </div>
                    <div className="w-3/4 pt-4 pl-4">
                    The Builds section is here to showcase my technical skills within the computer science realm. Presenting both my professional and personal projects, one is able to understand the technologies I am proficient in, my level of organization, and my passions.
                    </div>
                </div>
                <div className="flex h-full">
                    <div className="m-5 w-1/2">
                        <div className="text-[#3d3652ff] text-2xl pt-3 pl-5 w-full border-2 border-white border-b-[#3d3652ff]">
                            Professional
                        </div>


                    </div>
                    <div className="m-5 w-1/2">
                        <div className="text-[#3d3652ff] text-2xl pt-3 pl-5 w-full border-2 border-white border-b-[#3d3652ff]">
                            Personal
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}