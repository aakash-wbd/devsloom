"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Image,
  Text,
  Title,
} from "@mantine/core";

const Hero = () => {
  // const imageRef = useRef<HTMLImageElement>(null);

  // useEffect(() => {
  //   if (!imageRef.current) return;

  //   const randomX = () => gsap.utils.random(-20, 20, true);
  //   const randomY = () => gsap.utils.random(-10, 10, true);
  //   const randomAngle = () => gsap.utils.random(-15, 15, true);
  //   const randomTime = () => gsap.utils.random(2, 4, true);

  //   const animate = (target: HTMLElement) => {
  //     const directionX = Math.random() > 0.5 ? 1 : -1;
  //     const directionY = Math.random() > 0.5 ? 1 : -1;

  //     // X-axis movement
  //     gsap.to(target, {
  //       x: randomX() * directionX,
  //       duration: randomTime(),
  //       ease: "power1.inOut",
  //       repeat: -1,
  //       yoyo: true,
  //     });

  //     // Y-axis movement
  //     gsap.to(target, {
  //       y: randomY() * directionY,
  //       duration: randomTime(),
  //       ease: "power1.inOut",
  //       repeat: -1,
  //       yoyo: true,
  //     });

  //     // Rotation
  //     gsap.to(target, {
  //       rotation: randomAngle(),
  //       duration: randomTime(),
  //       ease: "power1.inOut",
  //       repeat: -1,
  //       yoyo: true,
  //     });
  //   };

  //   animate(imageRef.current);
  // }, []);

  return (
    <Box
      h="100vh"
      pos="relative"
      style={{
        backgroundSize: "100% 100%",
        backgroundPosition: "0px 0px",
        backgroundImage: `
          radial-gradient(18% 28% at 24% 50%, #D0F0FF 7%, #FFFFFF00 100%), 
          radial-gradient(18% 28% at 18% 71%, #F0F8FF 6%, #FFFFFF00 100%), 
          radial-gradient(70% 53% at 36% 76%, #E0FFFF 0%, #FFFFFF00 100%), 
          radial-gradient(42% 53% at 15% 94%, #F5F5F5 7%, #FFFFFF00 100%), 
          radial-gradient(42% 53% at 34% 72%, #F7F7F7 7%, #FFFFFF00 100%), 
          radial-gradient(18% 28% at 35% 87%, #FAFAFA 7%, #FFFFFF00 100%), 
          radial-gradient(31% 43% at 7% 98%, #F0F0F0 24%, #FFFFFF00 100%), 
          radial-gradient(21% 37% at 72% 23%, #D6F1D7 24%, #FFFFFF00 100%), 
          radial-gradient(35% 56% at 91% 74%, #D9E7FF 9%, #FFFFFF00 100%), 
          radial-gradient(74% 86% at 67% 38%, #B6F4E4 24%, #FFFFFF00 100%), 
          linear-gradient(125deg, #C3F0FF 1%, #A3B2FF 100%)
          `,
      }}
    >
      <Container size="xl">
        <Grid align="center">
          <Grid.Col span={6}>
            <Text fz={16} fw={700} c="primary" className="uppercase">
              Join Us
            </Text>
            <Title order={2} fz={{ base: 24, xs: 32, md: 48 }}>
              <span className="bg-gradient-to-r from-[#FF8811] via-[#ED27FF] to-[#7F50FB] bg-clip-text text-transparent">
                Careerly
              </span>
            </Title>
            <Text size="md" c="dimmed" mb="md">
              Work at the most dynamic agency & unlock your true potential.
            </Text>
            <Button variant="outline">View Openings</Button>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box h="100vh" w="100%" pos="relative">
              <Image
                w={500}
                h={500}
                src="https://live.templately.com/wp-content/uploads/2020/08/7e0e3e50-illustator.png"
                alt="logo"
                className="absolute bottom-[230px] z-10 !object-contain"
              />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>

      <div className="absolute w-full left-0 bottom-[-2px] transform rotate-180 overflow-hidden z-[2]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="relative block !left-1/2 !w-full !h-[750px] !transform !-translate-x-1/2 !rotate-y-180 z-[-1]"
          style={{
            transform: "rotateY(180deg)",
            transformOrigin: "center",
          }}
        >
          <path
            style={{
              transformOrigin: "center",
              transform: "rotateY(180deg)",
            }}
            d="M0,6V0h1000v100L0,6z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </Box>
  );
};

export default Hero;
