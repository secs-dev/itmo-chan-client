import {fetchThreadComments, fetchTopic} from "@/wigets/thread-list/api/api.ts";
import {TopicThreadEntity} from "@/shared/api";
import {ThreadCommentsEntity} from "@/shared/api/interfaces.ts";
import React from "react";

interface fetchProps {
    topicId: number,
    setTopicThreads:  React.Dispatch<React.SetStateAction<TopicThreadEntity | null>>,
    setThreads:  React.Dispatch<React.SetStateAction<ThreadCommentsEntity[]>>,
}

export async function fetch({topicId, setTopicThreads, setThreads}: fetchProps) {
        try {
            const data = await fetchTopic(topicId);
            data.threads = data.threads.sort((a, b) => b.popularity - a.popularity )
            setTopicThreads(data);
            const threadsWithComments = await Promise.all(data.threads.map(async thread => {
                return await fetchThreadComments(thread.threadId);
            }));
            setThreads(threadsWithComments);
        } catch (error) {
            console.error('Error fetching topic threads:', error);
        }
}