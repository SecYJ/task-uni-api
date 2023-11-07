import PaginationItem from "./PaginationItem";

interface Props<T> {
	total: T[];
	onChange: (page: number) => void;
	currentPage: number;
}

const Pagination = <T,>({ total, onChange, currentPage }: Props<T>) => {
	return (
		<nav aria-label="Page navigation example" className="my-10 text-center">
			<ul className="inline-flex -space-x-px text-base h-10">
				<PaginationItem
					onClick={() => onChange(currentPage - 1 <= 0 ? 1 : currentPage - 1)}
					disabled={currentPage === 1}
				>
					Previous
				</PaginationItem>

				{currentPage <= 4 && (
					<>
						{Array.from({ length: total.length >= 5 ? 5 : total.length }, (_, index) => {
							return (
								<PaginationItem
									key={index}
									isActive={currentPage === index + 1}
									onClick={() => onChange(index + 1)}
								>
									{index + 1}
								</PaginationItem>
							);
						})}
						{total.length >= 5 && (
							<>
								<PaginationItem>...</PaginationItem>
								<PaginationItem onClick={() => onChange(total.length)}>{total.length}</PaginationItem>
							</>
						)}
					</>
				)}

				{/* NOTE: Pagination more than 5 */}
				{/* currentPage = 13, totalLength - 5 = 13 */}
				{/* currentPage = 13, totalLength = 18 - 5 = 13 */}
				{/* currentPage = 14, totalLength - 4 = 14 */}
				{/* currentPage = 13, currentPage=13 < totalLength-5=13 */}

				{/* NOTE: might be correct, fix later */}
				{/* {total.length - currentPage >= 5 && currentPage > 5 && (
					<>
						<PaginationItem onClick={() => onChange(1)}>1</PaginationItem>
						<PaginationItem>...</PaginationItem>
						{Array.from({ length: 3 }, (_, index) => {
							const tempNumber = currentPage - 1;

							return (
								<PaginationItem
									key={index}
									onClick={() => onChange(tempNumber + index)}
									isActive={currentPage === tempNumber + index}
								>
									{tempNumber + index}
								</PaginationItem>
							);
						})}
						<PaginationItem>...</PaginationItem>
						<PaginationItem onClick={() => onChange(total.length)}>{total.length}</PaginationItem>
					</>
				)} */}

				{/* NOTE: correct version */}
				{currentPage >= 5 && currentPage <= total.length - 5 && (
					<>
						<PaginationItem onClick={() => onChange(1)}>1</PaginationItem>
						<PaginationItem>...</PaginationItem>
						{Array.from({ length: 3 }, (_, index) => {
							const tempNumber = currentPage - 1;

							return (
								<PaginationItem
									key={index}
									onClick={() => onChange(tempNumber + index)}
									isActive={currentPage === tempNumber + index}
								>
									{tempNumber + index}
								</PaginationItem>
							);
						})}
						<PaginationItem>...</PaginationItem>
						<PaginationItem onClick={() => onChange(total.length)}>{total.length}</PaginationItem>
					</>
				)}

				{/* currentPage = 15,  */}
				{/* first condition */}
				{/* currentPage = 13, total = 18 - 5 = 13, condition = false  */}
				{/* currentPage = 14, total = 18 - 5 = 13, condition = true */}
				{/* second condition */}
				{/* currentPage = 13, total = 18, condition = true */}
				{/* currentPage = 18, total = 18, condition = true */}
				{/* total.length > 5 not sure */}
				{/* currentPage <= 4 */}
				{/* {total.length - currentPage <= 5 && (
					<>
						<PaginationItem onClick={() => onChange(1)}>1</PaginationItem>
						<PaginationItem>...</PaginationItem>
						{Array.from({ length: 5 }, (_, index) => {
							return (
								<PaginationItem
									key={index}
									onClick={() => onChange(total.length - index)}
									isActive={currentPage === total.length - index}
								>
									{total.length - index}
								</PaginationItem>
							);
						}).reverse()}
					</>
				)} */}
				{/* NOTE: correct version */}
				{currentPage > total.length - 5 && currentPage <= total.length && (
					<>
						<PaginationItem onClick={() => onChange(1)}>1</PaginationItem>
						<PaginationItem>...</PaginationItem>
						{Array.from({ length: 5 }, (_, index) => {
							return (
								<PaginationItem
									key={index}
									onClick={() => onChange(total.length - index)}
									isActive={currentPage === total.length - index}
								>
									{total.length - index}
								</PaginationItem>
							);
						}).reverse()}
					</>
				)}

				<PaginationItem
					onClick={() => {
						onChange(currentPage + 1 > total.length ? currentPage : currentPage + 1);
					}}
					disabled={currentPage >= total.length}
				>
					Next
				</PaginationItem>
			</ul>
		</nav>
	);
};

export default Pagination;
