import useUniversity from "../../hooks/useUniversity";
import { LIMIT_PER_PAGE } from "../../services/universityService";
import { Queries } from "../../types/interface";
import PaginationItem from "./PaginationItem";

interface Props {
	currentPage: number;
	temp: Queries;
	setCurrentPage: (page: number) => void;
}

const Pagination = ({ currentPage, temp, setCurrentPage }: Props) => {
	const { data } = useUniversity(temp);
	const pages = data?.length ? Math.ceil(data.length / LIMIT_PER_PAGE) : 0;

	return (
		<nav aria-label="Page navigation example" className="my-10 text-center">
			<ul className="inline-flex -space-x-px text-base h-10">
				<PaginationItem
					onClick={() => setCurrentPage(currentPage - 1 <= 0 ? 1 : currentPage - 1)}
					disabled={currentPage === 1}
				>
					Previous
				</PaginationItem>

				{/* NOTE: testing for current page less than 5 */}
				{currentPage <= 4 && (
					<>
						{Array.from({ length: 5 }, (_, index) => {
							return (
								<PaginationItem
									key={index}
									isActive={currentPage === index + 1}
									onClick={() => setCurrentPage(index + 1)}
								>
									{index + 1}
								</PaginationItem>
							);
						})}
						<PaginationItem>...</PaginationItem>
						<PaginationItem onClick={() => setCurrentPage(pages)}>{pages}</PaginationItem>
					</>
				)}

				{/* NOTE: Pagination more than 5 */}
				{currentPage >= 5 && currentPage < pages - 5 && (
					<>
						<PaginationItem
							onClick={() => {
								const pageNumber = Math.floor(currentPage / 5) <= 0 ? 1 : Math.floor(currentPage / 5);

								setCurrentPage(pageNumber);
							}}
						>
							{Math.floor(currentPage / 5) <= 0 ? 1 : Math.floor(currentPage / 5)}
						</PaginationItem>
						<PaginationItem>...</PaginationItem>
						{Array.from({ length: 3 }, (_, index) => {
							const tempNumber = currentPage - 1;

							return (
								<PaginationItem
									key={index}
									onClick={() => setCurrentPage(tempNumber + index)}
									isActive={currentPage === tempNumber + index}
								>
									{tempNumber + index}
								</PaginationItem>
							);
						})}
						<PaginationItem>...</PaginationItem>
						<PaginationItem onClick={() => setCurrentPage(pages)}>{pages}</PaginationItem>
					</>
				)}

				{/* TODO: fix bug */}
				{currentPage + 5 === pages && (
					<>
						<PaginationItem>1 testing</PaginationItem>
						<PaginationItem>...</PaginationItem>
						{Array(pages)
							.fill(0)
							// NOTE: BUG MAYBE HERE
							.slice(pages - 5, pages)
							.map((_, index) => {
								const tempNumber = currentPage - 1;
								console.log(tempNumber);

								return (
									<PaginationItem
										key={index}
										onClick={() => setCurrentPage(tempNumber + index)}
										isActive={currentPage === index + 1}
									>
										{tempNumber + index}
										{/* NOTE: testing */}
									</PaginationItem>
								);
							})}
					</>
				)}

				{/* next page button */}
				<PaginationItem
					onClick={() => {
						setCurrentPage(currentPage + 1 >= pages ? currentPage : currentPage + 1);
					}}
					disabled={currentPage >= pages}
				>
					Next
				</PaginationItem>
			</ul>
		</nav>
	);
};

export default Pagination;
