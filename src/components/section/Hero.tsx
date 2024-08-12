import Button from "../Button"
import Container from "../Container"

const Hero = () => {
	return (
		<div className="relative h-[300vh] bg-background text-white">
			<div className="absolute -top-[--header-height] left-0 w-full h-[200vh]">
				<img
					src="/posters/napoleon.webp"
					className="sticky top-0 h-screen object-cover"
				/>
			</div>
			<Container className="relative z-10 min-h-[--hero-height] flex flex-col justify-end items-start pb-7">
				<h1 className="text-5xl font-bold mb-10">
					All Apple Originals. <br />
					Only on Apple TV+.
				</h1>
				<Button className="mb-16 font-semibold" size="large">
					Stream Now
				</Button>
				<p className="font-semibold">Watch on the 📺 app</p>
			</Container>
		</div>
	)
}

export default Hero
