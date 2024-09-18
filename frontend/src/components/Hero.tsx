import { faPlayCircle } from "@fortawesome/free-solid-svg-icons/faPlayCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-green-950 text-white h-196 flex flex-col items-center justify-between"
      style={{
        backgroundImage: `url("https://www.shutterstock.com/image-photo/portrait-overjoyed-young-diverse-employees-600nw-2023272488.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-green-950 opacity-90"></div>

      <div className="w-full z-10">
        <Header />
      </div>

      <div className="relative z-10 text-left mt-16 flex flex-col md:flex-row px-4 items-start space-y-4 md:space-y-0 md:space-x-16 md:px-20">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Pick your <span className="text-green-400">job</span> and
            shape your <span className="italic">future</span>
          </h1>
          <p className="text-green-400 text-xl mt-2">with right skills</p>
        </div>
        <div>
          <p className="text-lg mt-4 max-w-lg">
            Personalized pathways, job search, talent hiring and skill-building. Whether you are a student, a job seeker, or a career switcher, we have the right tools for you.
          </p>
          <div className="mt-8 flex justify-start space-x-4">
            <button className="bg-green-300 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full" onClick={() => {
              navigate("/jobs");
            }}>
              Find my match
            </button>
            <button className="flex items-center space-x-2">
              <span>Watch video</span>
              <FontAwesomeIcon icon={faPlayCircle} />
            </button>
          </div>
        </div>
      </div>

      <img
        src="src/assets/job_listing_page.png"
        alt="Job illustration"
        className="md:w-3/4 h-auto mt-32 border-8 border-green-800 relative z-10 rounded-lg"
      />
    </div>
  )
}

export default Hero;