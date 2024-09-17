import { useState } from "react";
import ProgressBar from "../components/Progress";
import SkillTags from "../components/Skilltags";
import Job_comp from "../components/skill_job_description";

const SkillGap = () => {
    const skills = [
        { name: "React", difficulty: 3 },
        { name: "TailWind", difficulty: 2 },
        { name: "Node", difficulty: 1 },
        { name: "Express", difficulty: 2 },
        { name: "Design", difficulty: 1 },
        { name: "BlockChain", difficulty: 3 },
        { name: "CyberSecurity", difficulty: 3 },
        { name: "Java", difficulty: 2 },
        { name: "Kotlin", difficulty: 2 },
      ];
      const skills2 = [
        
        { name: "Engineering", difficulty: 1 },
        { name: "webdev", difficulty: 2 },
        { name: "appdev", difficulty: 3 },
        { name: "React", difficulty: 3 },
        { name: "TailWind", difficulty: 2 },
        { name: "Node", difficulty: 1 },
        { name: "Express", difficulty: 2 },
        { name: "Design", difficulty: 1 },
        { name: "BlockChain", difficulty: 3 },
        { name: "CyberSecurity", difficulty: 3 },
        { name: "Java", difficulty: 2 },
        { name: "Kotlin", difficulty: 2 },
        { name: "Engineering", difficulty: 1 },
        { name: "webdev", difficulty: 2 },
        { name: "appdev", difficulty: 3 },
        { name: "Design", difficulty: 1 },
        { name: "BlockChain", difficulty: 3 },
        { name: "CyberSecurity", difficulty: 3 },
        { name: "Java", difficulty: 1 },
        { name: "Kotlin", difficulty: 1 },
        { name: "Engineering", difficulty: 1 },
        { name: "webdev", difficulty: 2 },
        { name: "appdev", difficulty: 3 },
      ]

  return (
    <>
    <div className="w-screen grid grid-cols-[70%_30%] grid-rows-[10%_30%_30%]">
      <div className="col-span-1 row-start-1 row-end-2">
        <ProgressBar rating={2.4} />
      </div>
      <div className="row-start-1 row-end-4 col-start-2 col-end-3">
        <Job_comp/>
      </div>
      <div className="row-start-2 row-end-3 col-start-1 col-end-2">
          <h2 className="mt-8 mb-9 text-2xl font-bold">
            skills that you need to acquire:
          </h2>
          <div className="flex flex-row  justify-center h-fit">
            <div className="flex flex-wrap justify-center">
              {skills.map((skill, index) => (
                <SkillTags key={index} text={skill.name} difficulty={skill.difficulty} type={true}/>
              ))}
            </div>
          </div>
      </div>
      <div className="row-start-3 row-end-4 col-start-1 col-end-2">
          <h2 className="mt-8 mb-9 text-2xl font-bold">
            skills to improve:
          </h2>
          <div className="flex flex-row  justify-center h-fit">
            <div className="flex flex-wrap justify-center">
              {skills2.map((skills2, index) => (
                <SkillTags key={index} text={skills2.name} difficulty={skills2.difficulty} type={false}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillGap;
