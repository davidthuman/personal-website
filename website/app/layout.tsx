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
                <div className="bg-[#efefefff] h-screen font-body pt-20">
                    <TopNavBar></TopNavBar>
                    <div className=" h-full">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}