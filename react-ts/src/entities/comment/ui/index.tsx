import {CommentResponseEntity} from "@/shared/api";
import "./index.css";
import {dateArrayToDate} from "@/shared/utils";
import {Reply} from "@/entities/reply";
import {Poll} from "@/entities/poll";
import {Picture} from "@/entities/picture";
import {Video} from "@/entities/video";
import {Button} from "antd";

interface CommentProps {
    comment?: CommentResponseEntity,
    openDrawer: Function,
}

export const Comment = ({comment, openDrawer}: CommentProps) => {
    return comment && !comment.comment.deleted ?
        (<div className="comment">
        <div className="comment-header">
        <span className="comment-author">{comment.username} </span>
            <span className="comment-date">{dateArrayToDate(comment.comment.creationDate).toLocaleString()} </span>
            <Button type="text" onClick={openDrawer(comment.comment.commentId, comment.comment.threadId)}>
                <span className="comment-id">№{comment.comment.commentId} </span>
            </Button>
    </div>
    <div className="comment-replied-to">
        {  comment.repliedTo.length ? <span style={{color: "black"}}>Отвечено на:</span> : <></> }
        {comment.repliedTo.map(cId => (
                <Reply key={cId} commentId={cId}/>
))}
    </div>
    <div className="comment-title">
        {comment.comment.title}
        </div>
        <div className="comment-body">
    <p className="comment-text">{comment.comment.content}</p>
        </div>
        <div className="comment-poll">
    <Poll pollId={comment.pollId}/>
    </div>
    <div className="comment-files">
        {comment.filesIds.picturesIds.map(pId => (
                <Picture key={pId} pictureId={pId}/>
))}
    {comment.filesIds.videosIds.map(vId => (
        <Video key={vId} videoId={vId}/>
    ))}
    </div>
    <div className="comment-replies">
        {  comment.replies.length ? <span style={{color: "black"}}>Ответы: </span> : <></> }
        {comment.replies.map(cId => (
                <Reply key={cId} commentId={cId}/>
))}
    </div>
    </div>)
:
    (<div className="comment">
    <div className="comment-header">
        </div>
        <div className="comment-body">
    <p className="comment-deleted">Comment was deleted</p>
    </div>
    </div>)
}
