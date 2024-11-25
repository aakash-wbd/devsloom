import { images } from "@/constants/images";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useState } from "react";

const data = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
];

const NavLinks: React.FC<{ href: string; label: string }> = ({
  href = "",
  label = "",
}) => {
  const theme = useMantineTheme();

  return (
    <Anchor c="dark" component={Link} href={href} underline="never" size="lg">
      {label}
    </Anchor>
  );
};

const AppBar = () => {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Box className="w-full h-full bg-white/20 shadow-lg backdrop-blur-sm border border-white/30">
      <Container size="xl" h="100%">
        <Flex align="center" justify="space-between" h="100%">
          <Anchor component={Link} href="/" underline="never">
            <Group>
              <Image
                src={images.animatedLogo.src}
                w={45}
                h={45}
                alt="DevsLoom_LOGO"
              />
              <Text
                c="primary"
                size="xl"
                fz={26}
                fw={900}
                style={{ fontFamily: theme.headings.fontFamily }}
              >
                devsloom
              </Text>
            </Group>
          </Anchor>

          <Group gap="xl" visibleFrom="md">
            {data?.map((item, i) => (
              <NavLinks href={item?.path} label={item?.label} key={i} />
            ))}
          </Group>

          <Group gap="xs">
            <ActionIcon
              size="lg"
              variant="subtle"
              hiddenFrom="md"
              radius="xl"
              onClick={open}
            >
              <Icon icon="gg:menu-left" fontSize={22} />
            </ActionIcon>

            <Button
              bg="black"
              radius="md"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              leftSection={
                <Icon
                  icon={isHover ? "fxemoji:lightbulb" : "carbon:idea"}
                  // style={{
                  //   transition: "all 0.3s ease",
                  // }}
                  fontSize={22}
                />
              }
            >
              I Have an Idea
            </Button>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
};

export default AppBar;
