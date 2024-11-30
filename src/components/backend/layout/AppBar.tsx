import { Avatar, Box, Flex, Group, Image, Menu, Text } from "@mantine/core";

const AppBar = () => {
  return (
    <Box h="100%" w="100%">
      <Flex align="center" justify="space-between" h="100%" w="100%" px="lg">
        <Image
          w={175}
          h={40}
          alt="logo"
          src="https://placehold.co/175x40?text=175x40"
          radius="xs"
        />

        <Menu shadow="md" withArrow position="bottom-end" trigger="hover">
          <Menu.Target>
            <Group className="cursor-pointer">
              <Avatar radius="xs" />
              <Box>
                <Text size="sm">John Doe</Text>
                <Text size="xs">john@doe.com</Text>
              </Box>
            </Group>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Account</Menu.Label>
            <Menu.Item>My Account</Menu.Item>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Item>Logout</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </Box>
  );
};

export default AppBar;
