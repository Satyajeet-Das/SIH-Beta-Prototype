import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons/faPlayCircle";

const Hero = () => {
    return (
      <div className="bg-green-950 text-white h-96 flex flex-col items-center justify-center">
        <div className="text-left">
          <h1 className="text-5xl font-bold">
            Pick your <span className="text-green-400">job</span> and <br />
            shape your <span className="italic">future</span>
          </h1>
          <p className="text-green-400 text-xl mt-2">In healthcare</p>
          <p className="text-lg mt-4 max-w-lg mx-auto">
            Personalised matches, whether you're an allied health professional, nurse, or physician, for the best jobs in the clinic and beyond.
          </p>
          <div className="mt-8 flex justify-left space-x-4">
            <button className="bg-green-300 text-black font-bold py-2 px-6 rounded-full">Find my match</button>
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