import AppLogo from "@/components/ui/AppLogo";
import { Box, NavLink } from "@mantine/core";
import Link from "next/link";

type NavItem = {
  label: string;
  path: string;
  icon?: string;
  children?: NavItem[];
};

const data: NavItem[] = [
  { label: "Dashboard", path: "/dashboard", icon: "", children: [] },
  {
    label: "Manage",
    path: "",
    icon: "",
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
    ],
  },
  { label: "Subscribers", path: "/subscribers", icon: "", children: [] },
  { label: "Query Contacts", path: "/query-contacts", icon: "", children: [] },
  {
    label: "App Settings",
    path: "",
    icon: "",
    children: [
      {
        label: "Basic",
        path: "/settings/basic",
        icon: "",
        children: [],
      },
      { label: "Pages", path: "/settings/pages", icon: "", children: [] },
      { label: "Socials", path: "/settings/socials", icon: "", children: [] },
    ],
  },
];

const SideBar = () => {
  return (
    <Box>
      <AppLogo />
      <Box my="xs">
        {data.map((item, i) =>
          !item.children?.length ? (
            <NavLink
              key={i}
              label={item.label}
              component={Link}
              href={item?.path}
            />
          ) : (
            <NavLink key={i} label={item.label} childrenOffset={28}>
              {item.children.map((sItem, sI) => (
                <NavLink
                  key={sI}
                  label={sItem.label}
                  component={Link}
                  href={sItem?.path}
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
