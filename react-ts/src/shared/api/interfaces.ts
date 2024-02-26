export interface TopicEntity {
    topicId : number,
    name : string,
    description : number,
}

export interface ThreadEntity {
    threadId : number,
    topicId : number,
    initCommentId? : number,
    popularity : number,
}
export interface TopicThreadEntity {
    topic: TopicEntity,
    threads: ThreadEntity[],
}

export interface CommentResponseEntity {
    comment: CommentEntity,
    username: string,
    replies: number[],
    repliedTo: number[],
    filesIds: FilesIdsEntity,
    pollId?: number,
}

export interface CommentEntity {
    commentId : number,
    threadId : number,
    title? : string,
    content : string,
    userId : number,
    reactionsId : number,
    creationDate : number[],
    trashed : boolean,
    deleted : boolean,
}

export interface CommentDTOEntity {
    threadId : number,
    title : string | null,
    content : string,
}

export interface FilesIdsEntity {
    picturesIds : number[],
    videosIds : number[],
}

export interface ThreadCommentsEntity {
    thread: ThreadEntity,
    comments: CommentResponseEntity[],
}

export interface UserRegister {
    username: string;
    isuId?: number;
    password: string;
}

export interface UserAuth {
    username: string;
    password: string;
}

export type JwtToken = string;
export interface AuthenticationResponseEntity {
    username: string;
    accessToken: JwtToken;
}

export interface ErrorBackend {
    code?: number,
    message?: string,
}
