"use client";
import {
  Anchor,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  NumberFormatter,
  Rating,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";

const data = [
  {
    title: "Content Writing",
    category: "marketing",
    image: "https://thecodude.com/demo/tf/moyna/images/portfolio/1.jpg",
  },
  {
    title: "Logo Sketching",
    category: "marketing",
    image: "https://thecodude.com/demo/tf/moyna/images/portfolio/2.jpg",
  },
  {
    title: "UI/UX",
    category: "development",
    image: "https://thecodude.com/demo/tf/moyna/images/portfolio/3.jpg",
  },
  {
    title: "Web Design",
    category: "development",
    image: "https://thecodude.com/demo/tf/moyna/images/portfolio/4.jpg",
  },
  {
    title: "Android App",
    category: "app",
    image: "https://thecodude.com/demo/tf/moyna/images/portfolio/5.jpg",
  },
  {
    title: "IOS App",
    category: "app",
    image: "https://thecodude.com/demo/tf/moyna/images/portfolio/6.jpg",
  },
];
const Product = () => {
  return (
    <Box py={100}>
      <Container size="xl">
        <Box mb="xl">
          <Image
            src="https://magesolution.com/wp-content/uploads/2022/07/ecommerce-website-design-examples-1024x768.jpg"
            alt="Image Description"
            w={400}
            h={400}
            mr="xl"
            mb="md"
            className="float-left"
            radius="md"
          />
          <Box>
            <Text size="xl" fz={32}>
              Multi-Vendor E-Commerce
            </Text>
            <Text size="sm" c="dimmed" mb="xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              eveniet.
            </Text>

            <Group mb="xs">
              <Rating value={3.5} fractions={2} readOnly />
              <Divider orientation="vertical" />
              <Text size="sm" c="dimmed">
                82 views
              </Text>
            </Group>
            <Text size="xl" fw={400} fz={40} c="primary">
              <NumberFormatter prefix="$" value={52} />
            </Text>

            <Group my="lg">
              <Button
                component="a"
                href="https://www.facebook.com"
                target="_blank"
                variant="outline"
                size="xs"
              >
                Visit
              </Button>
              <Button size="xs">Buy Now</Button>
            </Group>

            <Text size="sm" c="dimmed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil qui
              mollitia laboriosam aut magni alias eligendi animi, laborum, quo
              aliquid iure voluptas illum voluptatum officiis nulla vel. Placeat
              nesciunt veritatis dolor delectus quis! Sit maiores aliquam ipsa
              vitae illo dolorum! Laborum, quae est accusantium aspernatur atque
              dolor debitis quidem quasi expedita aperiam fugit similique quis,
              soluta at voluptatem assumenda maxime animi. Fuga voluptatem
              nesciunt soluta illum non rerum necessitatibus totam nostrum
              perspiciatis quibusdam adipisci saepe sapiente doloremque nobis
              illo ad itaque ducimus unde provident, dicta neque esse explicabo
              incidunt. Eligendi dolorem molestias expedita nulla quidem porro
              vero nam dolores sint saepe. Commodi mollitia facere, corrupti sit
              dolore fugiat repudiandae nam tempore voluptatem repellendus
              laborum magnam porro quod perspiciatis animi maxime optio dolorem!
              Quam, beatae! Corporis, commodi. Saepe sapiente debitis quas
              aperiam maxime quos. Quos recusandae odit exercitationem sed
              perspiciatis, quasi laborum voluptas sapiente quod, expedita,
              voluptate ut. Facere consectetur ex illo molestias? Placeat ut
              unde porro laborum architecto numquam, at inventore itaque
              officiis alias exercitationem aspernatur facere repellat magni
              quaerat commodi odit earum. Quis natus eaque optio esse soluta,
              mollitia eligendi error illum numquam saepe. Cumque nesciunt non
              aliquid sed vitae quis dignissimos voluptatem cupiditate est
              facere dolorem vero, eius accusamus, vel quod quas molestias magni
              ducimus odit enim esse. Laudantium a quis quos praesentium ex
              nobis quibusdam eum corrupti culpa beatae? Culpa maiores accusamus
              excepturi natus odit molestiae aspernatur eius tenetur ipsa totam
              modi ab, qui quasi nam amet voluptate dicta itaque temporibus at
              laborum nobis. Recusandae alias perspiciatis aliquam enim!
              Perspiciatis voluptas rem aliquid deleniti aperiam id natus
              assumenda, eligendi excepturi nam quasi eum numquam porro
              aspernatur fugiat exercitationem impedit similique. Error
              blanditiis eligendi iste voluptatibus, sit nihil labore
              voluptates, autem commodi odio minus minima optio, quasi
              consequatur nulla nobis quo ratione officia eaque. Nihil deserunt
              id aperiam assumenda. Consequatur molestias deserunt veniam
              maiores officiis voluptatum, sint dolores amet totam. Itaque
              dolores tenetur commodi reiciendis inventore labore omnis ratione
              officia, dolor accusantium perferendis veritatis aliquid debitis
              minima nesciunt eos repudiandae perspiciatis quo, incidunt
              facilis! Quis animi quam provident placeat maxime, iste
              consequuntur nihil in minima non, suscipit omnis laudantium
              corrupti voluptates autem. Ducimus asperiores porro culpa eveniet
              expedita blanditiis veniam sed aliquam, corporis pariatur magni
              quia, error quae tenetur dolorum odio sequi minima! Vel ipsam,
              quae deleniti sequi itaque impedit adipisci saepe, ducimus
              molestiae dolore, obcaecati aut libero earum voluptates at! Est
              molestiae asperiores, animi adipisci placeat necessitatibus!
            </Text>
          </Box>
        </Box>

        <Grid>
          <Grid.Col span={12}>
            <Text size="xl">Related </Text>
          </Grid.Col>
          {data.map((item, i) => (
            <Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={i}>
              <Anchor component={Link} href={`/products/${i}`}>
                <Box
                  data-aos="fade-up"
                  w="100%"
                  h={300}
                  className="relative group rounded-md overflow-hidden transition-all duration-300 cursor-pointer"
                >
                  <Image src={item.image} alt={item.title} w="100%" h="100%" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm opacity-0 transform scale-95 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100">
                    <Title
                      c="white"
                      size="xl"
                      order={1}
                      fw={500}
                      className="transform translate-y-5 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      {item.title}
                    </Title>
                    <Text
                      size="xl"
                      c="dimmed"
                      fw={500}
                      className="transform translate-y-5 opacity-0 transition-all duration-500 delay-200 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      {item.category}
                    </Text>
                  </div>
                </Box>
              </Anchor>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Product;
