"use client";

import TextBox from "@/components/ui/TextBox";
import { Button, Card, Text } from "@mantine/core";
import Link from "next/link";

const ResetConfirm = () => {
  return (
    <>
      <Card.Section inheritPadding withBorder py="xs">
        <Text size="xl" ta="center">
          Reset Password
        </Text>
      </Card.Section>
      <Card.Section inheritPadding withBorder py="xs">
        <form className="flex flex-col gap-2">
          <TextBox secret label="New Password" />
          <TextBox secret label="Re-Type Password" />
          <Button
            size="xs"
            mt="xs"
            c="white"
            type="submit"
            component={Link}
            href="/login"
          >
            Confirm
          </Button>
        </form>
      </Card.Section>
    </>
  );
};

export default ResetConfirm;
