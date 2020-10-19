import Link from "next/link";
import { Text } from "@chakra-ui/core";

const Brand = () => {
	return (
		<Link href='/'>
			<a>
				<Text as='b' color='teal'>
					e-commerce
				</Text>
			</a>
		</Link>
	);
};

export default Brand;

