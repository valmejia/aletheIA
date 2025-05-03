import NavBar from "../components/NavBar";

export default {
  title: "Components/NavBar",
  component: NavBar,

  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = () => <NavBar />;