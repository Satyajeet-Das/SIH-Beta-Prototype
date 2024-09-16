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
                <span className="mr-4 mb-2 px-4 py-1 font-bold text-[#B7300C] bg-gradient-to-r from-red-200 via-[#FFF1EE] to-purple-100 border-2 border-[#e51c19] mt-2 rounded-2xl">
                    <FontAwesomeIcon className={`mr-1 text-sm ${difficultyClass}`} icon={faCircle} />
                    {text}
                </span>
            ) : (
                // <span className="mr-4 mb-2 px-4 py-1 font-bold  text-[#9679ec] bg-[#ebe6f9] mt-2 rounded-xl border-2 border-[#D1B2FD]">
                <span className="mr-4 mb-2 px-4 py-1 font-semibold  text-violet-500 bg-gradient-to-l from-purple-100 via-[#ebe6f9] to-blue-200   mt-2 rounded-xl " >
                    <FontAwesomeIcon className={`mr-1 text-sm ${difficultyClass}`} icon={faCircle} />
                    {text}
                </span>
            )}
        </>
    );
}

export default SkillTags
