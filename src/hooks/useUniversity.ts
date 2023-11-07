import { useQuery } from "@tanstack/react-query";
import { getUniversityList } from "../services/universityService";
import { Queries } from "../types/interface";

const useUniversity = (queries: Queries) => {
	return useQuery({
		queryKey: ["university-list", queries.name, queries.country],
		queryFn: () => getUniversityList(queries),
	});
};

export default useUniversity;
