import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import pythonImage from "../Images/python.png";
import cImage from "../Images/c.png";
import javaImage from "../Images/java.png";
import SkillItem from './SkillItem';

const SkillListPage = () => {
  const lists = {
    react: {
      img:reactImage, 
      title:"React",
      text:"Reactがつかえます"
    },
    js: {
      img:jsImage, 
      title:"HTML/CSS",
      text:"HTML/CSSがつかえます"
    },
    python: {
      img:pythonImage, 
      title:"Python",
      text:"Pythonがつかえます"
    },
    c: {
      img:cImage, 
      title:"C言語",
      text:"C言語がつかえます"
    },
    Java: {
      img:javaImage, 
      title:"Java",
      text:"Javaがつかえます"
    }
  }

  const description = Object.keys(lists).map((lang) => {
    return(
      <SkillItem img={lists[lang].img} title={lists[lang].title} text={lists[lang].text}/> 
    )
  }
  );
  
  return (
    <div className="container text-center">
        <section id="skill">
            <div class="text-center">
            <h1 class="title">スキル</h1>
            <div class="row text-center">{description}</div>
            </div>
        </section>
      </div>
  )
}

export default SkillListPage