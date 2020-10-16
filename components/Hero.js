import { Box, Image } from "@chakra-ui/core";
import { Fader } from "react-rapid-carousel";

const Hero = () => {
  return (
    <Fader>
     <Box
			width="auto"
			rounded='sm'
			overflow='hidden'
			height={{ base: "200px", sm: "300px", md: "350px"}}
		>
			<Image src="/img/1.jpg" alt="Rear view of modern home with pool" />
      </Box>
     <Box
			width="auto"
			borderWidth='1px'
			rounded='sm'
			overflow='hidden'
			height={{ base: "200px", sm: "300px", md: "350px"}}
		>
			<Image src="/img/2.jpg" alt="Rear view of modern home with pool" />
      </Box>
     <Box
			width="auto"
			borderWidth='1px'
			rounded='sm'
			overflow='hidden'
			height={{ base: "200px", sm: "300px", md: "350px"}}
		>
			<Image src="/img/3.jpg" alt="Rear view of modern home with pool" />
      </Box>
    </Fader>
  );
}

export default Hero;



















