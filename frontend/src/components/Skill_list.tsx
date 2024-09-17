import { useState } from 'react';
import '../index.css'
const SkillGrid = () => {
  // Use state to track whether the additional skills are shown
  const [showMore, setShowMore] = useState(false);

  const handleMoreClick = () => {
    setShowMore(!showMore); // Toggle the 'showMore' state
  };
<div className="skills_block row-span-4 col-start-1 col-end-3 p-1 pt-0 pb-2 gap-1 flex flex-col items-start">
                <span className="text-[17px]"><b>Skills Required</b></span>
                <div className="flex flex-wrap gap-2">
                    
                </div>
            </div>
  return (
    
    <div className="skills_block row-span-4 col-start-1 col-end-3 p-1 pt-0 pb-2 gap-1 flex flex-col items-start">
        <span className="text-[17px]"><b>Skills Required</b></span>
        <div className="flex flex-wrap gap-2 mt-1">
        {/* Initially visible blocks */}
        <div className="skill bg-gradient-to-r from-purple-300 to-blue-300 p-[6px] pl-[10px] pr-[10px] rounded-3xl text-violet-800 border border-violet-950 font-bold">
            <span className="text-[14px]">Skill</span>
        </div>
        <div className="skill bg-gradient-to-r from-purple-300 to-blue-300 p-[6px] pl-[10px] pr-[10px] rounded-3xl text-violet-800 border border-violet-950 font-bold">
            <span className="text-[14px]">Chicken</span>
        </div>
        <div className="skill bg-gradient-to-r from-purple-300 to-blue-300 p-[6px] pl-[10px] pr-[10px] rounded-3xl text-violet-800 border border-violet-950 font-bold">
            <span className="text-[14px]">Chicken</span>
        </div>
        <div className="skill bg-gradient-to-r from-purple-300 to-blue-300 p-[6px] pl-[10px] pr-[10px] rounded-3xl text-violet-800 border border-violet-950 font-bold">
            <span className="text-[14px]">Chicken</span>
        </div>
        <div className="skill bg-gradient-to-r from-purple-300 to-blue-300 p-[6px] pl-[10px] pr-[10px] rounded-3xl text-violet-800 border border-violet-950 font-bold">
            <span className="text-[14px]">Chicken</span>
        </div>
        <div className="skill bg-gradient-to-r from-purple-300 to-blue-300 p-[6px] pl-[10px] pr-[10px] rounded-3xl text-violet-800 border border-violet-950 font-bold">
            <span className="text-[14px]">Chicken</span>
        </div>
                    
        {/* Conditionally visible skills */}
        {showMore && (
          <>
            <div className="skill bg-gradient-to-r from-purple-300 to-blue-300 slide-in p-[6px] pl-[10px] pr-[10px] rounded-3xl text-violet-800 border border-violet-950 font-bold">
                <span className="text-[14px]">Skill</span>
            </div>
            <div className="skill bg-gradient-to-r from-purple-300 to-blue-300 slide-in p-[6px] pl-[10px] pr-[10px] rounded-3xl text-violet-800 border border-violet-950 font-bold">
                <span className="text-[14px]">Chicken Burger</span>
            </div>
            <div className="skill bg-gradient-to-r from-purple-300 to-blue-300 slide-in p-[6px] pl-[10px] pr-[10px] rounded-3xl text-violet-800 border border-violet-950 font-bold">
                <span className="text-[14px]">Chicken Burger</span>
            </div>
            <div className="skill bg-gradient-to-r from-purple-300 to-blue-300 slide-in p-[6px] pl-[10px] pr-[10px] rounded-3xl text-violet-800 border border-violet-950 font-bold">
                <span className="text-[14px]">Skill</span>
            </div>
            </>
        )}
      </div>

      {/* "More" Arrow */}
      <div className="mt-3 w-[230px] h-[50px]">
        <button
          onClick={handleMoreClick}
          className="flex rounded-lg bg-blue-500 shadow-sm shadow-black w-[250px] h-[30px] gap-2 items-center justify-center text-white"
        >
          <span className='' >{showMore ? 'Less' : 'More'}</span>
          <svg
            className={`w-5 h-5 mb-[1px] transform transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SkillGrid;
