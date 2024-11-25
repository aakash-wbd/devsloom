import { countries } from "@/constants/countries";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Button,
  Card,
  FileButton,
  Flex,
  Group,
  Select,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useState } from "react";

const Form = () => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <Card withBorder w="100%">
      <Text mb="xs" fz={18} fw={500}>
        Let's Work Together
      </Text>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TextInput variant="filled" placeholder="Name" withAsterisk />
        <TextInput variant="filled" placeholder="Email" withAsterisk />
        <TextInput variant="filled" placeholder="Company Name" withAsterisk />

        <Flex>
          <Select
            rightSectionWidth={20}
            className="[&_.mantine-Input-input]:!rounded-r-none"
            variant="filled"
            withAsterisk
            data={countries?.map((item) => ({
              label: `${item.code}(${item.phone})`,
              value: item.phone,
              flag: item.code,
            }))}
            value={"971"}
            comboboxProps={{ width: 200, position: "bottom-start" }}
            renderOption={({ option, checked }) => {
              const country = countries.find(
                (country) => country.phone === option.value
              );
              return (
                <Group gap="xs">
                  {country && (
                    <img
                      src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                      alt={`${country.label} flag`}
                      style={{ width: 20, height: 15 }}
                    />
                  )}
                  <span>
                    {country?.label} ({country?.phone})
                  </span>
                </Group>
              );
            }}
            w={120}
          />
          <TextInput
            variant="filled"
            placeholder="Phone"
            w="100%"
            className="[&_.mantine-Input-input]:!rounded-l-none"
          />
        </Flex>

        <Select
          variant="filled"
          placeholder="Why are you contacting us?"
          data={["Web Design", "Web Development", "UI/UX Design"]}
        />
        <Select
          variant="filled"
          placeholder="Your Budget"
          data={["Web Design", "Web Development", "UI/UX Design"]}
        />
        <div className="col-span-full">
          <Textarea
            variant="filled"
            placeholder="Project Description"
            withAsterisk
            autosize
            minRows={6}
          />
        </div>
        <div className="col-span-full">
          <Group justify="space-between">
            <FileButton onChange={setFile} accept="image/png,image/jpeg">
              {(props) => (
                <Button
                  {...props}
                  variant="subtle"
                  size="xs"
                  color="gray"
                  leftSection={<Icon icon="iconoir:attachment" />}
                >
                  Attachments
                </Button>
              )}
            </FileButton>

            <Button size="xs" variant="light">
              Submit
            </Button>
          </Group>
        </div>
      </form>
    </Card>
  );
};

export default Form;
