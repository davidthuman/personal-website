import Image from "next/image"

export default function AboutMe() {

    return (
        <div className="flex h-full w-full justify-center items-center overscroll-contain">
            <div className="grid grid-cols-2 md:grid-cols-1 grid-rows-2 w-2/3 shadow-lg bg-white rounded-xl border-2 border-[#3d3652ff] justify-center items-center">
                <div className="col-span-2 p-5 px-10">
                    <div className="text-3xl">About David Thuman</div>
                    <div>The background, Thought Process, and Goals</div>
                    <ul className="pl-10 pt-5">
                        <li>Senior at Cornell University</li>
                        <li>Double Major in Engineering Physics and Computer Science</li>
                        <li>Minor in Public Policy</li>
                        <li>President the Beta Theta Chapter of The Pi Kappa Alpha Fraternity</li>
                        <li>Born and Raised in Wilmington, North Carolina</li>
                    </ul>

                </div>
                <div>
                <Image
                    className="aspect-auto object-contain rounded-r-xl bg-[#3d365236] rounded-xl border-l-2  border-b-2 border-[#3d3652ff]"
                    src="/headshot.png"
                    alt="Picture of David Thuman"
                    width={300}
                    height={0}
                />
                </div>
                <div className="col-span-3 p-5 ">
                I was born and raised in Wilmington, North Carolina. After I graduated high school, I have been attending Cornell University, 
                enrolled in the College of Engineering as an Engineering Physics major. I have always loved math as a child and developed a 
                love for physics and politics as I went on in high school. The engineering mindset, as I have learned, has been my first line 
                of thinking for as long as I could remember; it is actually what I wrote my college admissions essay on when I applied to 
                Cornell! My future goals, however, do not directly pertain to my pursued degree in 'Engineering Physics'. My goal is to be a 
                politician, or at least effect United States politics. As my setting changed when I moved to Ithaca, New York, I realized 
                within the next couple of years that my main goal in life is to help people. Realized how I interacted with people as I was 
                growing up, it should have been clear that I was already pointed in this direction. The decision to go into politics and not 
                a STEM field is one mostly based on logistics; I would need to be a world-class engineer to help many people, but as a 
                politician, I could more easily affect the lives of others in a positive manner. However, this does not mean I plan to drop 
                my devotion to STEM. My dream job fall at the cross-section between computer science and politics. I could go on and on into 
                the systems, frameworks, and ideas that flow out of the mind of an engineer turned politician, so that is what this website 
                is for. Here is my application to be your next representative. Happy reading! 
                </div>
            </div>
        </div>
        
    )
}