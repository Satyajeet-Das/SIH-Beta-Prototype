import pathwayImage from '../assets/react-pathway.png';

const IntroPage = () => {
    return (
        <div className="intro-page flex flex-col md:flex-row justify-between items-center py-10">
            <div className="px-5 flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold">
                    <span className="text-green-600">Upskill</span> with
                    Adaptive Learning Pathways
                </h1>
                <p className="text-green-700 text-xl mt-2">
                    Target job profiles, build skills, and achieve your career goals with tailored pathways.
                </p>
                <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-full mt-5 md:mt-10 hover:bg-green-700 transition duration-300 self-center md:self-start">
                    Explore Pathways
                </button>
            </div>
            <img src={pathwayImage} alt="Pathway" width="500" className="md:mr-10 mt-5 md:mt-0" />
        </div>
    );
};

export default IntroPage;
