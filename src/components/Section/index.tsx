import Card from '../Card'

const postsList = [
	{
		title: 'Cómo convertir un número a formato de moneda en JavaScript',
		description:
			'El método Intl.NumberFormat() nos permite formatear a un valor más legible.',
		image: 'https://res.cloudinary.com/efrencodes/image/upload/v1672193175/www.efrencodes.com/tecnologies/javascript.svg',
		url: '/articulos/como-convertir-un-numero-a-formato-de-moneda-en-javascript'
	}
]

const Section = ({ title, id }) => {
	return (
		<section id={id}>
			<h1 className="text-neutral-900 text-sm font-semibold font-sans">
				{title}
			</h1>
			{postsList.map(({ title, description, image, url }) => (
				<Card
					title={title}
					description={description}
					image={image}
					url={url}
				/>
			))}
		</section>
	)
}

export default Section
