import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import GradientCheckbox from "../components/GradientCheckbox";

export default {
  title: "Components/GradientCheckbox",
  component: GradientCheckbox,
  argTypes: {
    label: { control: "text" },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: Story<React.ComponentProps<typeof GradientCheckbox>> = (
  args,
) => {
  const [checked, setChecked] = useState(args.checked || false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (args.onChange) {
      args.onChange(event);
    }
  };

  return (
    <GradientCheckbox {...args} checked={checked} onChange={handleChange} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox básico",
  checked: false,
  error: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checkbox marcado",
  checked: true,
};

export const Error = Template.bind({});
Error.args = {
  label: "Checkbox con error",
  checked: false,
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Checkbox deshabilitado",
  checked: false,
  disabled: true,
};