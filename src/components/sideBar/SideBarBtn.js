import React, { useState } from "react";



const [isSide, setSidebar] = useState(false);

const handleSideBar = () => {
	!isSide ? setSidebar(console.log("click")) : setSidebar(false);
}

const SideBarBtn = () => {
	return (
		<div>
			<div onClick={handleSideBar}>Click</div>
		</div>
	)
}

export default SideBarBtn;
