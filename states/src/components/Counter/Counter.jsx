import { useState } from "react"

function Counter() {
	// const whatIsThat = React.useState("test")
	// const [state, setState] = useState("test")
	const [count, setCount] = useState(1)
	const [color, setColor] = useState("whitesmoke")
	// let counter = 0

	console.log("Rendering component")
	function handleDecrement() {
		console.log(count)
		// setCount(count - 3)
		// setCount(count - 1)
		// setCount(count - 1)
		setCount((currentState) => currentState - 1)
		setCount((currentState) => currentState - 1)
	}
	function handleColorChange() {
		const newColor = `hsl(${Math.random() * 360}, 50%, 60%)`
		setColor(newColor)
		setCount(count + 10)
	}
	return (
		<div>
			<h2
				style={{
					color: color,
				}}>
				Count: {count}
			</h2>

			<div>
				<button
					onMouseEnter={handleColorChange}
					onClick={() => {
						setCount(count + 1)
						// console.log("This is being executed")
						// counter++
						// console.log("Value of counter: ", counter)
					}}>
					Increment
				</button>
				<button onClick={handleDecrement}>Decrement</button>
			</div>
		</div>
	)
}

export default Counter
