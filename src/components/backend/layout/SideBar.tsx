import AppLogo from "@/components/ui/AppLogo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ActionIcon, Box, Group, NavLink } from "@mantine/core";
import Link from "next/link";

type NavItem = {
  label: string;
  path: string;
  icon?: string;
  children?: NavItem[];
};

const data: NavItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: "mage:dashboard",
    children: [],
  },
  {
    label: "Manage",
    path: "",
    icon: "hugeicons:folder-management",
    children: [
      {
        label: "Products",
        path: "/manage/products",
        icon: "",
        children: [],
      },
      { label: "Services", path: "/manage/services", icon: "", children: [] },
      { label: "Teams", path: "/manage/teams", icon: "", children: [] },
      { label: "Brands", path: "/manage/brands", icon: "", children: [] },
      { label: "Careers", path: "/manage/careers", icon: "", children: [] },
      { label: "Blogs", path: "/manage/blogs", icon: "", children: [] },
    ],
  },
  {
    label: "Subscribers",
    path: "/subscribers",
    icon: "quill:inbox-newsletter",
    children: [],
  },
  {
    label: "Query Contacts",
    path: "/query-contacts",
    icon: "streamline:collaborations-idea-solid",
    children: [],
  },
  {
    label: "App Settings",
    path: "",
    icon: "solar:settings-outline",
    children: [
      {
        label: "Basic",
        path: "/settings/basic",
        icon: "",
        children: [],
      },
      { label: "Pages", path: "/settings/pages", icon: "", children: [] },
      { label: "Socials", path: "/settings/socials", icon: "", children: [] },
      {
        label: "Mail Config",
        path: "/settings/mail-configuration",
        icon: "",
        children: [],
      },
    ],
  },
  {
    label: "Administration",
    path: "",
    icon: "material-symbols-light:admin-panel-settings-rounded",
    children: [
      {
        label: "Users",
        path: "/administration/users",
        icon: "",
        children: [],
      },
      {
        label: "Role and Permissions",
        path: "/administration/role-permissions",
        icon: "",
        children: [],
      },
    ],
  },
];

const SideBar: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <Box>
      <Group justify="space-between">
        <AppLogo />
        <ActionIcon variant="light" onClick={onClose} hiddenFrom="sm">
          <Icon icon="material-symbols:close-rounded" />
        </ActionIcon>
      </Group>
      <Box my="xs">
        {data.map((item, i) =>
          !item.children?.length ? (
            <NavLink
              key={i}
              label={item.label}
              component={Link}
              href={item?.path}
              onClick={onClose}
              leftSection={
                item.icon ? <Icon icon={item.icon} fontSize={22} /> : null
              }
            />
          ) : (
            <NavLink
              key={i}
              label={item.label}
              childrenOffset={28}
              leftSection={
                item.icon ? <Icon icon={item.icon} fontSize={22} /> : null
              }
            >
              {item.children.map((sItem, sI) => (
                <NavLink
                  key={sI}
                  label={sItem.label}
                  component={Link}
                  href={sItem?.path}
                  onClick={onClose}
                />
              ))}
            </NavLink>
          )
        )}
      </Box>
    </Box>
  );
};

export default SideBar;
