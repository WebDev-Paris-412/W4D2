import React from "react"

function Random({ min, max }) {
	const result = Math.floor(Math.random() * (max - min)) + min
	return (
		<div>
			Random value between {min} and {max} =&gt; {result}
		</div>
	)
}

export default Random
