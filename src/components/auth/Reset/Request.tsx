"use client";

import TextBox from "@/components/ui/TextBox";
import { Anchor, Button, Card, Text } from "@mantine/core";
import Link from "next/link";

const ResetRequest = () => {
  return (
    <>
      <Card.Section inheritPadding withBorder py="xs">
        <Text size="xl" ta="center">
          Forget Password
        </Text>
      </Card.Section>
      <Card.Section inheritPadding withBorder py="xs">
        <form className="flex flex-col gap-2">
          <TextBox label="Email" />
          <Button
            size="xs"
            mt="xs"
            c="white"
            type="submit"
            component={Link}
            href="/reset/verify"
          >
            Reset
          </Button>

          <Text ta="center" my="sm" size="sm" c="dimmed">
            Go to{" "}
            <Anchor component={Link} href="/login">
              Login
            </Anchor>
          </Text>
        </form>
      </Card.Section>
    </>
  );
};

export default ResetRequest;
