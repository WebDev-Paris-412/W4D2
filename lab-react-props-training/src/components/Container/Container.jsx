import React from "react"
import "./Container.css"

function Container({ children }) {
	return (
		<div className="Container">
			{children}
			{/* Need something here */}
		</div>
	)
}

export default Container
