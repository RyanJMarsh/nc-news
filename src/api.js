
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