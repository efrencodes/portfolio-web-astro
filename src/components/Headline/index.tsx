const HeadLine = () => {
	return (
		<section className="flex flex-row gap-5 items-end my-8">
			<img
				src="https://res.cloudinary.com/efrencodes/image/upload/v1697696694/portfolio-efrencodes-2024/hl8mydwdfkajdlswvhga.jpg"
				alt="Foto - Efrén Martínez"
				height="197"
				width="197"
				className="rounded-md"
			/>
			<div>
				<h1 className="text-neutral-900 text-2xl font-semibold leading-[25px]">
					Efrén Martínez
				</h1>
				<h2 className="text-gray-700 text-base font-medium leading-[25px] mt-3">
					<span className="text-teal-600">
						Desarrollador frontend
					</span>{' '}
					especializado en{' '}
					<span className="text-amber-600">#javascript</span>.
					Enfocado en desarrollo web con tecnologias como{' '}
					<span className="text-green-600">#vuejs</span>,{' '}
					<span className="text-cyan-600">#react</span> y{' '}
					<span className="text-blue-600">#typescript</span>.
				</h2>
				<p className="text-neutral-900 text-sm font-semibold mt-4 font-sans">
					encuentráme en:
				</p>
			</div>
		</section>
	)
}

export default HeadLine
