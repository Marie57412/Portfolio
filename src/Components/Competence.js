import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faGithub, faSass} from '@fortawesome/free-brands-svg-icons';



function Competence(){
    return(
            <section className="competance">
                <h1>Competences</h1>
            <div className="article-competence">
                <article>hTML<FontAwesomeIcon icon={faHtml5} className="icon"/></article>
                <article>CSS <FontAwesomeIcon icon={faCss3Alt} className="icon" /></article>
                <article>Javascript <FontAwesomeIcon icon={faJs} className="icon" /></article>
                <article>React <FontAwesomeIcon icon={faReact} className="icon" /></article>
                <article>github <FontAwesomeIcon icon={faGithub} className="icon"/></article>
                <article>Sass <FontAwesomeIcon icon={faSass} className="icon" /></article>
            </div>
            </section>
    )
}

export default Competence