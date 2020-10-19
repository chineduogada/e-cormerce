import { Badge, Box, Image } from "@chakra-ui/core"
	;

	import truncate from "../utils/truncate"
import useThemeMode from "../hooks/useThemeMode";
import Rating from "./Rating";


function Card({ data, truncateTitle }) {
	const { boxColors } = useThemeMode();

	const property = {
		imageUrl: "https://bit.ly/2Z4KKcF",
		imageAlt: "Rear view of modern home with pool",
		beds: 3,
		baths: 2,
		title: "Modern home in city center in the heart of historic Los Angeles",
		formattedPrice: "$1,900.00",
		reviewCount: 34,
		rating: 3.4,
	};

	return (

		<Box
			width="auto"
			borderWidth='1px'
			rounded='lg'
			overflow='hidden'
			m='2px'
			{...boxColors[2]}
		>
			<Image src={property.imageUrl} alt={property.imageAlt} />

			<Box p='3'>
				<Box d='flex' alignItems='baseline'>
					<Badge rounded='full' px='2' variantColor='teal'>
						New
					</Badge>
					<Box
						color='gray.400'
						fontWeight='semibold'
						letterSpacing='wide'
						fontSize='xs'
						textTransform='uppercase'
						ml='2'
					>
						{property.beds} beds &bull; {property.baths} baths
					</Box>
				</Box>

				<Box
					mt='1'
					fontWeight='semibold'
					as='h4'
					lineHeight='tight'
				>
					{truncateTitle ? truncate(property.title, 35) : property.title}
				</Box>

				<Box>
					{property.formattedPrice}
					<Box as='span' color='gray.500' fontSize='sm'>
						/ wk
					</Box>
				</Box>

				<Box d='flex' mt='2' alignItems='center'>
					<Box  display={{base: truncateTitle && "none", sm:  "block"}}>
					<Rating value={property.rating} />
					</Box>

					<Box as='span' ml='2' color='gray.500' fontSize='sm'>
						{property.reviewCount} reviews
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Card;



















































