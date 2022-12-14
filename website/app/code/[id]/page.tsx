import SidePanel from "../../../components/sidepanel";
import PocketBase from 'pocketbase';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

async function getContent(contentID: string) {
}

async function getSideContent(tags: string) {

    const db = new PocketBase('http://0.0.0.0:8090/');
    const records = await db.collection('code').getList(1,50,{filter: `tags ~ "${tags}"`})
    return records?.items as any[];
}

export default async function BuildsPage({ params }: any) {

    const db = new PocketBase('http://0.0.0.0:8090/');
    const record = await db.collection('code').getOne(params.id);
    var markdown
    var pdf
    var slides
    var video

    if (record.markdown !== '') {
        const url = db.getFileUrl(record, record.markdown).replace("s//", "s/code/");
        const response = await fetch(url);
        const text = await response.text();

        markdown = <ReactMarkdown
                    className="pt-10 pl-10 pr-10 bg-[#efefefff]"
                    children={text}
                    components={{
                        h1: ({node, ...props}) => <h1 className="text-3xl mb-5" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-2xl mb-5" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-xl mb-5" {...props} />,
                        h4: ({node, ...props}) => <h4 className="text-lg mb-5" {...props} />,
                        p: ({node, ...props}) => <p className="mb-5" {...props} />,
                        ul: ({node, ...props}) => <ul className="mb-5 pl-5" {...props} />,
                        img: ({node, ...props}) => <img className="border-2 border-[#3d3652ff]" {...props} />
                    }}
                />
    }
    if (record.pdf !== '') {
        const url = db.getFileUrl(record, record.pdf).replace("s//", "s/code/");
        console.log(url)
        pdf = <object className="px-10 bg-[#efefefff]" data={url} type="application/pdf" width="100%" height="100%">
                      <p>Alternative text - include a link <a href={url}>to the PDF!</a></p>
                    </object>
    }
    if (record.slides !== '') {
        const url = db.getFileUrl(record, record.slides).replace("s//", "s/code/");
        console.log(url)
        slides = <object className="px-10 pt-10 bg-[#efefefff]" data={url} type="application/pdf" width="100%" height="70%">
                      <p>Alternative text - include a link <a href={url}>to the PDF!</a></p>
                    </object>
    }
    if (record.video === true) {
        video = <video className="p-10 h-2/3 w-full bg-[#efefefff]" controls>
                    <source src="/roll_call_video.mov" type="video/mov" />
                </video>
    }

    const side: any[] = await getSideContent(record.tags);
    
    return (
        <div className="flex bg-[#efefefff] h-full">
            <SidePanel type="code" tag={record.tags} side={side}/>
            <div className="pl-sidePanel w-full h-full bg-[#efefefff]">
                {video}{slides}{pdf}{markdown}
            </div>
        </div>
            
    )
}
