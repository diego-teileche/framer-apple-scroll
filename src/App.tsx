import Container from "./components/Container"
import Header from "./components/Header"
import Hero from "./components/section/hero"
import "./index.css"

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<div>
					<Container>Lorem, ipsum dolor.</Container>
				</div>
				<div>
					<Container>Lorem ipsum dolor sit amet.</Container>
				</div>
				<div>
					<Container>
						Lorem ipsum dolor sit amet consectetur adipisicing.
					</Container>
				</div>
			</main>
		</>
	)
}

export default App
