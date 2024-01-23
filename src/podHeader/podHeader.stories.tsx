import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "../decorators/storybookDecorators";
import {PodHeader} from "./podHeader";
import img from '../assert/967767 1.png'
const meta = {
    component: PodHeader,
    decorators: [ThemeDecorator],
    tags: [""],
    title: "Components/PODHeader",
} satisfies Meta<typeof PodHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
    render: (args) => <PodHeader {...args} />,
};

