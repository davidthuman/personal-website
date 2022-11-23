import SidePanel from "../../../components/sidepanel"

export async function getBuild(contentId: string) {

    const res = await fetch(
        `http://0.0.0.0:8090/api/collections/test_content/records/${contentId}`
    );
    const data = await res.json();
    return data;
}


export default async function BuildsPage({ params }: any) {

    const content = await getBuild(params.id);
    
    return (
        <div className="flex h-full">
            <SidePanel/>
            <div className="m-10 w-9/12 flex">
                {content.title}
                {content.summary}
            </div>   
        </div>
            
    )
}
