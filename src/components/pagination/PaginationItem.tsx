import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	isActive?: boolean;
	disabled?: boolean;
	onClick?: () => void;
}

const PaginationItem = ({ children, isActive, onClick, disabled }: Props) => {
	return (
		<li>
			<button
				type="button"
				onClick={onClick}
				disabled={disabled}
				className={clsx(
					"flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed",
					isActive ? "dark:bg-gray-700 dark: text-white" : "dark:bg-gray-800 dark:text-gray-400"
				)}
			>
				{children}
			</button>
		</li>
	);
};

export default PaginationItem;
