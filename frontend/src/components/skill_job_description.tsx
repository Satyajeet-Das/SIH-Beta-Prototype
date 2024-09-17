import JobImage from "../assets/download.png"
import BookmarkButton from "./SaveButton";
import SkillGrid from "./Skill_list";

const Job_comp = () => {
    return (
        <div className="max-w-[300px] grid items-center p-4 pt-5 rounded-2xl grid-cols-2 grid-rows-[60px_50px_20px_100px] max-h-[600px] " style={{boxShadow: "1px 1px 5px black"}}>
            <div className="row-span-1 flex  justify-between col-start-1 col-end-3 items-center">
                <div className="row-start-1 row-end-1 col-start-1 col-end-1">
                    <div className="rounded-3xl h-[45px] w-[45px] flex items-center justify-center shadow-black shadow-sm">
                        <img className="rounded-2xl h-[35px] w-[35px]" src={JobImage}></img> 
                    </div>
                </div>
                <div className="row-start-1 row-end-1 col-start-2 col-end-2 ">
                    <BookmarkButton/>
                </div>
            </div>
            <div className="row-span-2 col-start-1 col-end-3 mt-5 pt-6">
                <div className="flex justify-start gap-2 items-end">
                    <span className="whitespace-nowrap text-[20px]"><b>Amazon</b></span>
                    <span className="whitespace-nowrap text-[10px] pb-[2px]">5 days ago</span>
                </div>
                <span>Senior UI/UX Designer</span>
            </div>
            <div className="info_blocks flex flex-wrap gap-2 row-span-2 col-start-1 col-end-3 mb-4">
                <div className="block bg-[#4c92c4] p-[6px] pl-[9px] pr-[9px] rounded-md">
                    <span className="text-[14px] text-white font-semibold">Part-time</span>
                </div>
                <div className="block bg-[#4c92c4] p-[6px] pl-[9px] pr-[9px] rounded-md">
                    <span className="text-[14px] text-white font-semibold">Part-time</span>
                </div>
            </div>
            <SkillGrid/>
        </div>
    )
}
export default Job_comp;