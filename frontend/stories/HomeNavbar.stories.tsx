import Home from "../components/Home";

export default {
  title: "Components/Home",
  component: Home,
  tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = () => <Home />;