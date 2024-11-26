import AppLogo from "@/components/ui/AppLogo";
import { images } from "@/constants/images";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Container,
  Drawer,
  Flex,
  Group,
  Image,
  Stack,
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
  return (
    <Anchor c="dark" component={Link} href={href} underline="never" size="lg">
      {label}
    </Anchor>
  );
};

const IdeaBtn = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <Button
      bg="black"
      radius="md"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
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
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Box className="w-full h-full bg-white/20 shadow-lg backdrop-blur-sm border border-white/30">
        <Container size="xl" h="100%">
          <Flex align="center" justify="space-between" h="100%">
            <AppLogo />
            <Group gap="xl" visibleFrom="sm">
              {data?.map((item, i) => (
                <NavLinks href={item?.path} label={item?.label} key={i} />
              ))}
            </Group>

            <Flex>
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
          </Flex>
        </Container>
      </Box>
      <Drawer opened={opened} onClose={close} title={<AppLogo />}>
        <Stack>
          {data?.map((item, i) => (
            <NavLinks href={item?.path} label={item?.label} key={i} />
          ))}
          <IdeaBtn />
        </Stack>
      </Drawer>
    </>
  );
};

export default AppBar;
