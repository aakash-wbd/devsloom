import { images } from "@/constants/images";
import { Anchor, Flex, Image, Text, useMantineTheme } from "@mantine/core";
import Link from "next/link";

type IProps = {
  src?: string;
  href?: string;
  text?: string;
};

const AppLogo: React.FC<IProps> = ({
  src = images.animatedLogo.src,
  href = "/",
  text = "devsloom",
}) => {
  const theme = useMantineTheme();

  return (
    <Anchor component={Link} href={href} underline="never">
      <Flex>
        <Image src={src} w={45} h={45} alt={`${text}_logo`} />
        <Text
          c="primary"
          size="xl"
          fz={26}
          fw={900}
          style={{ fontFamily: theme.headings.fontFamily }}
        >
          {text}
        </Text>
      </Flex>
    </Anchor>
  );
};

export default AppLogo;
