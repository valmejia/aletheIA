import SignUp from "../user-ui/Pages/SignUp";

export default {
  title: "Components/SignUp",
  component: SignUp,

  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = () => <SignUp />;