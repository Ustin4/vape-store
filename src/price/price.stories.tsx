import {Meta, StoryObj} from "@storybook/react";
import {Price} from "./price";
import {ThemeDecorator} from "../decorators/storybookDecorators";


const meta = {
    component: Price,
    decorators: [ThemeDecorator],
    tags: ["autodocs"],
    title: "Components/Price",
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        price: 100
    },
    render: (args) => <Price {...args} />,
};

