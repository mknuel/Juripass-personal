import { useRef, useEffect } from "react";

const useClose = (callback: (event: MouseEvent) => void) => {
	const ref = useRef<HTMLDivElement>(null);

	const handleClick = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			callback(event);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	return ref;
};

export default useClose;
