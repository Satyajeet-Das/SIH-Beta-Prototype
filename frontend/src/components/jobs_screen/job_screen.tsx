import { useState } from 'react';

const JobListPage = () => {
    const icons: { [key: string]: string } = {
        "Java": "src/assets/lanugages/java.png",
        "Python": "src/assets/lanugages/python.webp",
        "C++": "src/assets/lanugages/cpp.png",
        "Go": "src/assets/lanugages/go.png",
        "Rust": "src/assets/lanugages/rust.png",
        "React": "src/assets/lanugages/react.png",
        "Tailwind CSS": "src/assets/lanugages/tailwind.png",
        "JavaScript": "src/assets/lanugages/js.png",
        "HTML": "src/assets/lanugages/html.png",
        "CSS": "src/assets/lanugages/css.png",
        "Node.js": "src/assets/lanugages/nodejs.png",
        "SQL": "src/assets/lanugages/sql.png",
    };
    const jobs = [
        {
            id: 2,
            location: 'Delhi, India',
            type: 'Part-Time',
            salary: '₹80,00,000 - ₹1,00,00,000',
            title: 'Software Engineer',
            daysAgo: 10,
            logo: 'src/assets/google.webp',
            companyName: 'Google',
            description: 'We are looking for a software engineer with a diverse experience in Java, Python, and C++.',
            skills: ['Java', 'Python', 'C++', 'Go', 'Rust'],
            experience: '5-7 years',
            backgroundImg: 'src/assets/download.jpeg',
        },
        {
            id: 1,
            location: 'Bangalore, India',
            type: 'Full-Time',
            salary: '₹60,00,000 - ₹72,00,000',
            title: 'Frontend Developer',
            daysAgo: 5,
            logo: 'src/assets/amazon.webp',
            companyName: 'Amazon',
            description: 'We are looking for a frontend developer with experience in React and Tailwind CSS.',
            skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
            experience: '2-4 years',
            backgroundImg: 'src/assets/amazon_headquaters.jpg',
        },
        {
            id: 3,
            location: 'Mumbai, India',
            type: 'Full-Time',
            salary: '₹50,00,000 - ₹65,00,000',
            title: 'Backend Developer',
            daysAgo: 8,
            logo: 'src/assets/microsoft.png',
            companyName: 'Microsoft',
            description: 'We are looking for a backend developer skilled in JavaScript and Python.',
            skills: ['JavaScript', 'Python', 'Node.js', 'SQL'],
            experience: '3-5 years',
            backgroundImg: 'src/assets/microsoft_headquaters.jpg',
        }
    ];

    const [selectedJob, setSelectedJob] = useState(jobs[0]);

    return (
        <div className="flex h-screen">
            {/* Job List Section */}
            <div className="w-1/3 p-4 bg-gray-100 overflow-auto rounded-[20px]">
                {/* <h2 className="text-2xl font-semibold mb-4">Job Listings</h2> */}
                <ul>
                    {jobs.map((job) => (
                        <li
                            key={job.id}
                            className={`p-4 mb-4 shadow-md cursor-pointer transition border-2 rounded-[20px] ${selectedJob?.id === job.id ? 'bg-yellow-100 border-yellow-500' : 'bg-white border-yellow-400 hover:bg-gray-50'
                                }`}
                            onClick={() => setSelectedJob(job)}
                        >
                            <div className="flex items-start justify-between w-full text-sm text-gray-400 mb-2">
                                <div className="flex items-center">
                                    <img
                                        src='src/assets/location_icon.png'
                                        alt="Location Icon"
                                        className="w-4 h-4 mr-1"
                                    />
                                    <p>{job.location}</p>
                                </div>
                                <p>{job.daysAgo} days ago</p>
                            </div>

                            <div className="flex items-center mb-2">
                                <img src={job.logo} alt="Company Logo" className="w-12 h-12 mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">{job.title}</h3>
                                    <p className="text-sm text-gray-600">{job.companyName}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 text-sm text-gray-500 mt-2">
                                <div className="bg-gray-200 px-3 py-1 rounded-full flex items-center">
                                    <img src="src/assets/money.png" alt="Salary Icon" className="w-4 h-4 mr-1" />
                                    {job.salary}
                                </div>
                                <div className="bg-gray-200 px-3 py-1 rounded-full flex items-center">
                                    <img src="src/assets/person.webp" alt="Experience Icon" className="w-4 h-4 mr-1" />
                                    {job.experience}
                                </div>
                                <div className="bg-gray-200 px-3 py-1 rounded-full flex items-center">
                                    <img src="src/assets/job.png" alt="Job Icon" className="w-4 h-4 mr-1" />
                                    {job.type}
                                </div>
                            </div>
                        </li>
                    ))}


                </ul>
            </div>

            {/* Job Description Section */}
            <div className="w-2/3 p-8 bg-white overflow-auto rounded-r-[20px] bg-gray-100">
                <div className="relative mb-6">
                    {/* Background Image */}
                    <img
                        src={selectedJob.backgroundImg}
                        alt="Background"
                        className="w-full h-48 object-cover rounded-t-[20px]"
                    />

                    {/* Logo */}
                    {/* Give it some padding */}
                    <div className="absolute top-1/2 transform translate-y-1 left-4 bg-white p-2 rounded-full shadow-md">
                        <img
                            src={selectedJob.logo}
                            alt="Company Logo"
                            className="w-16 h-16 rounded-full shadow-md"
                            style={{ backgroundColor: 'white' }}
                        />
                    </div>

                    {/* Content below the image */}
                    <div className="flex justify-between items-center mt-8 px-4">
                        <div className="flex items-center">
                            <h2 className="text-3xl font-semibold">{selectedJob.companyName}</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="px-4 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition">
                                Apply Now
                            </button>
                            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full shadow hover:bg-gray-200 transition">
                                <img src="src/assets/more.png" alt="More Options" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>


                <div className="flex flex-wrap gap-4 mb-6">
                    {/* <div className="bg-gray-200 px-4 py-2 rounded-full text-sm">{selectedJob.location}</div>
                    <div className="bg-gray-200 px-4 py-2 rounded-full text-sm">{selectedJob.type}</div>
                    <div className="bg-gray-200 px-4 py-2 rounded-full text-sm">{selectedJob.salary}</div>
                    <div className="bg-gray-200 px-4 py-2 rounded-full text-sm">{selectedJob.daysAgo} days ago</div> */}
                    <div className="bg-gray-200 px-4 py-2 rounded-full text-sm flex items-center">
                        <img src="src/assets/location_icon.png" alt="Location Icon" className="w-4 h-4 mr-1" />
                        {selectedJob.location}
                    </div>
                    <div className="bg-gray-200 px-4 py-2 rounded-full text-sm flex items-center">
                        <img src="src/assets/job.png" alt="Job Icon" className="w-4 h-4 mr-1" />
                        {selectedJob.type}
                    </div>
                    <div className="bg-gray-200 px-4 py-2 rounded-full text-sm flex items-center">
                        <img src="src/assets/money.png" alt="Salary Icon" className="w-4 h-4 mr-1" />
                        {selectedJob.salary}
                    </div>
                    <div className="bg-gray-200 px-4 py-2 rounded-full text-sm flex items-center">
                        <img src="src/assets/person.webp" alt="Experience Icon" className="w-4 h-4 mr-1" />
                        {selectedJob.experience}
                    </div>
                    <div className="bg-gray-200 px-4 py-2 rounded-full text-sm flex items-center">
                        <img src="src/assets/clock.png" alt="Time Icon" className="w-4 h-4 mr-1" />
                        {selectedJob.daysAgo} days ago
                    </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4">Required Skills</h3>
                <div className="flex flex-wrap gap-4">
                    {selectedJob.skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img src={icons[skill]} alt={skill} className="w-12 h-12 mb-2" />
                            <p className="text-gray-700 text-sm">{skill}</p>
                        </div>
                    ))}
                </div>

                <h3 className="text-2xl font-semibold mt-6 mb-4">Job Description</h3>
                <p className="text-gray-700">{selectedJob.description}</p>
            </div>
        </div>
    );
};

export default JobListPage;
