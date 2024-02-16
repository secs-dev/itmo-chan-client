import React, {useEffect, useState} from 'react';
import './Thread.css'; // Подключаем CSS файл со стилями
import Comment from './Comment'; // Импортируем компонент комментария
import {fetchComment} from '../Api/api';

function Thread({ threadComments }) {
    const thread = threadComments;
    const [showMoreComments, setShowMoreComments] = useState(false);
    const [initComment, setInitComment] = useState(null);

    useEffect(() => {
        async function fetchInitComment() {
            try {
                console.log("fetching");
                const data = await fetchComment(thread.initCommentId); // Загружаем данные о теме и ветках темы
                // Для каждой ветки отправляем запрос на получение комментариев
                setInitComment(data);
            } catch (error) {
                console.error('Error fetching init comment:', error);
            }
        }
        fetchInitComment();
    }, [thread.initCommentId]);

    // Функция для отображения дополнительных комментариев
    const handleShowMoreComments = () => {
        setShowMoreComments(true);
    };
    console.log(initComment);
    return (
        <div className="thread">
            <div className="thread-info">
                <p>Идентификатор ветки: {thread.threadId}</p>
                <p>Идентификатор темы: {thread.topicId}</p>
                <p>Идентификатор начального комментария: {thread.initCommentId ? thread.initCommentId : 'Нет'}</p>
                <p>Популярность: {thread.popularity}</p>
                {initComment ? <Comment key={initComment.comment.commentId} {...initComment} /> : <p> Loading... </p>}
            </div>
            <div className="comments">
                {thread.comments.filter(com => initComment && com.comment.commentId !== initComment.comment.commentId).map((commentResponse, index) => (
                    // Отображаем только первые несколько комментариев, если кнопка загрузки не нажата
                    (showMoreComments || index < 2) && <Comment key={commentResponse.comment.commentId} {...commentResponse} />
                ))}
            </div>
            {/* Показываем кнопку только если есть дополнительные комментарии */}
            {!showMoreComments && thread.comments.length > 2 && (
                <button className="show-more-comments" onClick={handleShowMoreComments}>Показать больше комментариев</button>
            )}
        </div>
    );
}

export default Thread;