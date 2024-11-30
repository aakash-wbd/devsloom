import AppLogo from "@/components/ui/AppLogo";
import { images } from "@/constants/images";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Drawer,
  Flex,
  Grid,
  Image,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const data = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products" },
  { label: "Career", path: "/career" },
  { label: "About", path: "/about" },
];

const NavLinks: React.FC<{ href: string; label: string; active: boolean }> = ({
  href = "",
  label = "",
  active = false,
}) => {
  return (
    <Anchor
      c={active ? "primary" : "dark"}
      component={Link}
      href={href}
      underline="never"
      size="lg"
      fw={500}
      fz={18}
    >
      {label}
    </Anchor>
  );
};

const IdeaBtn = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <Button
      bg="black"
      c="white"
      radius="sm"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      component={Link}
      variant="light"
      href="/#contact"
      w="100%"
      leftSection={
        <Image
          src={!isHover ? images.bulbOff.src : images.bulbOn.src}
          w={20}
          h={20}
          alt="icon"
        />
      }
    >
      I Have an Idea
    </Button>
  );
};

const AppBar = () => {
  const pathname = usePathname();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Box
        w="100%"
        h="100%"
        className="bg-white/20 shadow-md backdrop-blur-sm border border-white/30"
      >
        <Center h="100%">
          <Container size="xl" w="100%">
            <Grid align="center">
              <Grid.Col span={{ base: 6, sm: 2 }}>
                <AppLogo />
              </Grid.Col>
              <Grid.Col span={8} visibleFrom="sm">
                <Flex
                  align="center"
                  justify="center"
                  gap={{ base: "md", lg: "xl" }}
                >
                  {data?.map((item, i) => (
                    <NavLinks
                      href={item?.path}
                      label={item?.label}
                      active={pathname === item?.path}
                      key={i}
                    />
                  ))}
                </Flex>
              </Grid.Col>
              <Grid.Col span={{ base: 6, sm: 2 }}>
                <Flex align="center" justify="end">
                  <Box visibleFrom="sm">
                    <IdeaBtn />
                  </Box>
                  <ActionIcon
                    size="lg"
                    variant="subtle"
                    hiddenFrom="sm"
                    radius="xl"
                    onClick={open}
                  >
                    <Icon icon="gg:menu-left" fontSize={22} />
                  </ActionIcon>
                </Flex>
              </Grid.Col>
            </Grid>
          </Container>
        </Center>
      </Box>
      <Drawer opened={opened} onClose={close} title={<AppLogo />}>
        <Stack>
          {data?.map((item, i) => (
            <NavLinks
              href={item?.path}
              label={item?.label}
              active={pathname === item?.path}
              key={i}
            />
          ))}
          <IdeaBtn />
        </Stack>
      </Drawer>
    </>
  );
};

export default AppBar;
