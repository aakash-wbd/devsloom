"use client";
import Heading from "@/components/ui/Heading";
import { images } from "@/constants/images";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Group,
  Image,
} from "@mantine/core";
import { useRef, useState } from "react";
import "./style.css";

type Product = {
  title: string;
  topic: string;
  description: string;
  image: string;
  details: {
    title: string;
    description: string;
  };
};

// Example products array (using your provided structure)
export const products: Product[] = [
  {
    title: "DESIGN SLIDER 1",
    topic: "Aerphone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: images.Product1.src,
    details: {
      title: "Aerphone GHTK",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    title: "DESIGN SLIDER 2",
    topic: "Aerphone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: images.Product2.src,
    details: {
      title: "Aerphone GHTK",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    title: "DESIGN SLIDER 3",
    topic: "Aerphone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: images.Product3.src,
    details: {
      title: "Aerphone GHTK",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    title: "DESIGN SLIDER 4",
    topic: "Aerphone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: images.Product4.src,
    details: {
      title: "Aerphone GHTK",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    title: "DESIGN SLIDER 5",
    topic: "Aerphone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: images.Product5.src,
    details: {
      title: "Aerphone GHTK",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    title: "DESIGN SLIDER 6",
    topic: "Aerphone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: images.Product6.src,
    details: {
      title: "Aerphone GHTK",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  },
];

const Products = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const showSlider = (type: "next" | "prev") => {
    if (!listRef.current || isAnimating) return;

    setIsAnimating(true);
    const items = listRef.current.querySelectorAll(".item");
    if (type === "next") {
      listRef.current.appendChild(items[0]);
      carouselRef.current?.classList.add("next");
    } else {
      listRef.current.prepend(items[items.length - 1]);
      carouselRef.current?.classList.add("prev");
    }

    setTimeout(() => {
      setIsAnimating(false);
      carouselRef.current?.classList.remove("next", "prev");
    }, 1000);
  };

  const handleSeeMore = () => {
    if (carouselRef.current) {
      carouselRef.current.classList.add("showDetail");
    }
  };

  const handleBack = () => {
    if (carouselRef.current) {
      carouselRef.current.classList.remove("showDetail");
    }
  };

  return (
    <>
      {/* <Box h="100vh">
        <Box pos="relative" h="100%" className="wrapper overflow-hidden">
          {products?.map((item, i) => (
            <Box
              key={i}
              pos="absolute"
              w={1140}
              maw="90%"
              h="100%"
              left="50%"
              className="list -translate-x-1/2"
            >
              <Box
                pos="absolute"
                left={0}
                w="70%"
                h="100%"
                className={`item [&:nth-child(n+${products.length})]:!opacity-0 [&:nth-child(2)]:z-10 [&:nth-child(2)]:translate-x-0`}
                style={{ transition: "left 0.5s, opacity 0.5s, width 0.5s" }}
              >
                <Image
                  src={item?.image}
                  className="img -translate-y-1/2"
                  w="50%"
                  pos="absolute"
                  right={0}
                  top="50%"
                  style={{ transition: "right 1.5s" }}
                />
                <Box
                  w={400}
                  pos="absolute"
                  top="50%"
                  style={{ transition: "opacity 0.5s" }}
                  className="introduce opacity-0 pointer-none [&:nth-child(2)]:opacity-100 -translate-y-1/2"
                >
                  <Text>Our Product</Text>
                  <Text>Multi-Vendor E-Commerce</Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                    harum corrupti veniam eum odit impedit?
                  </Text>
                  <Button>See More</Button>
                </Box>
                <Box className="details">
                  <Text>Multi-Vendor E-Commerce</Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                    harum corrupti veniam eum odit impedit?
                  </Text>
                  <Group>
                    <Button>Visit</Button>
                    <Button>Buy Now</Button>
                  </Group>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box> */}

      <Container size="xl">
        <Heading
          label="Our Products"
          text="Discover innovation, quality, and "
          gradientText="excellence in our products!"
        />
      </Container>

      <Box
        pos="relative"
        h="100vh"
        className="carousel overflow-hidden"
        ref={carouselRef}
      >
        <Box className="list" ref={listRef}>
          {products?.map((item, i) => (
            <Box className="item" key={i}>
              <Image src={item.image} alt={item.title} />
              <Box className="introduce">
                <div className="title">DESIGN SLIDER</div>
                <div className="topic">{item.title}</div>
                <div className="des">{item.description}</div>
                <Button
                  variant="light"
                  className="seeMore mt-4"
                  onClick={handleSeeMore}
                >
                  SEE MORE
                </Button>
              </Box>

              <div className="detail">
                <div className="title">{item.details.title}</div>
                <div className="des">{item.details.description}</div>

                <div className="checkout mt-4">
                  <Group justify="end">
                    <Button size="xs" variant="outline" onClick={handleBack}>
                      SEE ALL
                    </Button>
                    <Button size="xs">Buy Now</Button>
                  </Group>
                </div>
              </div>
            </Box>
          ))}
        </Box>

        {!isAnimating && (
          <>
            <Box
              onClick={() => showSlider("prev")}
              pos="absolute"
              left={20}
              top="50%"
              className="!-translate-y-1/2"
            >
              <ActionIcon variant="light">
                <Icon icon="bxs:left-arrow" />
              </ActionIcon>
            </Box>
            <Box
              onClick={() => showSlider("next")}
              pos="absolute"
              right={20}
              top="50%"
              className="!-translate-y-1/2"
            >
              <ActionIcon variant="light">
                <Icon icon="bxs:right-arrow" />
              </ActionIcon>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Products;
