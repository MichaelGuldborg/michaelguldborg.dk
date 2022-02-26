import React from "react";
import Project from "../../models/project";
import {theme} from "../../constants/theme";


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
                background: project.gradient ?? project.color ?? theme.colors.primary,
                padding: 32,
                height: 128,
                transition: 'all 0.5s ease 0s',
                borderRadius: 8,
                boxShadow: 'rgb(112 144 176 / 45%) 0px 8px 30px',
                // '&hover': 'rgb(112 144 176 / 44%) 0px 4px 40px',
            }}>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%'
                }}>
                    <p style={{
                        margin: 0,
                        color: 'white',
                        fontSize: 22,
                    }}>
                        {project.name}
                    </p>
                    <div>
                        <p style={{
                            margin: 0,
                            color: 'white',
                            fontSize: 16,
                            fontWeight: 500,
                        }}>
                            {project.company}
                        </p>
                        <p style={{
                            margin: 0,
                            color: 'white',
                            fontSize: 13,
                            fontWeight: 500,
                            opacity: 0.5,
                        }}>
                            {project.from} - {project.to}
                        </p>
                    </div>
                </div>

            </div>
        </a>
    )
}
export default ProjectCard

