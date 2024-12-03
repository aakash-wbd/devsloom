"use client";

import { Anchor, Button, Card, Checkbox, Flex, Text } from "@mantine/core";
import Link from "next/link";
import TextBox from "../ui/TextBox";

const Login = () => {
  return (
    <>
      <Card.Section inheritPadding withBorder py="xs">
        <Text size="xl" ta="center">
          Log in
        </Text>
      </Card.Section>
      <Card.Section inheritPadding withBorder py="xs">
        <form className="flex flex-col gap-2">
          <TextBox label="Email" />
          <TextBox label="Password" secret />
          <Flex align="center" justify="space-between" mt="xs">
            <Checkbox label="Remember Me" />
            <Anchor
              ta="end"
              c="dimmed"
              component={Link}
              href="/reset/request"
              size="sm"
            >
              Forget Password
            </Anchor>
          </Flex>
          <Button
            size="xs"
            mt="xs"
            c="white"
            type="submit"
            component={Link}
            href="/dashboard"
          >
            Login
          </Button>
        </form>
      </Card.Section>
    </>
  );
};

export default Login;
