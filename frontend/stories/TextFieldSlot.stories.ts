import TextFieldSlot from "../components/TextFieldSlot";

export default {
  title: "Components/TextFieldSlot",
  component: TextFieldSlot,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const StartAdornment = {
  args: {
    label: "Peso",
    placeholder: "Ingrese el peso",
    position: "start",
    adornment: "kg",
  },
};
export const EndAdornment = {
  args: {
    label: "Peso",
    placeholder: "Ingrese el peso",
    position: "end",
    adornment: "kg",
  },
};