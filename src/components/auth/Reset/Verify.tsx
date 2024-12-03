"use client";

import { Anchor, Button, Card, PinInput, Text } from "@mantine/core";
import Link from "next/link";

const ResetVerify = () => {
  return (
    <>
      <Card.Section inheritPadding withBorder py="xs">
        <Text size="xl" ta="center">
          Verify
        </Text>
      </Card.Section>
      <Card.Section inheritPadding withBorder py="xs">
        <form className="flex flex-col gap-2">
          <div className="flex justify-center">
            <PinInput size="xl" length={6} type="number" />
          </div>
          <Button
            size="xs"
            mt="xs"
            c="white"
            type="submit"
            component={Link}
            href="/reset/confirm"
          >
            Verify
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

export default ResetVerify;
