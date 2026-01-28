export default function About() {
    return (
        <>
            {/* about page using tailwind css only and with some text insite should have icons, diffrent-diffrent font sizes ,color, and all the neceesary things needed for aboutus page of an engineering student notes app aplication ,content should be enough long so that it will be like real about us section
         */}

            <div className="w-full min-h-screen bg-gray-400 absolute top-[64px]">
                <div className="w-4/5 m-auto mt-10 flex flex-col lg:flex-row gap-6">
                    <div className=" p-6 rounded-2xl shadow-lg flex-1 ">
                        <h2 className="md:text-3xl sm:xl font-bold mb-4 text-gray-700">About Notes Khojo/Bhejo</h2>
                        <p className="mb-4 md:text-lg sm:text-sm ">Welcome to Notes Khojo/Bhejo, your ultimate destination for sharing and discovering study notes tailored for engineering students. Our platform is dedicated to fostering a collaborative learning environment where students can easily access high-quality notes to enhance their academic journey.</p>
                        <p className="mb-4 md:text-lg sm:text-sm ">At Notes Khojo/Bhejo, we understand the challenges faced by engineering students in managing vast amounts of information. Our mission is to simplify this process by providing a centralized hub where students can upload their notes and benefit from the contributions of their peers.</p>
                        <p className="mb-4 md:text-lg sm:text-sm ">Whether you're preparing for exams, working on projects, or simply looking to deepen your understanding of complex topics, Notes Khojo/Bhejo is here to support you. Join our community today and take advantage of the wealth of knowledge shared by fellow engineering students!</p>
                    </div>
                </div>

                {/* add some icons neccessary in about us section by providing the temp link of github,linkdin,and somemore social media application ,use tailwind for there proper alignment and size */}
                <div className="w-4/5 m-auto mt-10 flex gap-6 justify-center mb-10">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-10 h-10 hover:scale-110 transition-transform duration-200" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition-transform duration-200" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-10 h-10 hover:scale-110 transition-transform duration-200" />
                    </a>
                </div>
            </div>
        </>
    )
}