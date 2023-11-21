import React from "react";
import Avatar from "../assets/Avatar.png"


function Banniere() {
    return (
        <section className="section_banniere">
            <div className="cadre-text">
            <p className="banniere_p">"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed vitae turpis ac velit pulvinar varius. Nulla facilisi.
                Proin vel purus vitae nulla laoreet malesuada in id nisi."
            </p>
            </div>
            <img src={Avatar} alt="image de ma tete"></img>
        </section>
    )
}

export default Banniere