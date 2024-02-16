import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Импортируем withRouter
import Thread from '../../Entities/Thread'; // Импортируем компонент Thread
import { fetchTopic, fetchThreadComments } from '../../Api/api'; // Импортируем функцию для получения темы по идентификатору

function Topic() {
    const [topicThreads, setTopicThreads] = useState(null);
    const { topicId } = useParams();
    useEffect(() => {
        async function fetchTopicData() {
            try {
                const data = await fetchTopic(topicId); // Загружаем данные о теме и ветках темы
                // Для каждой ветки отправляем запрос на получение комментариев
                const threadsWithComments = await Promise.all(data.threads.map(async thread => {
                    const commentsResponse = await fetchThreadComments(thread.threadId);
                    return { ...thread, comments: commentsResponse.comments };
                }));
                setTopicThreads({ topic: data.topic, threads: threadsWithComments });
            } catch (error) {
                console.error('Error fetching topic threads:', error);
            }
        }

        fetchTopicData();
    }, [topicId]);
    return (
        <div className="topic">
            {topicThreads ? (
                <>
                    <h2>{topicThreads.topic.title}</h2>
                    <div className="threads">
                        {
                            topicThreads.threads.filter(thread => thread.initCommentId !== null).map(thread => (

                            <Thread key={thread.threadId} threadComments={thread} />
                        ))}
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Topic;
