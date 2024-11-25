import { Box, Text, Timeline } from "@mantine/core";

const data: string[] = [
  "Upon receiving your request, we’ll promptly send you a confirmation email, letting you know we’re on it!",
  "Expect an email from our business development team within the next 1-2 business days to discuss your requirements and address any initial queries.",
  "Our business development team will present you with initial project estimations, ballpark figures, or our project recommendations within approximately 3-5 days.",
];

const Process = () => {
  return (
    <Box w="100%">
      <Text mb="xs" fz={18} fw={500}>
        What&apos;s Next
      </Text>
      <Timeline radius="sm" active={-1} lineWidth={1} bulletSize={20}>
        {data?.map((item, i) => (
          <Timeline.Item key={i} title={`Process ${i + 1}`}>
            <Text size="sm" c="dimmed">
              {item}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Box>
  );
};

export default Process;
