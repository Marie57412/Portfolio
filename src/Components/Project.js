import React, { useState, useEffect } from 'react';
import ProjectCard from './Card';

function Project(){

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const token = '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';
    const query = `
      query {
        viewer {
          repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC) {
            nodes {
              id
              name
              description
              # Ajoutez d'autres champs si nécessaire
            }
          }
        }
      }
    `;

    fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((data) => {
        setRepos(data.data.viewer.repositories.nodes);
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