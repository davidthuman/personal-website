import Markdown from "markdown-to-jsx"



export function markdown2jsx(markdown) {
    return (
        <Markdown
            options={{
                overrides: {
                    h1: {
                        props: {className: "text-3xl mb-5"}
                    },
                    h2:
                    {
                        props: {className: "text-2xl mb-5"}
                    },
                    h3: {
                        props: {className: "text-xl mb-5"}
                    },
                    h4: {
                        props: {className: "text-lg mb-5"}
                    },
                    p: {
                        props: {className: "mb-5"}
                    },
                    ul: {
                        props: {className: "mb-5 pl-5"}
                    },
                    img: {
                        props: {className: "border-2 border-[#3d3652ff] w-2/3"}
                    },
                },
            }}
        >
            {markdown}
        </Markdown>
    );
}