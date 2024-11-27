"use client";

import { images } from "@/constants/images";
import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Container,
  Group,
  Text,
  Title,
} from "@mantine/core";

import gsap from "gsap";
import { useEffect } from "react";

function random(min: number, max: number) {
  const delta = max - min;
  return () => min + delta * Math.random();
}

const randomX = random(1, 10);
const randomY = random(1, 10);
const randomTime = random(2, 4); // Adjust for faster animation
const randomAngle = random(-10, 10);

const Hero = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const cans: HTMLImageElement[] =
      gsap.utils.toArray<HTMLImageElement>(".can > img");

    if (cans.length === 0) return;

    cans.forEach((can) => {
      gsap.set(can, {
        x: randomX(),
        y: randomY(),
        rotation: randomAngle(),
      });

      animate(can);
    });

    function animate(target: HTMLElement) {
      const directionX = Math.random() > 0.5 ? 1 : -1;
      const directionY = Math.random() > 0.5 ? 1 : -1;
      const speedX = randomTime();
      const speedY = randomTime();

      // X-axis movement
      gsap.to(target, {
        x: randomX() * directionX,
        duration: speedX,
        ease: "power1.inOut",
        repeat: -1, // Loop indefinitely
        yoyo: true, // Alternate direction
      });

      // Y-axis movement
      gsap.to(target, {
        y: randomY() * directionY,
        duration: speedY,
        ease: "power1.inOut",
        repeat: -1, // Loop indefinitely
        yoyo: true, // Alternate direction
      });

      // Rotation
      gsap.to(target, {
        rotation: randomAngle(),
        duration: randomTime(),
        ease: "power1.inOut",
        repeat: -1, // Loop indefinitely
        yoyo: true, // Alternate direction
      });
    }
  }, []);

  return (
    <div
      className="h-[100vh] relative"
      style={{
        backgroundSize: "100% 100%",
        backgroundPosition:
          "0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px",
        backgroundImage:
          "radial-gradient(18% 28% at 24% 50%, #D0F0FF 7%, #FFFFFF00 100%), radial-gradient(18% 28% at 18% 71%, #F0F8FF 6%, #FFFFFF00 100%), radial-gradient(70% 53% at 36% 76%, #E0FFFF 0%, #FFFFFF00 100%), radial-gradient(42% 53% at 15% 94%, #F5F5F5 7%, #FFFFFF00 100%), radial-gradient(42% 53% at 34% 72%, #F7F7F7 7%, #FFFFFF00 100%), radial-gradient(18% 28% at 35% 87%, #FAFAFA 7%, #FFFFFF00 100%), radial-gradient(31% 43% at 7% 98%, #F0F0F0 24%, #FFFFFF00 100%), radial-gradient(21% 37% at 72% 23%, #D6F1D7 24%, #FFFFFF00 100%), radial-gradient(35% 56% at 91% 74%, #D9E7FF 9%, #FFFFFF00 100%), radial-gradient(74% 86% at 67% 38%, #B6F4E4 24%, #FFFFFF00 100%), linear-gradient(125deg, #C3F0FF 1%, #A3B2FF 100%)",
      }}
    >
      <BackgroundImage
        src="https://6amtech.com/wp-content/uploads/2023/12/6amtech-hero-section-mesh-2-1536x768.webp"
        w="100%"
        h="100%"
      >
        <Container size="xl" h="100%">
          <Center h="100%">
            <Box pos="relative" py={60}>
              <Text
                ta="center"
                fz={16}
                fw={700}
                c="primary"
                className="uppercase"
              >
                Our Services
              </Text>
              <Title
                order={2}
                ta="center"
                maw={{ base: "100%", md: "70%" }}
                fz={{ base: 24, xs: 32, md: 48 }}
                mx="auto"
              >
                Discover Our Services and{" "}
                <span className="bg-gradient-to-r from-[#FF8811] via-[#ED27FF] to-[#7F50FB] bg-clip-text text-transparent">
                  Relive Our Journey
                </span>
              </Title>
              <Text ta="center" size="md" w="60%" mx="auto" c="dimmed" my="md">
                We blend cutting-edge technologies, technical expertise, and
                industry insights to craft innovative solutions that drive your
                business growth to new heights.
              </Text>

              <Group justify="center">
                <Button variant="outline">Our Products</Button>
                <Button>About Us</Button>
              </Group>

              <div className="can absolute bottom-full right-[200px]">
                <img
                  src={images.serviceIcon1.src}
                  className="w-[48px] h-[48px]"
                />
                {/* <div>
                  <lord-icon
                    src="https://cdn.lordicon.com/tdrtiskw.json"
                    trigger="hover"
                    colors="primary:#121212,secondary:#00ff00"
                    style={{ width: "60px", height: "60px" }}
                    className="group-hover:!pointer-events-auto"
                  />
                </div> */}
              </div>

              <div className="can absolute top-1/2 right-10 -translate-y-1/2">
                <img
                  src={images.serviceIcon1.src}
                  className="w-[48px] h-[48px]"
                />
              </div>

              <div className="can absolute top-full right-[200px]">
                <img
                  src={images.serviceIcon1.src}
                  className="w-[48px] h-[48px]"
                />
              </div>

              <div className="can absolute bottom-full left-[200px]">
                <img
                  src={images.serviceIcon1.src}
                  className="w-[48px] h-[48px]"
                />
              </div>

              <div className="can absolute top-1/2 left-10 -translate-y-1/2">
                <img
                  src={images.serviceIcon1.src}
                  className="w-[48px] h-[48px]"
                />
              </div>

              <div className="can absolute top-full left-[200px]">
                <img
                  src={images.serviceIcon1.src}
                  className="w-[48px] h-[48px]"
                />
              </div>
            </Box>
          </Center>
        </Container>
      </BackgroundImage>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
