import axios from "axios";
import { setFetchError, setIsFetching, setRepos } from "../../reducers/reposReducers";


export const getRepos = (searchQuery, currentPage, perPage) => {



    if (searchQuery === "") {
        searchQuery = "stars:%3E1"
    }

    let url = "https://api.github.com/search/repositories?q=" + searchQuery + "&sort-stars&per_page=" + perPage + "&page=" + currentPage


    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            const response = await axios.get(url)
             dispatch(setRepos(response.data))
        } catch (error) {

             dispatch(setFetchError(true))
             dispatch(setIsFetching(false))
        }
   





    }


}

export const getCurrentRepo = async (userName, repoName, setRepo) => {
    let url = "https://api.github.com/repos/" + userName + "/" + repoName
    const response = await axios.get(url)
    setRepo(response.data)
}
export const getContributors = async (userName, repoName, setContributors) => {
    let url = "https://api.github.com/repos/" + userName + "/" + repoName + "/contributors?page1&per_page=10"
    const response = await axios.get(url)
    setContributors(response.data)
}