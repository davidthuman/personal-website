function parseForCode(text: string) {
    var flag = -1;
    var res = '';
    var builder = ''
    Array.from(text).forEach( char => {
        if (char === '`') {
            if (flag > -1) {

            }
        }
        
    });
}

export function markdownToHTML(text: string) {

    const parts: string[] = text.split('\n\n');

    const res = parts.map( part => {

        if (part.split(' ')[0] === '###') {
            return <div className="text-xl mb-5">
                {part.slice(3,part.length)}
                </div>
        }
        if (part.split(' ')[0] === '##') {
            return <div className="text-2xl mb-5">
                {part.slice(2,part.length)}
                </div>
        }
        if (part.split(' ')[0] === '#') {
            return <div className="text-3xl mb-5">
                {part.slice(1,part.length)}
                </div>
        }
        if (part.includes('*')) {
            const part1 = part.split('*')
            part1.shift();
            return <ul className="mb-5 pl-5">
            {part1.map( item => {
                return <li>- {item}</li>
            })}
            </ul>
        }
        if (part.includes('`')) {
            var flag = -1
            var new_part = part.split(' ')
            return <code>{part}</code>
        }
        return <div className="mb-5">
            {part}</div>

    });
    
    return res
}

function HTMLparser(text: string) {

    var insideTag: string = text.slice(1, text.indexOf('>'));
    var splitTag: string[] = insideTag.split(' ');
    var tag: string = splitTag[0];
    var content: string = text.slice(text.indexOf('>')+1, 1+text.slice(1).indexOf('<'));
    console.log(tag)
    
    if (tag === 'p') {
        return <p className="mb-5">{content}</p>
    }
    if (tag === 'h1') {
        return <h1 className="text-3xl mb-5">{content}</h1>
    }
    if (tag === 'h2') {
        return <h1 className="text-2xl mb-5">{content}</h1>
    }
    if (tag === 'h3') {
        return <h1 className="text-xl mb-5">{content}</h1>
    }
    if (tag === 'h4') {
        return <h1 className="text-lg mb-5">{content}</h1>
    }
    if (tag === 'pre') {
        return <pre>{content}</pre>
    }
    if (tag === 'code') {
        return <code className="bg-black">{content}</code>
    }
    if (tag === 'ul') {
        return <ul className="mb-5 pl-5">{content}</ul>
    }
    if (tag === 'li') {
        return <li>{content}</li>
    }
    if (tag === 'blockquote') {
        return <blockquote>{content}</blockquote>
    }
    if (tag === 'table') {
        return <table>{content}</table>
    }
}

export function HTMLToReact(text: string) {

    
    const cleanText = text.replace("\n", "").replace("\n", "")
    const markedText = cleanText.replace(/></g, ">|<")
    console.log(markedText)
    var splitText: string[] = markedText.split("|");



    return <>
            {splitText.map( (element) => {
                return HTMLparser(element);
            })}
        </>
}