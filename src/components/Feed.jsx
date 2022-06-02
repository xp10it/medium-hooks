import React from 'react'
import {NavLink} from 'react-router-dom'
import TagList from './TagList'

const Feed = ({articles}) => {
    return (
        <div>
            {articles.map((article, index) => (
                <div className="article-preview" key={index}>
                    <div className="article-meta">
                        <NavLink to={`/profiles/${article.author.username}`}>
                            <img src={article.author.image} alt="" />
                        </NavLink>
                        <div className="info">
                            <NavLink
                                to={`/profiles/${article.author.username}`}
                                className="author"
                            >
                                {article.author.username}
                            </NavLink>
                            <span className="date">{article.createdAt}</span>
                        </div>
                    </div>
                    <NavLink to={`/articles/${article.slug}`} className="preview-NavLink">
                        <h1>{article.title}</h1>
                        <p>{article.description}</p>
                        <span>Read more...</span>
                        <TagList tags={article.tagList}/>
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

export default Feed
