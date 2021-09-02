import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setCurrentPage } from '../../reducers/reposReducers';
import { getRepos } from '../actions/repos';
import './main.css'
import { createPages } from './pagesCreator';
import Repo from './repo/repo';

const Main = () => {

    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const perPage = useSelector(state => state.repos.perPage)
    const isFetchError = useSelector(state => state.repos.isFetchError)
    const [searchValue, setSearchValue] = useState("")
    const pageCount = Math.ceil(totalCount/perPage)

    const pages = []
    createPages(pages, pageCount, currentPage)

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    const searchHandler = () => {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }

    if(isFetchError){
        return <Redirect to="/error"/>
    }

    return (

        <div>
            <div className="search">
                <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className="input-search" type="text" placeholder="Введите фразу для поиска"></input>
                <button onClick={() => searchHandler()} className="search-btn"><strong>Поиск</strong></button>
            </div>
            
            {
            isFetching === false
            ?
            repos.map(repo => <Repo key={repo.id} repo={repo} />)
            :
                <div className="fetchining">

                </div>
            }
            <div className="pages">
                {pages.map((page, index) => 
                <span key={index} 
                className={currentPage === page ? "current-page" : "page"}
                onClick={() => dispatch(setCurrentPage(page))} 
                >{page}
                </span>
                )}
            </div>


        </div>
    )

}

export default Main