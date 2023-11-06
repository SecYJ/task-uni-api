import axios from "axios";

const apiClient = axios.create({
	baseURL: "http://universities.hipolabs.com",
});

export default apiClient;
