import React, { useEffect, useState } from 'react';
import NavBar from "./NavBar";
import '../App.css';
import styles from '../NewsItem.module.css';

const NewsItem = ({ title, summary, image, date }) => (
    <div className={styles.newsItem}>
        <img src={image} alt={title} className={styles.newsImage} />
        <div className={styles.newsContent}>
            <h2 className={styles.newsTitle}>{title}</h2>
            <p className={styles.newsDate}>{date}</p>
            <p className={styles.newsSummary}>{summary}</p>
        </div>
    </div>
);

const News = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('URL_TO_YOUR_NEWS_API')
            .then(response => response.json())
            .then(data => {
                setNewsArticles(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching news:', error);
                setError(error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading news...</p>;
    if (error) return <p>Error loading news: {error.message}</p>;

    return (
        <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
            <NavBar isAuthenticated={true} userRole={"front"} patientId={""} style={{ paddingRight: 0 }} />
            <div className={styles.newsContainer}>
                {newsArticles.map(article => (
                    <NewsItem key={article.id} {...article} />
                ))}
            </div>
        </div>
    );
};

export default News;
