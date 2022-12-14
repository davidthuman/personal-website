import SidePanel from "../../../components/sidepanel";
import PocketBase from 'pocketbase';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

async function getContent(contentID: string) {

    const db = new PocketBase('http://0.0.0.0:8090/');
    const record = await db.collection('politics').getOne(contentID);
    const url = db.getFileUrl(record, record.markdown).replace("s//", "s/politics/");
    const response = await fetch(url);
    const content = await response.text();

    return [<ReactMarkdown
                children={content}
                components={{
                    h1: ({node, ...props}) => <h1 className="text-3xl mb-5" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-2xl mb-5" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-xl mb-5" {...props} />,
                    h4: ({node, ...props}) => <h4 className="text-lg mb-5" {...props} />,
                    p: ({node, ...props}) => <p className="mb-5" {...props} />,
                    ul: ({node, ...props}) => <ul className="mb-5 pl-5" {...props} />
                }}
                />, record.tags]
}

async function getSideContent(tags: string) {

    const db = new PocketBase('http://0.0.0.0:8090/');
    const records = await db.collection('politics').getList(1,50,{filter: `tags ~ "${tags}"`})
    return records?.items as any[];
}

export default async function BuildsPage({ params }: any) {

    const [content, tags] = await getContent(params.id);
    const side: any[] = await getSideContent(tags);

    
    return (
        <div className="flex bg-[#efefefff]">
            <SidePanel type="politics" tag={tags} side={side}/>
            <div className="pl-sidePanel m-10 w-9/12">
                {content}
            </div>
        </div>
            
    )
}