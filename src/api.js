import axios from 'axios';

const axiosApi = axios.create({
    baseURL: "https://be-nc-news-uzju.onrender.com/api"
})

export const fetchArticles = () => {
    return fetch("https://be-nc-news-uzju.onrender.com/api/articles")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        return data.articles
    })
}

export const fetchArticleById = (article_id) => {
    return fetch(`https://be-nc-news-uzju.onrender.com/api/articles/${article_id}`).then((res) => {
        return res.json();
    })
    .then((data) => {
        return data.articles[0]
    })
}

export const fetchCommentsByArticleId = (article_id) => {
    return fetch(`https://be-nc-news-uzju.onrender.com/api/articles/${article_id}/comments`).then((res) => {
        return res.json();
    })
    .then((data) => {
        return data.comments;
    })
}



export const updateArticleVotes = (voteInc, article_id) => {
    const config = {
        inc_votes: voteInc ? 1 : -1
    }
    return axiosApi.patch(`/articles/${article_id}`, config)
    .then((data) => {
        return data.articles
    })
}

export const postNewComment = (article_id, username, newComment) => {
    const newCommentObj = {
        username: username, 
        body: newComment, 
    }
    return axiosApi.post(`/articles/${article_id}/comments`, newCommentObj)
        .then(({ data }) => {
            return data.comment
        })
}

export const fetchTopics = () => {
    return fetch("https://be-nc-news-uzju.onrender.com/api/topics")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        return data.topics
    })
}