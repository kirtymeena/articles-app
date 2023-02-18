import React, { useEffect, useState } from 'react'
import { getArticles } from '../api'
import Cards from '../components/Cards'
import Loading from "../components/Loading"
import { ProgressSpinner } from 'primereact/progressspinner';



function ArticleList() {
    const [articles, setArticles] = useState([])

    const fetchArticles = () => {
        getArticles().then(res => {
            if (res) {
                setArticles(res)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        setTimeout(() => fetchArticles(), 3000)
    }, [])




    const renderArticles = articles.map(article =>
        <div key={article.id} className="card__list">
            <Cards image={article.jetpack_featured_media_url} title={article.title.rendered} authors={article.parselyMeta["parsely-author"]} execerpt={article.excerpt.rendered} date={article.date} link={article.link} />
        </div>
    )
    return (
        <>
            {
                articles.length === 0 ?
                    <Loading /> :
                    <div className='card__list'>
                        {renderArticles}
                    </div>
            }
        </>
    )
}

export default ArticleList