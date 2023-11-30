import React from 'react';

function ProjectCard({ repo }) {

  return (
    <div className="card">
      <img className='imgProject' src={repo.image} alt={repo.name} />
      <div className='content-card'>
      <h3>{repo.name}</h3>
      <span>{repo.subtitle}</span>
      <a href={repo.url} target="_blank" rel="noopener noreferrer">
        Voir sur GitHub
      </a>
     </div>
    </div>
  );
}

export default ProjectCard;