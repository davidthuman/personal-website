import Image from "next/image";
import database from "../../pages/api/baseData";

async function getResume() {

    const db = database();
    const records = await db.collection('files').getList(1,50, {filter: 'name = "resume"'})
    const resume = records?.items[0]
    const url = db.getFileUrl(resume, resume.file);
    return url.replace("s//", "s/files/");
}

export default async function Resume() {

    const url = await getResume();
    const section = "font-bold uppercase text-xl"

    return (
        <div className="bg-[#efefefff] flex justify-center">
            <div className="py-10 mx-10 flex flex-col w-full gap-5 lg:w-8/12">

                <div className="flex justify-evenly items-center">
                    <div className="text-4xl p-5">Resume</div>
                    <a className="rounded-full bg-[#3d3652ff] p-2 px-5 text-white font-bold h-min" href={url} role="button" download='pdf' target="_blank" rel="noopener noreferrer">Download resume</a>
                </div>

                <div className={section}>Skills and Technologies</div>

                <div className="pl-5 grid grid-rows-2 grid-flow-col-dense justify-items-center items-center">
                    <div>Python</div><Image className="aspect-auto" src="/python-logo-only.png" alt="" width={50} height={0}/>
                    <div>Java</div><Image className="" src="/java_logo.png" alt="" width={50} height={0}/>
                    <div>Javascript</div><Image className="" src="/javascript_logo.png" alt="" width={50} height={0}/>
                    <div>Typescript</div><Image className="" src="/typescript_logo.png" alt="" width={50} height={0}/>
                    <div>C</div><Image className="" src="/c_logo.png" alt="" width={50} height={0}/>
                    <div>OCaml</div><Image className="" src="/ocaml_logo.svg" alt="" width={50} height={0}/>
                    <div>SQL</div><Image className="" src="/sql_logo.png" alt="" width={50} height={0}/>
                </div>
                <div className="pl-5 grid grid-rows-2 grid-flow-col-dense justify-items-center items-center">
                    <div>Django</div><Image className="" src="/django_logo.svg" alt="" width={50} height={0}/>
                    <div>React JS</div><Image className="" src="/react_logo.png" alt="" width={50} height={0}/>
                    <div>Next JS</div><Image className="" src="/next_logo.png" alt="" width={50} height={0}/>
                    <div>PostgreSQL</div><Image className="" src="/postgresql_logo.png" alt="" width={50} height={0}/>
                    <div>Docker</div><Image className="" src="/docker_logo.png" alt="" width={50} height={0}/>
                    <div>Ardunio</div><Image className="" src="/ardunio_logo.png" alt="" width={50} height={0}/>
                </div>


                <div className={section}>Coursework</div>
                
                <div className="pl-5">
                    <div><strong>CS</strong> - Object-Oriented Programming, Data Structures and Functional Programming, Operating Systems, Embedded Systems, Introduction to Computer Networks, Natural Language Processing</div>
                    <div><strong>AEP</strong>- Intro to Nanotechnology and Nanoscience, Engineering Quantum Information Hardware, Electronic Circuits</div>
                    <div><strong>Public Policy</strong> - Politics of Public Policy in the United States, Constitutional Politics, Nature Functions and Limits of Law</div>
                </div>

                <div className={section}>Education</div>

                <div className="pl-5">
                    <div className="flex justify-between">
                        <div><strong>Cornell University, College of Engineering</strong> - <i>Ithaca, New York</i></div><div className="font-bold italic">August '19 to Present</div>
                    </div>
                    <div className="pl-5">
                        <div>Major: Bachelor of Science in Engineering Physics and Computer Science. Minor in Public Policy, Class of 2023, GPA: 3.66</div>
                        <div>Engineering Dean's List: FA2019, SP2020, FA2020, SP2021, SP2022</div>
                    </div>
                </div>

                <div className={section}>Work Experience</div>

                <div className="pl-5">
                    <div className="flex justify-between">
                        <div><strong>Student Software Developer</strong> - <i>Cornell University, Conference and Event Services</i></div><div className="font-bold italic">August '22 to Present</div>
                    </div>
                    <div className="pl-5">
                        <div>Worked within the department of Conference and Event Services to develop custom software to progress their business endeavors. Lead a team of 
                    another developer to maintain three different code bases. We utilized technologies like Python, React JS, Django, and Postgres to develop webapplications, 
                    a legal contract builder, and a custom algorithm to generate a program housing solution.</div>
                    </div>
                </div>

                <div className="pl-5">
                    <div className="flex justify-between">
                        <div><strong>Political Content Writer</strong> - <i>Purple Pill</i></div><div className="font-bold italic">November '21 to June '22</div>
                    </div>
                    <div className="pl-5">
                        <div>Part-time writer and editor for a political news start-up called Purple Pill. Political articles range from the legislative process, social issues, to 
                    foreign affairs. 1-2 articles a week.</div>
                    </div>
                </div>

                <div className="pl-5">
                    <div className="flex justify-between">
                        <div><strong>Student Academic Service Assistant</strong> - <i>Cornell University</i></div><div className="font-bold italic">August '21 to Present</div>
                    </div>
                    <div className="pl-5">
                        <div>Part-time teacher assistant for AEP 4200: Intermediate Mathematical Physics. I hold office hours, write up and grade weekly problem sets, and meet weekly 
                    with my other TAs to assess the state of the students' learning.</div>
                    </div>
                </div>

                <div className="pl-5">
                    <div className="flex justify-between">
                        <div><strong>Undergraduate Researcher</strong> - <i>McMahon Labs at Cornell University</i></div><div className="font-bold italic">August '20 to December '20</div>
                    </div>
                    <div className="pl-5">
                        <div>Research with a group of three other undergraduates' noise resilient quantum circuits and prepared a weekly update slide on research progress. Created 
                    algorithm to search for the lowest energy-states of a frustrated Hamiltonian system. Tested higher lattice structures for noise resilient properties 
                    represented in Liu's Variational Quantum Eigensolver paper.</div>
                    </div>
                </div>

                <div className={section}>Special Projects</div>

                <div className="pl-5">
                    <div className="flex justify-between">
                        <div><strong>Congressional Roll-Call Predictor</strong> - <i>Python, PyTorch, Machine Learning</i></div><div className="font-bold italic">August '22 to Present</div>
                    </div>
                    <div className="pl-5">
                        <div>Using a neural network, I built a predictive model for roll-call votes in the Senate. Using Python and TensorFlow, I was able to web-scrape data 
                    from congress.gov and senate.gov, clean and process the data, and then train a neural network to predict a specific senator's roll-call vote on a 
                    given piece of legislation, using word features from the document.</div>
                    </div>
                </div>

                <div className="pl-5">
                    <div className="flex justify-between">
                        <div><strong>Weekly Schedule Analysis</strong> - <i>Python, Pandas, Data Visualization</i></div><div className="font-bold italic">August '21 to May '22</div>
                    </div>
                    <div className="pl-5">
                        <div>Beginning Fall 2021, I tracked my actions in 15-minute blocks. Using Python, I processed and analyzed the data, calculating how I spent my time being 
                    a student at Cornell University. Classifications were Work, Life, Food, and Sleep, Further breakdown were used to breakup courses, time with friends, 
                    or general fun. Matplotlib Python library was used to visualize the breakdown of my life, semester by semester.</div>
                    </div>
                </div>

                <div className={section}>Extra Curriculars</div>

                <div className="pl-5">
                    <div className="flex justify-between">
                        <div><strong>President of The Pi Kappa Alpha Fraternity</strong> - <i>Beta Theta Chapter at Cornell University</i></div><div className="font-bold italic">August '22 to Present</div>
                    </div>
                    <div className="pl-5">
                        <div>Lead an Executive Board of 11 members through teamwork, leadership, and delegation. Our organization consists of over 65 members, with a 
                    budget of over 200,000 dollars. Direct the Executive Board to represent and increase our fraternity's philanthropy, community service, 
                    and social efforts.</div>
                    </div>
                </div>

                <div className="pl-5">
                    <div className="flex justify-between">
                        <div><strong>External Vice President of The Pi Kappa Alpha Fraternity</strong> - <i>Beta Theta Chapter at Cornell University</i></div><div className="font-bold italic">August '21 to August '22</div>
                    </div>
                    <div className="pl-5">
                        <div>Maintain a budget of over $20,000 each semester, while leading a team of seven Chairmen with their committees. Chair positions and 
                    I work to increase the Fraternity's relations with outside communities, raise money for philanthropy causes, and volunteer for community 
                    service projects. Manages the website/social media, philanthropy events, community service hours, athletics rosters, special events planning. 
                    As EVP, I and the other Executive Board members hold weekly meetings to discuss the progress and state of the Fraternity.</div>
                    </div>
                </div>

                <div className="pl-5">
                    <div className="flex justify-between">
                        <div><strong>Web Scraping Bot</strong> - <i>Python, Web Scraping</i></div><div className="font-bold italic">January '20 to June '20</div>
                    </div>
                    <div className="pl-5">
                        <div>Used Python to parse HTML and Chromium to control the website directly. Created a bot that uses Chromium to directly interface with the 
                    browser to turn names into online usernames. Page requested the online profiles of users, scraping and cleaning the HTML with Python's 
                    Beautiful Soup library. Once all the large dataset is cleaned, process the data using Python's Pandas library to visualize and graph.</div>
                    </div>
                </div>

                <div className="pl-5">
                    <div className="flex justify-between">
                        <div><strong>Cornell Integration Bee</strong> - <i>Cornell University</i></div><div className="font-bold italic">February '20 to March '20</div>
                    </div>
                    <div className="pl-5">
                        <div>Planned a school wide integration bee with over 100 participants and cash prizes of $100, $50, and $25 for First, Second, and Third. 
                    Collaborated with faculty and organized a group of volunteers to help promote the event and guide students through the event process. 
                    Created over 100 unique and challenging integrals that would be used to test students' ability. </div>
                    </div>
                </div>
            </div>
        </div>
    )
}