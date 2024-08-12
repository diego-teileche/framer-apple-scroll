import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from "../movies"

const VideoCarousel = () => {
	return (
		<div className="bg-background pb-8">
			<div className="overflow-clip">
				<div className="flex gap-5 mb-5 left-1/2 -translate-x-1/2">
					<div className="shrink-0 overflow-clip w-[60vh] aspect-video rounded-2xl">
						<img
							src={movies[0].poster}
							className="w-full h-full object-cover"
							alt={movies[0].name}
						/>
					</div>
					<div className="shrink-0 overflow-clip w-[60vh] aspect-video rounded-2xl">
						<img
							src={movies[1].poster}
							className="w-full h-full object-cover"
							alt={movies[1].name}
						/>
					</div>
					<div className="shrink-0 overflow-clip w-[60vh] aspect-video rounded-2xl">
						<img
							src={movies[2].poster}
							className="w-full h-full object-cover"
							alt={movies[2].name}
						/>
					</div>
				</div>
			</div>

			<div className="space-y-3">
				<SmallCarousel movies={randomMoviesSet1} />
				<div className="[--duration:70s] [--carousel-offset:-32px]">
					<SmallCarousel movies={randomMoviesSet2} />
				</div>
			</div>
		</div>
	)
}

const SmallCarousel = ({ movies }: { movies: Movie[] }) => {
	return (
		<div className="overflow-clip">
			<div className="animate-carousel-move relative left-[var(--carousel-offset,0px)] flex gap-3">
				{movies.map((movie, index) => (
					<div
						key={`${movie.name}-${index}`}
						className="w-[23vh] shrink-0 aspect-video"
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
