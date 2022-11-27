import SidePanel from "../../../components/sidepanel";
import PocketBase from 'pocketbase';
import { markdownToHTML } from "../../../helper/markdownToHTML";
import { markdown } from "../../../helper/drawdown"

async function getContent(contentID: string) {

    const db = new PocketBase('http://0.0.0.0:8090/');
    const record = await db.collection('testContent').getOne(contentID);
    const url = db.getFileUrl(record, record.article).replace("s//", "s/testContent/");
    const response = await fetch(url);
    const content = await response.text();
    return markdown(content);

}

export default async function BuildsPage({ params }: any) {

    const content = await getContent(params.id);
    
    return (
        <div className="flex bg-[#efefefff]">
            <SidePanel/>
            <div
                className="pl-sidePanel m-10 w-9/12 "
                dangerouslySetInnerHTML={{__html: content}} 
            />
        </div>
            
    )
}
