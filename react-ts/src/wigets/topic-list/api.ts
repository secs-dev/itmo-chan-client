import axios from "axios";
import {BACKEND_URL, TopicEntity} from "@/shared/api";

export async function fetchTopics() {
    try {
        const response = await axios.get<TopicEntity[]>(BACKEND_URL + "/api/topic");
        return response.data;
    } catch (error) {
        console.error('Error fetching topics:', error);
        throw error;
    }
}
