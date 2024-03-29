import React from 'react';
import Slide from 'react-reveal/Slide';
import ExperienceItems from './ExperienceItems';
import CourseList from '../Education/CourseList';

const Experience = () => {
  return (
    <section data-index="3" id="experience">
      <h2>Experience</h2>

      {ExperienceItems.map((item) => {
        return (
          <div className="experienceItem" key={item.title}>

            <div>
              <div id={item.logo} className="experienceLogo" />
            </div>

            <Slide right>
              <div className="experienceText">
                <p className="experienceOrg">{item.org}</p>
                <div className="experienceTitles">
                  {item.titles.map((title) => { return <p>{title}</p>; })}
                </div>

                <div className="experienceIcons">
                  <i className="fa-solid fa-map-pin iconDisplay"><p>{item.location}</p></i>
                  <i className="fa-regular fa-calendar iconDisplay"><p>{item.time}</p></i>
                </div>

                <CourseList title="Description" courses={item.descrp} />

              </div>
            </Slide>
          </div>
        );
      })}
    </section>
  );
};

export default Experience;
