import React from "react";
import Avatar from "../assets/Avatar.png"



function Banniere() {
    return (
        <section className="section_banniere">
            <div className="texte-avatar">
            <div className="cadre-text">
            <p className="banniere_p">Salut ! Je suis Marie, développeuse web passionnée,  Explorons le monde du web ensemble !
            </p>
            </div>
            <img src={Avatar} alt="image de ma tete"></img>
            </div>
        </section>
    )
}

export default Banniere