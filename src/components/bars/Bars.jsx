import React from "react";
import Bar from "./Bar";
import "./Bars.css";

function Bars({ nums, currentNums }) {

	console.log(currentNums)
	return (
		<div className="bars">
			{nums.map((item, i) => (
				<Bar
					key={"sdfds" + i}
					config={{
						height: item * 8 + "px",
					}}
					num={item}
					isCurrent={currentNums.includes(item)}
				/>
			))}
		</div>
	);
}

export default Bars;
