import { Icon } from "@iconify/react/dist/iconify.js";
import {
  ActionIcon,
  Avatar,
  Box,
  Flex,
  Group,
  Menu,
  Text,
} from "@mantine/core";
import Link from "next/link";

const AppBar: React.FC<{ onOpen: () => void }> = ({ onOpen }) => {
  return (
    <Box h="100%" w="100%">
      <Flex align="center" justify="space-between" h="100%" w="100%" px="lg">
        <ActionIcon variant="default" hiddenFrom="md" onClick={onOpen}>
          <Icon icon="material-symbols:menu-rounded" fontSize={22} />
        </ActionIcon>

        <Menu shadow="md" withArrow position="bottom-end" trigger="hover">
          <Menu.Target>
            <Group className="cursor-pointer" ml="auto">
              <Avatar radius="xs" />
              <Box>
                <Text size="sm">John Doe</Text>
                <Text size="xs">john@doe.com</Text>
              </Box>
            </Group>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Account</Menu.Label>
            <Menu.Item
              leftSection={<Icon icon="material-symbols:settings" />}
              component={Link}
              href="/settings/basic"
            >
              Settings
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
              color="pink"
              leftSection={<Icon icon="material-symbols:logout-rounded" />}
              component={Link}
              href="/login"
            >
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </Box>
  );
};

export default AppBar;
