import { Badge, Box, Image } from "@chakra-ui/core";
import { createRangeLite } from "../utils/createRange";
import Rating from "./Rating";

function Card({ size = "sm" }) {
	const property = {
		imageUrl: "https://bit.ly/2Z4KKcF",
		imageAlt: "Rear view of modern home with pool",
		beds: 3,
		baths: 2,
		title: "Modern home in city center in the heart of historic Los Angeles",
		formattedPrice: "$1,900.00",
		reviewCount: 34,
		rating: 2.5,
	};

	const getSize = (size) => {
		if (size === "sm") {
			size = "250px";
		}
		if (size === "md") {
			size = "sm";
		}
		if (size === "lg") {
			size = "md";
		}

		return size;
	};

	return (
		<Box
			maxW={getSize(size)}
			borderWidth='1px'
			rounded='lg'
			overflow='hidden'
			m='1'
		>
			<Image src={property.imageUrl} alt={property.imageAlt} />

			<Box p='3'>
				<Box d='flex' alignItems='baseline'>
					<Badge rounded='full' px='2' variantColor='teal'>
						New
					</Badge>
					<Box
						color='gray.500'
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
					isTruncated
				>
					{property.title}
				</Box>

				<Box>
					{property.formattedPrice}
					<Box as='span' color='gray.600' fontSize='sm'>
						/ wk
					</Box>
				</Box>

				<Box d='flex' mt='2' alignItems='center'>
					<Rating value={property.rating} />

					<Box as='span' ml='2' color='gray.600' fontSize='sm'>
						{property.reviewCount} reviews
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Card;

