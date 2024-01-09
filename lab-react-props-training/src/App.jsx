import "./App.css"
import Container from "./components/Container/Container"
import IdCard from "./components/IdCard/IdCard"
import Greetings from "./components/Greetings/Greetings"
import Random from "./components/Random/Random"
function App() {
	return (
		<div className="App">
			<h1> LAB | React Training</h1>

			<Container>
				<IdCard
					lastName="Doe"
					firstName="John"
					gender="male"
					height={178}
					birth={new Date("1992-07-14")}
					picture="https://randomuser.me/api/portraits/men/44.jpg"
				/>
			</Container>
			<Container>
				<IdCard
					lastName={"Delores"}
					firstName={"Obrien"}
					gender={"female"}
					height={172}
					birth={new Date("1988-05-11")}
					picture={"https://randomuser.me/api/portraits/women/44.jpg"}
				/>
			</Container>

			<Container>
				<Greetings lang="de">Ludwig</Greetings>
				<Greetings lang="fr">Pierre</Greetings>
			</Container>

			<Container>
				<Random min={5} max={10} />
			</Container>
		</div>
	)
}

export default App
