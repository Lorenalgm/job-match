import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';

export default function User() {
    const [candidates, setCandidates] = useState([]);
    const [city, setCity] = useState('');
    const [experience, setExperience] = useState('');
    const [techs, setTechs] = useState('');

    async function SearchCandidates(){
        const response = await api.get(`/candidates`)

        let filteredCandidates = response.data;

        if(city){
            filteredCandidates = filteredCandidates.filter(candidate => candidate.city === city);
        }

        if(experience){
            filteredCandidates = filteredCandidates.filter(candidate => candidate.experience === experience);
        }

        // if(techs){
        //     filteredCandidates = filteredCandidates.filter(candidate => candidate.technologies.includes(techs));
        // }

        if(filteredCandidates.length > 5){
            filteredCandidates = filteredCandidates.slice(0,5);
        }

        setCandidates(filteredCandidates);
    }

    useEffect(() => {
               
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
                                <div key={candidate.id} className="repository">
                                    <h1>{candidate.city}</h1>
                                    <p>{candidate.experience}</p>

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