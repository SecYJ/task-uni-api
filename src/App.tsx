import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useUniversity from "./hooks/useUniversity";
import { getUniversityList } from "./services/universityService";
import { Table, Modal, Search, Pagination } from "./components";

const App = () => {
	const [temp, setTemp] = useState({ name: "", country: "turkey" });
	const [currentPage, setCurrentPage] = useState(1);
	const { data, isLoading } = useUniversity(temp, currentPage);
	const queryClient = useQueryClient();

	useEffect(() => {
		const prefetchUniList = async () => {
			// The results of this query will be cached like a normal query
			await queryClient.prefetchQuery({
				queryKey: ["university-list", temp.name, temp.country, currentPage + 1],
				queryFn: () => getUniversityList(temp, currentPage + 1),
			});
		};

		prefetchUniList();
	}, [currentPage, queryClient, temp]);

	return (
		<div className="min-h-screen grid grid-rows-[auto_1fr_auto] container">
			<Search setTemp={setTemp} temp={temp} />

			{isLoading ? <div /> : <Table universityList={data ?? []} />}

			<Pagination temp={temp} setCurrentPage={setCurrentPage} currentPage={currentPage} />

			{isLoading && <Modal />}
		</div>
	);
};

export default App;
