export default function Contact(){
    return (
        <>

        <div className="w-4/5 m-auto flex flex-col lg:flex-row gap-6 mt-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg flex-1 mt-10">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">Have questions or need assistance? We're here to help! Reach out to us through any of the following methods:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Email: <a href="mailto:contact@notesapp.com" className="text-blue-600 hover:underline">contact@notesapp.com</a></li>
                    <li>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></li>
                    <li>Address: 123 Study Lane, Exam City, EC 12345</li>
                </ul>
            </div>
        </div>
        </>
    )
}