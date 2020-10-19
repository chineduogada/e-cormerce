import { Slider } from "react-rapid-carousel";

import Card from "./Card";

const Products = ({ data, lg }) => {
	const getBreakpoints = () => {

		if (lg) {
			return	[
						{ width: "300", slidesToShow: 1 },
						{ width: "600", slidesToShow: 2 },
						{ width: "768", slidesToShow: 3 },
						{ width: "1024", slidesToShow: 4 },
					]
		} 

		return [
				{ width: "300", slidesToShow: 2 },
				{ width: "768", slidesToShow: 4 },
				{ width: "1024", slidesToShow: 5 },
			];
	};


	const SliderProps = {
		breakpoints: getBreakpoints()
	
	}

	return (
		<Slider {...SliderProps}>
			{data.map((item, index) => (
				<Card data={item}
				// key={item.id}
					key={index}
					truncateTitle={!lg}
				/>
			))}
		</Slider>
	);
};

export default Products;

























