import axios from 'axios';

const API_URL = "http://127.0.0.1:8000";

export const genStories = async (prompt) => {
    const result = await axios({
        method: "POST",
        url: `${API_URL}/gen-stories`,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data: JSON.stringify({ prompt })
    });
    return result.data;
};

export const genComic = async (prompt) => {
    const result = await axios({
        method: "POST",
        url: `${API_URL}/gen-comic`,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data: JSON.stringify({ prompt })
    });
    return result.data;
};