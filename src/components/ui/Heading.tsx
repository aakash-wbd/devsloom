import { Box, Text, Title } from "@mantine/core";

const Heading: React.FC<{
  label?: string;
  text?: string;
  gradientText?: string;
}> = ({ label, text, gradientText }) => {
  return (
    <Box mb="lg">
      <Text ta="center" fz={16} fw={700} c="primary" className="uppercase">
        {label}
      </Text>
      <Title
        order={2}
        ta="center"
        maw={{ base: "100%", sm: "70%" }}
        fz={{ base: 24, sm: 48 }}
        mx="auto"
      >
        {text}{" "}
        <span className="bg-gradient-to-r from-[#FF8811] via-[#ED27FF] to-[#7F50FB] bg-clip-text text-transparent">
          {gradientText}
        </span>
      </Title>
    </Box>
  );
};

export default Heading;
