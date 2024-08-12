import { useRef } from "react"
import Button from "../Button"
import Container from "../Container"
import { useScroll, useTransform, motion } from "framer-motion"

const Hero = () => {
	const videoContainerRef = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: videoContainerRef,
		offset: ["start start", "end end"],
	})

	const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

	return (
		<div className="relative h-[300vh] bg-background text-white">
			<motion.div
				style={{ opacity }}
				ref={videoContainerRef}
				className="absolute -top-[--header-height] left-0 w-full h-[200vh]"
			>
				<img
					src="/posters/napoleon.webp"
					className="sticky top-0 h-screen object-cover"
				/>
			</motion.div>
			<Container className="relative z-10 h-[--hero-height] pb-7">
				<motion.div
					className="flex flex-col items-start justify-end h-full"
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1 },
					}}
					whileInView="visible"
					exit="hidden"
					animate="hidden"
					viewport={{ amount: 0.9 }}
				>
					<h1 className="text-5xl font-bold mb-10">
						All Apple Originals. <br />
						Only on Apple TV+.
					</h1>
					<Button className="mb-16 font-semibold" size="large">
						Stream Now
					</Button>
					<p className="font-semibold">Watch on the 📺 app</p>
				</motion.div>
			</Container>
		</div>
	)
}

export default Hero
