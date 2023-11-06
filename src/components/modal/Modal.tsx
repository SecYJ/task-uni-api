import Spinner from "../Spinner";

const Modal = () => {
	return (
		<div className="fixed inset-0 bg-black/80 grid place-items-center">
			<Spinner />
		</div>
	);
};

export default Modal;
