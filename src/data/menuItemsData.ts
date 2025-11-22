import type { MenuItem } from "../types/types";
const menuItems: MenuItem[] = [
  {
    title: "Home",
    url: import.meta.env.BASE_URL,
    icon: "",
  },
  {
    title: "FAQ",
    url: import.meta.env.BASE_URL + "/faq",
    icon: "",
  },
  {
    title: "Blog",
    url: import.meta.env.BASE_URL + "/blog",
    icon: "",
  },
];

export default menuItems;
