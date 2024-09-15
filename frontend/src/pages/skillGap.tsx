import { useState } from "react";
import Progress from "../components/Progress";


const SkillGap = () => {
    return(
        <div className="flex flex-row space-x-4 align-middle justify-center">
            <Progress widthPercent={100}/>
            <Progress widthPercent={100}/>
            <Progress widthPercent={20}/>
            <Progress widthPercent={0}/>
            <Progress widthPercent={0}/>
        </div>
    )
}

export default SkillGap;