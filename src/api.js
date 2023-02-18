import axios from "axios";


const URL = "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed"

export const getArticles = async () => {
    const response = await axios.get(URL);
    console.log(response.data)
    return response.data
}