import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';

export default function User() {    

    const cities = [
        'Aparecida de Goiânia - GO',
        'Barbacena - MG',
        'Belford Roxo - RJ',
        'Belo Horizonte - MG',
        'Bento Gonçalves - RS',
        'Blumenau - SC',
        'Boa Vista - RR',
        'Brasília - DF',
        'Campina Grande - PB',
        'Campinas - SP',
        'Campo Grande - MS',
        'Campos dos Goytacazes - RJ',
        'Caxias do Sul - RS',
        'Chapecó - SC',
        'Criciúma - SC',
        'Curitiba - PR',
        'Espera Feliz - MG',
        'Florianópolis - SC',
        'Fortaleza - CE',
        'Foz do Iguaçu - PR',
        'Goiânia - GO',
        'Guarulhos - SP',
        'Hortolândia - SP',
        'Indaial - SC',
        'Itaituba - PA',
        'Joaçaba - SC',
        'Joinville - SC',
        'João Pessoa - PB',
        'Lages - SC',
        'Leme - SP',
        'Maringá - PR',
        'Marília - SP',
        'Natal - RN',
        'Niterói - RJ',
        'Osasco - SP',
        'Ouro Preto - MG',
        'Parnaíba - PI',
        'Paulista - PE',
        'Porto Alegre - RS',
        'Recife - PE',
        'Remote',
        'Ribeirão Preto - SP',
        'Rio Branco - AC',
        'Rio de Janeiro - RJ',
        'Salto Grande - SP',
        'Salvador - BA',
        'Santa Cruz do Sul - RS',
        'Santo André - SP',
        'Santo Antônio de Jesus - BA',
        'Sapucaia do Sul - RS',
        'São José - SC',
        'São João do Triunfo - PR',
        'São Lourenço da Mata - PE',
        'São Paulo - SP',
        'São Vicente - SP',
        'Uberlândia - MG',
        'Vitória - ES',
    ];

    const years = [
        '0-1 years',
        '0-2 years',
        '1-2 years',
        '10-11 year',
        '11-12 year',
        '12+ years',
        '2-3 years',
        '2-4 years',
        '3-4 years',
        '4-5 years',
        '5-6 years',
        '6-7 years',
        '7-8 years',
        '8-9 years',
        '9-10 years'
    ]
    
    const [candidates, setCandidates] = useState([]);
    const [city, setCity] = useState('');
    const [experience, setExperience] = useState('');
    const [techs, setTechs] = useState([]);
    
    async function SearchCandidates(){
        const response = await api.get(`/candidates/?city=${city}&experience=${experience}&techs=${techs}`);

        setCandidates(response.data);
    }

    async function handleSubmit(e){
        e.preventDefault();
        SearchCandidates();
    }

    useEffect(() => {
        SearchCandidates();
    });
  
  
    return (
        <div className="container-candidates">
            <div className="search-section">
                <h1>Candidatos para <span>Recrutadores</span></h1>
                <div className="search-options">
                    <form onSubmit={handleSubmit}>
                        <div className="candidate-select-input">
                            <label htmlFor="cidade">Cidade:</label>
                            <select name="cidade" id="cidade" onChange={e => setCity(e.target.value)}>
                                <option key='' value=''>Selecione</option>
                                {cities.map(city =>(
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                        <div className="candidate-select-input">
                            <label htmlFor="experiencia">Experiência:</label>
                            <select name="experiencia" id="experiencia" onChange={e => setExperience(e.target.value)}>
                                <option key='' value=''>Selecione</option>
                            {years.map(year =>(
                                <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                        <div className="candidate-select-input">
                            <input
                            name="Tecnologias"
                            type="text"
                            id="tecnologia"
                            onChange={e => setTechs(e.target.value)}
                            value={techs}
                            />
                        </div>
                        <button className="send-button" type="submit">
                            Buscar
                        </button>
                    </form>
                </div>                
            </div>

            {
               
               candidates ?
                    (
                    <div className="candidates">
                        {
                            candidates.map(candidate =>(
                                <div key={candidate.id} className="candidate-container">
                                    <div className="experience"><h2>{candidate.experience}</h2></div>
                                    <p>Localização: Mora em {candidate.city}</p>
                                    <p>Cargo: Desenvolvedor(a)</p>

                                    <h3>Habilidades</h3>

                                    <div className="techs">
                                        {candidate.technologies.map(tech =>(
                                            <div className="tech-container" key={tech.name}>
                                                {tech.name}
                                                {tech.is_main_tech}
                                            </div>
                                        ))}
                                    </div>
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