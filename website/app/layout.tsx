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
            <body className="">
                <div className="bg-[#efefefff] h-screen font-body">
                    <TopNavBar></TopNavBar>
                    <div className="h-9/10">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}