export default function Upload() {
    return (
        <div className="w-4/5 m-auto mt-10 flex flex-col gap-6 items-center absolute top-[64px] left-[10%]">
            <h2 className="text-xl font-semibold mb-4">Upload Notes</h2>
            {/* //i want a content for upload page with a link to google forms */}

            <p className="">Share your study notes with the community by filling out the form below:</p>
            <p className="text-center ">Help build a knowledge base for students by sharing your notes. Your contributions will help others prepare for exams and study more effectively.</p>
            {/* the content should be more descriptive and engaging with best css used like real time working project  */}
            
            
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdh_M8TUpXIrUW9sO2fJiNwGeKCY375so9qC0hWvnbkRFQ4GA/viewform?usp=dialog"
                target="_blank"
                className="text-center px-3 py-2 bg-black text-white rounded-lg hover:scale-105 transition-transform duration-200 shadow-blue-950"
                
            >
                <svg className="w-6 h-6 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.583 5 5 0 119.762 2.417A4 4 0 017 16z" />
                </svg>
                Upload Notes
            </a>

           
        </div>
    );
}



