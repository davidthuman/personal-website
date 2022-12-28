import TopNavBar from "../components/topNavBar";
import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head></head>
            <body>
                <div className="bg-[#efefefff] h-screen font-body text-black pt-20">
                    <TopNavBar></TopNavBar>
                    <div className="font-body h-full w-full">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}