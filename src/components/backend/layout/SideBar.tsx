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
    label: "Manage Product",
    path: "",
    icon: "",
    children: [
      {
        label: "Categories",
        path: "/manage-products/categories",
        icon: "",
        children: [],
      },
      {
        label: "Products",
        path: "/manage-products/products",
        icon: "",
        children: [],
      },
    ],
  },
  { label: "Services", path: "/services", icon: "", children: [] },
];

const SideBar = () => {
  return (
    <Box>
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
  );
};

export default SideBar;
