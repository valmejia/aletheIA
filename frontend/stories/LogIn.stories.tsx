import LogIn from "../user-ui/Pages/LogIn";

export default {
  title: "Components/LogIn",
  component: LogIn,
  tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = () => <LogIn />;