import apiClient from "./apiClient";
import { Queries, University } from "../types/interface";

export const LIMIT_PER_PAGE = 10;

export const getUniversityList = async (queries: Queries, page?: number) => {
	const queryObj: Record<string, number | string> = { ...queries };

	if (page) {
		queryObj.limit = LIMIT_PER_PAGE;
		queryObj.offset = (page - 1) * LIMIT_PER_PAGE;
	}

	try {
		const data = await apiClient.get<University[]>("/search", {
			params: {
				...queryObj,
			},
		});

		return data.data;
	} catch (error) {
		console.log("testing");
	}
};
