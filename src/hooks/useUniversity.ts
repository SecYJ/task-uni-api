import { useQuery } from "@tanstack/react-query";
import { getUniversityList } from "../services/universityService";
import { Queries } from "../types/interface";

const useUniversity = (queries: Queries, page?: number) => {
	return useQuery({
		queryKey: ["university-list", queries.name, queries.country, page],
		queryFn: () => getUniversityList(queries, page),
	});
};

export default useUniversity;
