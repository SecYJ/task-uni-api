import { University } from "../../types/interface";

interface Props {
	university: University;
}

const TableRow = ({ university }: Props) => {
	const { name, alpha_two_code, web_pages, country } = university;

	return (
		<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
			<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
				{name}
			</th>
			<td className="px-6 py-4">{alpha_two_code}</td>
			<td className="px-6 py-4">Laptop</td>
			<td className="px-6 py-4">{country}</td>
		</tr>
	);
};

export default TableRow;
