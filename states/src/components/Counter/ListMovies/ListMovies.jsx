import { useState } from "react"
import "./ListMovies.css"
import JSONMovies from "./../../../data/movies.json"

function ListMovies() {
	const [movies, setMovies] = useState(JSONMovies)
	// const arr = [<li>1</li>, <li>2</li>, <li>3</li>]
	// const firstMovie = movies[0]
	console.log(movies)
	function handleDelete(id) {
		const newMovies = movies.filter((movie) => movie.id !== id)
		setMovies(newMovies)
	}

	function handleSortByPopularity() {
		// ! Never mutate your state.
		const copy = structuredClone(movies)
		copy.sort((movieA, movieB) => {
			return movieB.vote_average - movieA.vote_average
		})

		setMovies(copy)
	}

	return (
		<div>
			<div>
				<h3>Actions</h3>
				<hr />
				<div>
					<button onClick={handleSortByPopularity}>Sort by popularity</button>
				</div>
			</div>
			{movies.map((movie) => {
				return (
					<div key={movie.id} className="ListMovies">
						<img
							src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
							alt=""
						/>
						<h2>{movie.original_title}</h2>
						<p>{movie.overview}</p>
						<p>Notation: {movie.vote_average}</p>
						<p>Popularity: {movie.popularity}</p>
						<button onClick={() => handleDelete(movie.id)}>Delete</button>
					</div>
				)
			})}
		</div>
	)
}

export default ListMovies
