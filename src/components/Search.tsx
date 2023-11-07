import { SubmitHandler, useForm } from "react-hook-form";

interface FormField {
	name: string;
	country: string;
}

interface Props {
	search: { name: string; country: string };
	onSearch: (temp: { name: string; country: string }) => void;
	onPageChange: (page: number) => void;
}

const Search = ({ onSearch, onPageChange }: Props) => {
	const { register, handleSubmit } = useForm<FormField>();

	const onSubmit: SubmitHandler<FormField> = (data) => {
		onSearch({ ...data });
		onPageChange(1);
	};

	return (
		<form className="my-10 grid grid-cols-3 gap-4" onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor="name" className="block col-span-full mb-2 text-sm font-medium text-gray-900">
				Search your university:
			</label>

			<input
				id="name"
				className="outline-none p-3 border border-black"
				placeholder="University Name"
				{...register("name")}
			/>

			<input
				type="text"
				placeholder="Country (Optional)"
				className="outline-none p-3 border border-black"
				{...register("country")}
			/>

			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			>
				Search
			</button>
		</form>
	);
};

export default Search;
