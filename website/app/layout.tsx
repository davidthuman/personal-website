import TopNavBar from "../lib/components/topNavBar";
import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body>
                <div className="bg-[#efefefff] h-screen text-black">
                    <TopNavBar></TopNavBar>
                    <div className="font-body h-max w-full bg-[#efefefff]">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}