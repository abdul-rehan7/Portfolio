import React from "react";
import { projects } from "@/Data";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const RecentProjects = () => {
  return (
    <div className="py-20 z-40">
      <h1 className="heading">
        Small selection of {""}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((projects)=>(
            <div>
                {projects.title}
            </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
