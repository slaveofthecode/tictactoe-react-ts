import { useState } from "react";

const INIT_GRID = [
	["", "", ""],
	["", "", ""],
	["", "", ""],
];

const useGrid = () => {
	const [grid, setGrid] = useState(INIT_GRID);

	return {
		grid,
		setGrid,
	};
};

export default useGrid;
