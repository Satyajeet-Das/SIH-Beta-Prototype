import pathwayImage from '../../assets/react-pathway.png';

const IntroPage = () => {
    return (
        <div className="intro-page flex flex-col md:flex-row justify-between items-center py-10">
            <div>
                <div className="text-left px-5">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        <span className="text-green-600">Upskill</span> with
                        Adaptive Learning Pathways
                    </h1>
                    <p className="text-green-700 text-xl mt-2">Target job profiles, build skills, and achieve your career goals with tailored pathways.</p>
                </div>
            </div>
            <img src={pathwayImage} alt="Pathway" width="500" className="md:mr-10" />
        </div>
    );
};

export default IntroPage;
