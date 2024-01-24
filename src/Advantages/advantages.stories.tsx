import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "../decorators/storybookDecorators";
import {Advantages} from "./advantages";


const meta = {
    component:Advantages ,
    decorators: [ThemeDecorator],
    tags: [""],
    title: "Components/AdvantagesText",
} satisfies Meta<typeof Advantages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
    render: (args) => <Advantages {...args} />,
};

