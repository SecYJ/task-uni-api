import { useState } from "react";
import useUniversity from "./hooks/useUniversity";
import { Modal, Search, Table } from "./components";
import Pagination from "./components/pagination/Pagination";
import { LIMIT_PER_PAGE } from "./services/universityService";

const App = () => {
	const [search, setSearch] = useState({ name: "", country: "turkey" });
	const [currentPage, setCurrentPage] = useState(1);
	const { data, isLoading } = useUniversity(search);
	const pages = data?.length ? Math.ceil(data.length / LIMIT_PER_PAGE) : 0;

	let universityData: unknown;

	if (data?.length) {
		universityData = Array.from({ length: pages }, (_, index) => {
			const startIndex = index * LIMIT_PER_PAGE;
			const endIndex = LIMIT_PER_PAGE * (index + 1);
			const pageData = data?.slice(startIndex, endIndex);
			return pageData;
		});
	}

	const universityList = Array.isArray(universityData) ? universityData[currentPage - 1] : [];
	const totalPage = Array.isArray(universityData) ? universityData : [];

	return (
		<div className="min-h-screen grid grid-rows-[auto_1fr_auto] container">
			<Search
				onPageChange={(page) => setCurrentPage(page)}
				onSearch={(searchData) => setSearch(searchData)}
				search={search}
			/>

			{isLoading && <div />}

			{universityList.length > 0 ? (
				<>
					<Table universityList={universityList} />
					<Pagination total={totalPage} currentPage={currentPage} onChange={(page) => setCurrentPage(page)} />
				</>
			) : (
				<p>No data found!</p>
			)}
			{isLoading && <Modal />}
		</div>
	);
};

export default App;
