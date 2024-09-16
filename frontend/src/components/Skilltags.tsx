import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

interface Props{
    text: string
    difficulty?: number 
    type: boolean  // skill to learn === true  skill to imporve === flase
}



const SkillTags = ({text, difficulty, type}: Props) => {

    const difficultyClass = difficulty === 1 
    ? "text-[#4BB5FF]" //#5fd776
    : difficulty === 2 
    ? "text-[#FFC107]" //#e66a00
    : "text-[#00695C]";  //#b52b32

    return(
        <>
            {type ? (
                <span className="mr-4 mb-2 px-4 py-1 font-bold text-[#B7300C] bg-[#FFF1EE] border-2 border-[#FFD2C2] mt-2 rounded-xl">
                    <FontAwesomeIcon className={`mr-1 text-sm ${difficultyClass}`} icon={faCircle} />
                    {text}
                </span>
            ) : (
                <span className="mr-4 mb-2 px-4 py-1  text-[#9679ec] bg-[#ebe6f9] mt-2 rounded-xl">
                    <FontAwesomeIcon className={`mr-1 text-sm ${difficultyClass}`} icon={faCircle} />
                    {text}
                </span>
            )}
        </>
    );
}

export default SkillTags
