import React from "react";


export interface Project {
    title: string;
    logo?: string;
    url?: string;
    company: string;
}


export const ProjectCard: React.FC<{
    project: Project;
}> = ({project}) => {


    // const description = subtitle === undefined ? hostName : subtitle;
    // const imageUrl = image === undefined ?
    //     "https://process.filestackapi.com/AWdLLpMAFSGo8szRqg1dAz/urlscreenshot=mode:window,height:1080,width:1080,delay:2000/crop=dim:[0,0,1080,720]/resize=width:600/" + url :
    //     image;

    return (
        <a href={project.url}>
            <div style={{
                cursor: 'pointer',
                minWidth: 220,
                paddingLeft: 8,
                paddingTop: 8,
                paddingRight: 8,
                borderRadius: 4,
                border: '1px solid #D3DAE6',
                // boxShadow: '0 2px 2px -1px rgb(152 162 179 / 30%), 0 1px 5px -2px rgb(152 162 179 / 30%)',
                transition: 'all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)',
                boxShadow: '0 4px 8px 0 rgb(152 162 179 / 15%), 0 2px 2px -1px rgb(152 162 179 / 30%)',
                transform: 'translateY(-2px)',

            }}>
                <img style={{
                    width: "100%",
                    borderRadius: '3px',
                }}
                     alt={""}
                     src={project.logo}
                />

                <div style={{
                    paddingTop: '5px',
                    paddingBottom: '10px',
                    backgroundColor: "inherit"
                }}>
                    {project.title}<br/>
                    <span style={{fontStyle: 'italic'}}>{project.company}</span>
                </div>
            </div>
        </a>
    )
}
export default ProjectCard