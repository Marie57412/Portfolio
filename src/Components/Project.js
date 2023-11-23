import React, { useState, useEffect } from 'react';
import ProjectCard from './Card';

function Project(){

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const token = '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';
    const headers = {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
    };

    fetch('https://api.github.com/user/repos?type=public', { headers })
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
    return(
        <section className='project'>
      <h2>Mes projets</h2>
      <div className="card-container">
        {repos.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
}

export default Project