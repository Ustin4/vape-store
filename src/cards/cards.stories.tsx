import {Meta, StoryObj} from "@storybook/react";
import {Cards} from "./cards";
import {ThemeDecorator} from "../decorators/storybookDecorators";
// import {ThemeDecorator} from "../../decorators";

const meta = {
    component: Cards,
    decorators: [ThemeDecorator],
    tags: ["autodocs"],
    title: "Components/Cards",
} satisfies Meta<typeof Cards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        name: 'name',
        description: 'description',
        photo: 'any',
        price: 100
    },
    render: (args) => <Cards {...args} />,
};

export const Secondary: Story = {
    args: {
        name: 'name',
        description: 'description',
        photo: 'any',
        price: 100
    },
    render: (args) => <Cards {...args} />,
};