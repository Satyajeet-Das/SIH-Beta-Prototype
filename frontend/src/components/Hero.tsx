import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons/faPlayCircle";

const Hero = () => {
    return (
      <div className="bg-green-950 text-white h-96 flex flex-col items-center justify-center">
        <div className="text-left px-5">
          <h1 className="text-3xl md:text-5xl font-bold">
            Pick your <span className="text-green-400">job</span> and
            shape your <span className="italic">future</span>
          </h1>
          <p className="text-green-400 text-xl mt-2">with right skills</p>
          <p className="text-lg mt-4 max-w-lg">
            Personalised matches, whether you're an allied health professional, nurse, or physician, for the best jobs in the clinic and beyond.
          </p>
          <div className="mt-8 flex justify-start space-x-4">
            <button className="bg-green-300 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full">Find my match</button>
            <button className="flex items-center space-x-2">
              <span>Watch video</span>
              <FontAwesomeIcon icon={faPlayCircle}
            />
            </button>
          </div>
        </div>
      </div>
      
    )
}

export default Hero;