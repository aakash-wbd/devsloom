import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Text,
  TextInput,
} from "@mantine/core";

const Newsletter = () => {
  return (
    <Box py={100}>
      <Container size="xl">
        <div className="w-full lg:w-[60%] h-96 mx-auto rounded-[32px] bg-white border relative before:absolute before:content-[''] before:w-full before:h-full before:bg-gray-100 before:shadow-sm before:backdrop-blur-[10px] before:border !before:border-[rgba(255,255,255,0.2)] before:rounded-[32px] before:-rotate-[5deg] before:z-[-1]">
          <Center h="100%">
            <Box ta="center">
              <Text fz={32} mb="xs">
                Join Our Newsletter
              </Text>
              <Text size="sm" mb="xl" w="60%" mx="auto" c="dimmed">
                Subscribe to our newsletter and receive the latest news about
                our products and services!
              </Text>
              <Flex mb="xs" justify="center">
                <TextInput
                  radius="sm"
                  className="[&_.mantine-Input-input]:!rounded-[32px] [&_.mantine-Input-input]:!rounded-r-none"
                  w={{ base: "auto", lg: 300 }}
                  placeholder="john@doe.com"
                />
                <Button radius="sm" className="!rounded-[32px] !rounded-l-none">
                  Subscribe
                </Button>
              </Flex>
            </Box>
          </Center>
        </div>
      </Container>
    </Box>
  );
};

export default Newsletter;
