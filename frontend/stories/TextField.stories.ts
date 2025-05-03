import textField from "../components/TextField";

export default {
  title: "Components/TextField",
  component: textField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = {
  args: {
    label: "Label",
    helperText: "This is some helper text",
  },
};

export const ErrorState = {
  args: {
    label: "Your Label",
    helperText: "Error: Invalid input",
    error: true,
  },
};

export const Password = {
  args: {
    label: "Password",
    helperText: "Please enter a password",
    type: "password",
    autoComplete: "current-password",
  },
};
export const PasswordError = {
  args: {
    label: "Password",
    helperText: "Please enter a valid password",
    type: "password",
    error: true,
    autoComplete: "current-password",
  },
};

export const Small = {
  args: {
    label: "Label",
    helperText: "This is some helper text",
    size: "small",
  },
};

export const Normal = {
  args: {
    label: "Label",
    helperText: "This is some helper text",
    size: "normal",
  },
};