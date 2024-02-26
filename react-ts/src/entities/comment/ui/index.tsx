import {CommentResponseEntity} from "@/shared/api";
import "./index.css";
import {dateArrayToDate} from "@/shared/utils";
import {Reply} from "@/entities/reply";
import {Poll} from "@/entities/poll";
import {Picture} from "@/entities/picture";
import {Video} from "@/entities/video";

interface CommentProps {
    comment?: CommentResponseEntity
}

export const Comment = ({comment}: CommentProps) => {
    return comment && !comment.comment.deleted ?
        (<div className="comment">
        <div className="comment-header">
        <span className="comment-author">{comment.username} </span>
            <span className="comment-date">{dateArrayToDate(comment.comment.creationDate).toLocaleString()} </span>
    <span className="comment-id">№{comment.comment.commentId} </span>
    </div>
    <div className="comment-replied-to">
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
