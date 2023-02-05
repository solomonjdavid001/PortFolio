import './Pros.css';
import React from 'react';
import CardsProject from './CardsProject';

const  Work= () => {
  return (
    <div className='pros-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {CardsProject.map((val,ind) => {
                return(
                    <CardsProject key={ind} imgscr={val.imgscr}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                );
            })}
        </div>
    </div>
  )
}

export default Work;