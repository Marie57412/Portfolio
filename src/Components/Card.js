import React from 'react';

function ProjectCard({ repo }) {
  return (
    <div className="card">
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        Voir sur GitHub
      </a>
   
    </div>
  );
}

export default ProjectCard