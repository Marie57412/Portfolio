import React from 'react';

function ProjectCard({ repo, altText }) {

  return (
    <div className="card">
      <img className='imgProject' src={repo.image} alt={altText} />
      <div className='content-card'>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <span>{repo.subtitle}</span>
      <a href={repo.url} target="_blank" rel="noopener noreferrer">
        Voir sur GitHub
      </a>
     </div>
    </div>
  );
}

export default ProjectCard;
