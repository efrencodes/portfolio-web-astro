const Articules = () => {
	return (
		<section className="my-8">
			<h1 className="text-neutral-900 text-sm font-semibold font-sans">
				Últimos artículos
			</h1>
			<article className="flex flex-row gap-5 p-2 items-center min-h-[110px] mt-4 shadow-blue-500/50 rounded-md bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 cursor-pointer">
				<img
					src="https://res.cloudinary.com/efrencodes/image/upload/v1697696694/portfolio-efrencodes-2024/hl8mydwdfkajdlswvhga.jpg"
					alt="Foto - Efrén Martínez"
					height="100"
					width="100"
					className="rounded-md"
				/>
				<div>
					<h2 className="text-neutral-900 text-base font-semibold leading-[25px]">
						Cómo convertir un número a formato de moneda en
						JavaScript
					</h2>
					<time
						className="text-neutral-900 text-xs font-semibold leading-[25px]"
						dateTime="2023-03-10"
					>
						March 10, 2023
					</time>
					<p className="text-gray-700 text-sm font-medium leading-[25px]">
						El método Intl.NumberFormat() nos permite formatear a un
						valor más legible.
					</p>
				</div>
			</article>
		</section>
	)
}

export default Articules
