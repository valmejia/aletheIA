import HomeNavbar from "../components/HomeNavbar";

export default {
  title: "Components/HomeNavbar",
  component: HomeNavbar,
  tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = () => <HomeNavbar />;