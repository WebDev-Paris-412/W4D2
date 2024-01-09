import Counter from "./components/Counter/Counter"
import ListMovies from "./components/Counter/ListMovies/ListMovies"
import "./App.css"
import { useState } from "react"
// import movies from "./data/movies.json"
function App() {
	const [showCounter, setShowCounter] = useState(false)

	// const result = showCounter ? 'yes' : 'nop'
	function handleClick() {
		setShowCounter(!showCounter)
	}
	const movies = [
		{
			name: "Spiderman",
			description: "Goota love ! legged monsters",
		},
		{
			name: "300",
			description: "Ahou ahou !",
		},
	]
	const student = [
		{ name: "Bob", age: 42 },
		{ name: "Alice", age: 57 },
	]
	return (
		<>
			<h1>States !</h1>
			<p>
				{true} and {false}
			</p>
			<button onClick={handleClick}>
				{showCounter ? "Hide" : "Display"} Counter
			</button>
			<p>{showCounter ? "Let's show the counter" : "no counter"}</p>
			{showCounter ? <Counter /> : null}
			{showCounter && <Counter />}

			<section>
				<h2>Movies</h2>
				{/* <ListMovies /> */}
			</section>

			<section>
				<h2>Movies</h2>
				<List array={movies} Component={OneMovie} />
			</section>
			<section>
				<h2>Students</h2>
				<List array={student} Component={OneStudent} />
			</section>
		</>
	)
}

function List({ array, Component }) {
	return (
		<>
			{array.map((el, i) => {
				return <Component key={i} displayedElement={el} />
			})}
		</>
	)
}

function OneStudent({ displayedElement }) {
	return (
		<div>
			<p>Student: {displayedElement.name}</p>
			<p>Age: {displayedElement.age}</p>
		</div>
	)
}

function OneMovie({ displayedElement }) {
	return (
		<div>
			<h2>{displayedElement.name}</h2>
			<p>{displayedElement.description}</p>
		</div>
	)
}

export default App
