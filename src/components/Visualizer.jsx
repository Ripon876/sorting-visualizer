import React from "react";
import Bars from "./bars/Bars";
import "./Visualizer.css";

function Visualizer() {
	let tempNums = [30, 44, 19, 25, 36, 10, 22, 26, 2, 15, 34, 20, 8, 3];
	const [nums, setNums] = React.useState(tempNums);
	const [currentNums, setCN] = React.useState([]);
	const btnRef = React.useRef(null);

	function sortArr() {
		var isSwapped = false;

		for (let i = 0; i < nums.length; i++) {
			isSwapped = false;

			for (let j = 0; j < nums.length - i - 1; j++) {
				if (nums[j] > nums[j + 1]) {
					let cn = [nums[j-1], nums[j+1]];
					setCN((old) => cn);

					console.log(cn);

					console.log("swape");

					let s = [...nums];

					let temp = nums[j];
					s[j] = s[j + 1];
					s[j + 1] = temp;
					// console.log(nums);
					setNums((old) => s);
					isSwapped = true;
				}
			}

			if (!isSwapped) {
				break;
			}
		}

		setTimeout(() => {
			if (!!!nums.reduce((n, item) => n !== false && item >= n && item)) {
				console.log(nums);
				console.log("not done");
				// sortArr();
				btnRef.current.click();
			} else {
				setCN([]);
				console.log("done");
				// alert("done");
			}
		},0.001);

		// return nums;
	}

	const start = () => {
		sortArr();
	};
	return (
		<div className="visualizer">
			<Bars nums={nums} currentNums={currentNums} />
			<div style={{ marginLeft: "10px" }}>
				<button onClick={start} ref={btnRef}>
					Start
				</button>
				<button
					onClick={() => {
						setNums(tempNums);
					}}
				>
					Reset
				</button>
			</div>
		</div>
	);
}

export default Visualizer;
