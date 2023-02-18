import React from "react";

function Bar({ config ,isCurrent,num}) {
	return (
		<div className="bar" style={{ height: config.height ,backgroundColor: isCurrent ? '#8cb9c4' : ''}}>
			{num}
		</div>
	);
}

export default Bar;
