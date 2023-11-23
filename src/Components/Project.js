import React, { useState, useEffect } from 'react';

function Project(){

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const token = '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';
    const headers = {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
    };

    fetch('https://api.github.com/user/repos', { headers })
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
        <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
       </section>
    )
}

export default Project