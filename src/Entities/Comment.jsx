import React from 'react';
import './Comment.css'; // Подключаем CSS файл со стилями

function Comment({ comment, username, replies, repliedTo, filesIds, pollId }) {
    return (
        <div className="comment">
            <div className="comment-content">
                <p>{comment.content}</p>
                <div className="comment-details">
                    <span className="comment-id">id: {comment.commentId}</span>
                    <span className="comment-author">Автор: {username}</span>
                    <span className="comment-replies">Ответы: {replies.length}</span>
                    <span className="comment-replied-to">Отвечено на: {repliedTo.length}</span>
                    {filesIds.picturesIds.length > 0 && <span className="comment-pictures-ids">Идентификаторы картинок: {filesIds.picturesIds.map(id => id + " ")}</span>}
                    {filesIds.videosIds.length > 0 && <span className="comment-videos-ids">Идентификаторы видео: {filesIds.videosIds.map(id => id + " ")}</span>}
                    {pollId && <span className="comment-poll-id">Идентификатор опроса: {pollId}</span>}
                </div>
            </div>
        </div>
    );
}

export default Comment;