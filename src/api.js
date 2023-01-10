
export const fetchArticles = () => {
    return fetch("https://be-nc-news-uzju.onrender.com/api/articles")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        return data.articles
    })
}