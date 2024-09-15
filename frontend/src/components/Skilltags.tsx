import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

interface Props{
    text: string
    difficulty?: number 
    type: boolean  // skill to learn === true  skill to imporve === flase
}



const SkillTags = ({text, difficulty, type}: Props) => {

    const difficultyClass = difficulty === 1 
    ? "text-white" 
    : difficulty === 2 
    ? "text-blue-300" 
    : "text-orange-300";

    return(
        <>
            {type ? (
                <span className="mr-4 mb-2 px-4 py-1 font-bold text-white bg-red-400 mt-2 rounded-full">
                    <FontAwesomeIcon className={`mr-1 text-sm ${difficultyClass}`} icon={faCircle} />
                    {text}
                </span>
            ) : (
                <span className="mr-4 mb-2 px-4 py-1 font-bold text-white bg-[#00acee] mt-2 rounded-full">
                    {text}
                </span>
            )}
        </>
    );
}

export default SkillTags
