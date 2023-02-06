import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import pythonImage from "../Images/python.png";
import cImage from "../Images/c.png";
import javaImage from "../Images/java.png";

const SkillListPage = () => {
  return (
    <div className="container text-center">
        <section id="skill">
            <div class="text-center">
            <h1 class="title">スキル</h1>
            <div class="row text-center">
                <div class="col-md-4 services">
                <img src={reactImage} alt="react"/>
                <h4>React</h4>
                <p>Reactがつかえます</p>
                </div>
                <div class="col-md-4 services">
                <img src={jsImage} alt="JavaScript"/>
                <h4>HTML/CSS</h4>
                <p>HTML/CSSがつかえます</p>
                </div>
                <div class="col-md-4 services">
                <img src={pythonImage} alt="python"/>
                <h4>Python</h4>
                <p>Pythonがつかえます</p>
                </div>
                <div class="col-md-4 services">
                <img src={cImage} alt="c"/>
                <h4>C言語</h4>
                <p>C言語がつかえます</p>
                </div>
                <div class="col-md-4 services">
                <img src={javaImage} alt="Java"/>
                <h4>Java</h4>
                <p>Javaがつかえます</p>
                </div>
            </div>
            </div>
        </section>
      </div>
  )
}

export default SkillListPage