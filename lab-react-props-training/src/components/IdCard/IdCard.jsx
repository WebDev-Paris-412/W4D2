import "./IdCard.css"
import React from "react"

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
	return (
		<div className="IdCard">
			<div>
				<img src={picture} alt="profile" />
			</div>
			<div className="content">
				<p>
					<span>First Name:</span> {firstName}
				</p>
				<p>
					<span>LastName:</span> {lastName}
				</p>
				<p>
					<span>Gender:</span> {gender}
				</p>
				<p>
					<span>Height:</span> {height / 100}m
				</p>
				<p>
					<span>Birth:</span> {birth.toDateString()}
				</p>
			</div>
		</div>
	)
}

export default IdCard
