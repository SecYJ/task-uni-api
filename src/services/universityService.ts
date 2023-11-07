import apiClient from "./apiClient";
import { Queries, University } from "../types/interface";

export const LIMIT_PER_PAGE = 10;

export const getUniversityList = async (queries: Queries) => {
	const queryObj: Record<string, string> = { ...queries };

	try {
		const data = await apiClient.get<University[]>("/search", {
			params: queryObj,
		});

		return data.data;
	} catch (error) {
		console.log("testing");
	}
};
