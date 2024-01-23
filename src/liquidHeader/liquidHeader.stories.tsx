import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "../decorators/storybookDecorators";
import {LiquidHeader} from "./liquidHeader";
import img from '../assert/967767 1.png'

const meta = {
    component: LiquidHeader,
    decorators: [ThemeDecorator],
    tags: [""],
    title: "Components/LiquidHeader",
} satisfies Meta<typeof LiquidHeader>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    render: (args) => <LiquidHeader {...args} />,
};