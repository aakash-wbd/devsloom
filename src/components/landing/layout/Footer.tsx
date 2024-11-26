import AppLogo from "@/components/ui/AppLogo";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  ActionIcon,
  Anchor,
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  List,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";

const NavLinks: React.FC<{
  label: string;
  links?: {
    label: string;
    url: string;
    icon: string;
  }[];
  content?: React.ReactNode;
}> = ({ label = "", links = [], content }) => {
  return (
    <Box>
      <Text size="xl" mb="xs">
        {label}
      </Text>
      {links && links?.length ? (
        <List>
          {links?.map(({ url, label }, i) => (
            <List.Item key={i}>
              <Anchor
                href={url}
                underline="never"
                c="dimmed"
                className="hover:!text-[#8309fe]"
                size="sm"
              >
                {label}
              </Anchor>
            </List.Item>
          ))}
        </List>
      ) : (
        ""
      )}
      {content}
    </Box>
  );
};

const socials = [
  { title: "Facebook", icon: "logos:facebook", path: "" },
  { title: "Instagram", icon: "skill-icons:instagram", path: "" },
  { title: "YouTube", icon: "logos:youtube-icon", path: "" },
  { title: "LinkedIn", icon: "devicon:linkedin", path: "" },
];

const data = [
  { label: "Products", url: "", icon: "" },
  { label: "Products", url: "", icon: "" },
  { label: "Products", url: "", icon: "" },
  { label: "Products", url: "", icon: "" },
  { label: "Products", url: "", icon: "" },
];

const Footer = () => {
  return (
    <Box>
      <Container size="xl" mt="xl">
        <Grid>
          <Grid.Col span={{ base: 12, md: 12 / 5 }}>
            <AppLogo />
            <Text mb="xs" size="xs" c="dimmed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
              est!
            </Text>
            <Stack gap={2}>
              <Text size="xs" c="dimmed">
                <strong>Address:</strong> 1200 Bay st., Toronto
              </Text>
              <Text size="xs" c="dimmed">
                <strong>Phone:</strong> 01111111
              </Text>
              <Text size="xs" c="dimmed">
                <strong>Email:</strong> devsloom@hotmail.com
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 6, md: 12 / 5 }}>
            <NavLinks label="Site Map" links={data} />
          </Grid.Col>

          <Grid.Col span={{ base: 6, md: 12 / 5 }}>
            <NavLinks label="Site Map" links={data} />
          </Grid.Col>

          <Grid.Col span={{ base: 6, md: 12 / 5 }}>
            <NavLinks label="Site Map" links={data} />
          </Grid.Col>

          <Grid.Col span={{ base: 6, md: 12 / 5 }}>
            <NavLinks
              label="Follow Us"
              content={
                <Stack>
                  <Text size="xs" c="dimmed">
                    Cras fermentum odio eu feugiat lide par naso tierra videa
                    magna derita valies
                  </Text>

                  <Group gap={0}>
                    {socials?.map((item, i) => (
                      <Tooltip key={i} label={item?.title} position="top">
                        <ActionIcon
                          variant="subtle"
                          color="gray.5"
                          size="lg"
                          radius="sm"
                        >
                          <Icon icon={item?.icon} fontSize={20} />
                        </ActionIcon>
                      </Tooltip>
                    ))}
                  </Group>
                </Stack>
              }
            />
          </Grid.Col>
        </Grid>
      </Container>

      <footer className="relative h-80 overflow-hidden">
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </footer>

      <Container size="xl">
        <Grid pb="xs">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text ta={{ base: "center", lg: "start" }} c="dimmed" size="sm">
              &copy; all rights has been reserved by devsloom
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Flex gap="xs" justify={{ base: "center", lg: "end" }}>
              <Anchor size="sm" c="dimmed" underline="never">
                Terms & Conditions
              </Anchor>
              <Divider orientation="vertical" />
              <Anchor size="sm" c="dimmed" underline="never">
                Privacy Policy
              </Anchor>
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
