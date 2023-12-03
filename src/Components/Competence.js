import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faGithub, faSass} from '@fortawesome/free-brands-svg-icons';



function Competence(){
    return(
            <section className="competance">
                <h1>Compétences:</h1>
            <div className="article-competence">
                <article className="icon-article">hTML<FontAwesomeIcon icon={faHtml5} className="icon"/></article>
                <article className="icon-article">CSS <FontAwesomeIcon icon={faCss3Alt} className="icon" /></article>
                <article className="icon-article">Javascript <FontAwesomeIcon icon={faJs} className="icon" /></article>
                <article className="icon-article">React <FontAwesomeIcon icon={faReact} className="icon" /></article>
                <article className="icon-article">github <FontAwesomeIcon icon={faGithub} className="icon"/></article>
                <article className="icon-article">Sass <FontAwesomeIcon icon={faSass} className="icon" /></article>
            </div>
            </section>
    )
}

export default Competence