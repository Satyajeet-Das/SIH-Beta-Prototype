import { useState } from "react";
import ProgressBar from "../components/Progress";
import SkillTags from "../components/Skilltags";

const SkillGap = () => {
    const skills = [
        { name: "React", difficulty: 1 },
        { name: "TailWind", difficulty: 2 },
        { name: "Node", difficulty: 3 },
        { name: "Express", difficulty: 2 },
        { name: "Design", difficulty: 1 },
        { name: "BlockChain", difficulty: 3 },
        { name: "CyberSecurity", difficulty: 3 },
        { name: "Java", difficulty: 2 },
        { name: "Kotlin", difficulty: 2 },
        { name: "Engineering", difficulty: 1 },
        { name: "webdev", difficulty: 2 },
        { name: "appdev", difficulty: 3 },
        { name: "React", difficulty: 1 },
        { name: "TailWind", difficulty: 2 },
        { name: "Node", difficulty: 3 },
        { name: "Express", difficulty: 2 },
        { name: "Design", difficulty: 1 },
        { name: "BlockChain", difficulty: 3 },
        { name: "CyberSecurity", difficulty: 3 },
        { name: "Java", difficulty: 2 },
        { name: "Kotlin", difficulty: 2 },
        { name: "Engineering", difficulty: 1 },
        { name: "webdev", difficulty: 2 },
        { name: "appdev", difficulty: 3 },
      ];

  return (
    <>
    <ProgressBar rating={5} />
      <h2 className="mt-8 mb-9 text-2xl font-bold">
        skills that you need to acquire:
      </h2>
      <div className="flex flex-row ml-32 mr-32 justify-center h-fit">
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <SkillTags key={index} text={skill.name} difficulty={skill.difficulty} type={true}/>
          ))}
        </div>
      </div>
      <h2 className="mt-8 mb-9 text-2xl font-bold">
        skills to improve:
      </h2>
      <div className="flex flex-row ml-32 mr-32 justify-center h-fit">
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <SkillTags key={index} text={skill.name} difficulty={skill.difficulty} type={false}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillGap;
