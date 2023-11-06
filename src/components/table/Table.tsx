import { University } from "../../types/interface";
import TableRow from "./TableRow";

interface Props {
	universityList: University[];
}

const Table = ({ universityList }: Props) => {
	return (
		<div className="relative overflow-x-auto">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Name
						</th>
						<th scope="col" className="px-6 py-3">
							Alpha_two_code
						</th>
						<th scope="col" className="px-6 py-3">
							Web_pages
						</th>
						<th scope="col" className="px-6 py-3">
							Country
						</th>
					</tr>
				</thead>
				<tbody>
					{universityList?.map((university) => (
						<TableRow university={university} key={university.name} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
