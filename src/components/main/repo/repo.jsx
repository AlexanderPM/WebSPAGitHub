import React from "react";
import { NavLink } from "react-router-dom";
import "./repo.css"

const Repo = (props) => {
    const repo = props.repo;

    return (
        <div className="repo">
            <div className="repo-header">
                <div className="repo-header-name"> <NavLink to={"/card/"+repo.owner.login+"/"+repo.name}>{repo.name}</NavLink></div>
                <div className="repo-header-stars">Количество звёзд: <strong>{repo.stargazers_count} </strong></div>
            </div>
            <div className="repo-last-commit"> Дата последнего коммита: <strong>{repo.updated_at}</strong></div>
            <div className="repo-link">Ссылка на репозиторий: <a href={repo.html_url} className="repo-link-a">{repo.html_url}</a></div>
        </div>
    );
}

export default Repo