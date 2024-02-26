import axios from "axios";
import {TopicEntity} from "@/shared/api";

const BACKEND_URL = "http://localhost:8080"

export async function fetchTopics() {
    try {
        const response = await axios.get<TopicEntity[]>(BACKEND_URL + "/api/topic");
        return response.data;
    } catch (error) {
        console.error('Error fetching topics:', error);
        throw error;
    }
}
