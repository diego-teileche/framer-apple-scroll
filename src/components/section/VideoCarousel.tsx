import { useMemo, useRef, useState } from "react"
import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from "../movies"
import {
	useScroll,
	useTransform,
	motion,
	useMotionValueEvent,
} from "framer-motion"
import { useWindowSize } from "react-use"
import Button from "../Button"

const VideoCarousel = () => {
	const { width, height } = useWindowSize()
	const carouselWeapperRef = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: carouselWeapperRef,
		offset: ["start start", "end start"],
	})

	const maximumScale = useMemo(() => {
		const windowYRatio = height / width
		const xScale = 1.66667
		const yScale = xScale * (16 / 9) * windowYRatio

		return Math.max(xScale, yScale)
	}, [width, height])

	const scale = useTransform(
		scrollYProgress,
		[0.3, 0.5, 0.66],
		[maximumScale * 1.1, maximumScale, 1]
	)

	const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1])
	const posterTranslateXLeft = useTransform(
		scrollYProgress,
		[0.64, 0.66],
		[-20, 0]
	)
	const posterTranslateXRight = useTransform(
		scrollYProgress,
		[0.64, 0.7],
		[20, 0]
	)

	const [carouselVariant, setCarouselVariant] = useState<"inactive" | "active">(
		"inactive"
	)

	useMotionValueEvent(scrollYProgress, "change", (progress) => {
		if (progress >= 0.67) {
			setCarouselVariant("active")
		} else {
			setCarouselVariant("inactive")
		}
	})

	return (
		<motion.div animate={carouselVariant} className="bg-background pb-8">
			<div
				ref={carouselWeapperRef}
				className="mt-[-100vh] overflow-clip h-[300vh]"
			>
				<div className="h-screen sticky top-0 flex items-center">
					<div className="relative flex gap-5 mb-5 left-1/2 -translate-x-1/2">
						<motion.div
							style={{ opacity: postersOpacity, x: posterTranslateXLeft }}
							className="shrink-0 overflow-clip w-[40vh] md:w-[60vh] aspect-video rounded-2xl"
						>
							<img
								src={movies[0].poster}
								className="w-full h-full object-cover"
								alt={movies[0].name}
							/>
						</motion.div>
						<motion.div
							style={{ scale }}
							className="relative shrink-0 overflow-clip w-[40vh] md:w-[60vh] aspect-video rounded-2xl"
						>
							<img
								src={movies[1].poster}
								className="w-full h-full object-cover"
								alt={movies[1].name}
							/>
							<motion.div
								variants={{
									active: { opacity: 1 },
									inactive: { opacity: 0 },
								}}
								className="absolute flex justify-between items-center p-5 text-lg text-white left-0 bottom-0 w-full"
							>
								<p>Best video title ever</p>
								<Button>Watch Now</Button>
							</motion.div>
						</motion.div>
						<motion.div
							style={{ opacity: postersOpacity, x: posterTranslateXRight }}
							className="shrink-0 overflow-clip w-[40vh] md:w-[60vh] aspect-[9/16] md:aspect-video rounded-2xl"
						>
							<img
								src={movies[2].poster}
								className="w-full h-full object-cover"
								alt={movies[2].name}
							/>
						</motion.div>
					</div>
				</div>
			</div>

			<motion.div
				variants={{
					active: { opacity: 1, y: 0 },
					inactive: { opacity: 0, y: 20 },
				}}
				transition={{ duration: 0.4 }}
				className="-mt-[calc((100vh-(40vw*(16/9)))/2)] md:-mt-[calc((100vh-(60vw*(9/16)))/2)] pt-4 space-y-3"
			>
				<SmallCarousel movies={randomMoviesSet1} />
				<div className="[--duration:70s] [--carousel-offset:-32px]">
					<SmallCarousel movies={randomMoviesSet2} />
				</div>
			</motion.div>
		</motion.div>
	)
}

const SmallCarousel = ({ movies }: { movies: Movie[] }) => {
	return (
		<div className="overflow-clip">
			<div className="animate-carousel-move relative left-[var(--carousel-offset,0px)] flex gap-3">
				{movies.map((movie, index) => (
					<div
						key={`${movie.name}-${index}`}
						className="w-[40vh] md:w-[23vh] shrink-0 aspect-video"
					>
						<img
							src={movie.poster}
							alt={movie.name}
							className="w-full h-full rounded-xl object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default VideoCarousel
