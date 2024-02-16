import React, { useState, useEffect } from 'react';
import { fetchTopics } from '../../Api/api';

function TopicList() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        async function fetchTopicsData() {
            try {
                const data = await fetchTopics();
                setTopics(data);
            } catch (error) {
                // Обработка ошибок
            }
        }
        fetchTopicsData();
    }, []);

    return (
        <div>
            <h2>Топики</h2>
            <ul>
                {topics.map(topic => (
                    <li key={topic.topicId}>{topic.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default TopicList;