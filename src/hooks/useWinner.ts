import { useState } from "react";

const useWinner = () => {
	const [winner, setWinner] = useState<string | null>(null);

	function validateWinner(grid: string[][]) {
		const validationInline = () => {
			let result = false;

			for (let i = 0; i < 3; i++) {
				if (!result && grid[i][0] !== "") {
					result =
						grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2];
					result && setWinner(grid[i][0]);
				}
			}
			console.log(result);
			return result;
		};

		const validateBlock = () => {
			let result = false;

			for (let i = 0; i < 3; i++) {
				if (!result && grid[0][i] !== "") {
					result =
						grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i];
					result && setWinner(grid[0][i]);
				}
			}

			return result;
		};

		const validateDiagonal = () => {
			let result = false;

			if (grid[1][1] !== "") {
				const val = grid[1][1];

				result =
					(val === grid[0][0] && val === grid[2][2]) ||
					(val === grid[2][0] && val === grid[0][2]);

				result && setWinner(val);
			}

			return result;
		};

		return validationInline() || validateBlock() || validateDiagonal();
	}

	return {
		winner,
		validate: {
			isWinner: validateWinner,
		},
	};
};

export default useWinner;
