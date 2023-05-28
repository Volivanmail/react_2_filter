import React from "react";

export default function ProjectList(props) {
    const { projects } = props;
    return (
        <div className='projectList'>
            {projects.map((projects) => {
                return <div>
                    <img className='img' src={projects.img} alt={projects.category} />
                </div>
            })}
        </div>
    )
}
