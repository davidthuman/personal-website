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
        return <div className="mb-5">
            {part}</div>

    });
    
    return res
}