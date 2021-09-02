import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCurrentRepo, getContributors } from '../actions/repos';
import "./card.css"

const Card = (props) => {
const {username, reponame} = useParams()
const [repo, setRepo] = useState({owner:{}})
const [contributors, setContributors] = useState([])

useEffect(() => {
    getCurrentRepo(username, reponame, setRepo)
    getContributors(username, reponame, setContributors)
}, [])


    return (
        <div>
            <button onClick={() => props.history.goBack()} className="back-btn">BACK</button>
            <div className="card">
                <img src={repo.owner.avatar_url}></img>
                <div className="name">{repo.name}</div>
                <div className="starts">{repo.stargazers_count}</div>
            </div>
            {contributors.map((c, index )=> 
                <div>{index+1}. {c.login}</div>
                )}
        </div>
    )
}

export default Card;