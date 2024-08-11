import Button from "./components/Button"
import Container from "./components/Container"
import Header from "./components/Header"
import "./index.css"

function App() {
	return (
		<>
			<Header />
			<main>
				<div className="h-[300vh]">
					<Container>
						Hero Component <Button size="large">Large Button</Button>
					</Container>
				</div>
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
