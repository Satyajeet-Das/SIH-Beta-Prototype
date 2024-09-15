import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

interface Props {
    widthPercent: number
}

const Progress = ({widthPercent}: Props) => {
    return(
        <div className="flex flex-col">
            {/* w-24 */}
            <FontAwesomeIcon className={`items-center mb-2 ${widthPercent===100 ? "text-yellow-500": "text-slate-400"}`} icon={faStar} />
            <div className="bg-gray-300 w-16 md:w-24 h-5 rounded-3xl border-none">
                <div className="bg-gradient-to-r from-purple-300 to-blue-500 h-5 rounded-3xl" style={{ width: `${widthPercent}%` }}></div>
            </div>
        </div>
    )
}

export default Progress;