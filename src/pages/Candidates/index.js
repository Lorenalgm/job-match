import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';

export default function User() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        
        async function SearchCandidates(){
            const response = await api.get(`/candidates`)
            setCandidates(response.data);
        }

        SearchCandidates();
        
    }, []);

    return (
        <div className="container-candidates">
            <div className="search-section">
                <h1>Candidatos para <span>Recrutadores</span></h1>
                <div className="search-options">
                
                </div>                
            </div>

            {
               
               candidates ?
                    (
                    <div className="repositories">
                        {
                            candidates.map(candidate =>(
                                <div key={candidate._id} className="repository">
                                    {candidate.city}
                                    {candidate.experience}

                                    {candidate.technologies.map(tech =>(
                                        <div key={tech.name}>
                                            {tech.name}
                                            {tech.is_main_tech}
                                        </div>
                                    ))}
                                </div>
                            ))
                        }
                    </div>)

                    :

                    (<div className="user-not-found">
                        <h2>Candidatos não encontrados. Realiza uma nova busca!</h2>
                    </div>)
            }

        </div>
    )
}