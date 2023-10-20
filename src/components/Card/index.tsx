const Card = ({ image, title, description, url }) => {
	return (
		<article className="flex flex-row gap-5 p-2 items-center min-h-[110px] mt-4 shadow-blue-500/50 rounded-md bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
			<img
				src={image}
				alt={title}
				height="100"
				width="100"
				className="rounded-md"
			/>
			<div>
				<a href={url} className="cursor-pointer">
					<h2 className="text-neutral-900 text-base font-semibold leading-[25px]">
						{title}
					</h2>
				</a>
				<h3 className="text-gray-700 text-sm font-medium leading-[25px] mt-2">
					{description}
				</h3>
				<a href={url} className="cursor-pointer">
					<p className="text-neutral-900 text-sm font-semibold font-sans mt-4">
						Ver articulo
					</p>
				</a>
			</div>
		</article>
	)
}

export default Card
