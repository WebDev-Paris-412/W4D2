import React from "react"
import languages from "./languages.json"

function Greetings({ lang, children }) {
	// let greet
	// if (lang === "de") {
	// 	greet = "Halo"
	// } else if (lang === "fr") {
	// 	greet = "Salut"
	// } else {
	// 	greet = "Hi"
	// }
	// const languages = {
	// 	de: "Halo",
	// 	fr: "Salut",
	// 	en: "Hi",
	// 	it: "Ciao",
	// }

	return (
		<div>
			{languages[lang]} {children}
		</div>
	)
}

export default Greetings
