import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface widthProps {
  widthPercent: number;
}

const Progress = ({ widthPercent }: widthProps) => {
    return (
    <div className="flex flex-col">
      {/* w-24 */}
      <FontAwesomeIcon
        className={`items-center mb-2 ${
          widthPercent === 100 ? "text-yellow-500" : "text-slate-400"
        }`}
        icon={faStar}
      />
      <div className="bg-gray-300 w-16 md:w-24 h-5 rounded-3xl border-none">
        <div
          className="bg-gradient-to-r from-purple-300 to-blue-500 h-5 rounded-3xl"
          style={{ width: `${widthPercent}%` }}
        ></div>
      </div>
    </div>
  );
};

interface ratingProps {
  rating: number;
}

const ProgressBar = ({ rating }: ratingProps) => {
  if(rating > 5) rating = 5;
  else if(rating < 0) rating = 0
  
  const fullStars = Math.floor(rating);
  const partialStar = (rating - fullStars)*100;
  const totalStars = 5;
  return (
    <div className="flex flex-row space-x-4 align-middle justify-center">
      {Array.from({ length: fullStars}).map((_, index) => (
        <Progress key={index} widthPercent={100} />
      ))}

      {/* Render the partial star if there is any */}
      {partialStar > 0 && <Progress widthPercent={partialStar} />}

      {/* Render the remaining empty stars */}
      {Array.from({ length: totalStars - fullStars - (partialStar > 0 ? 1 : 0) }).map((_, index) => (
        <Progress key={fullStars + index + 1} widthPercent={0} />
      ))}
    </div>
  );
};

export default ProgressBar;
