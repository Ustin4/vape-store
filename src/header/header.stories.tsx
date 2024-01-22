import {Meta, StoryObj} from "@storybook/react";
import {Header} from "./header";
import {BrowserRouterDecorator, ThemeDecorator} from "../decorators/storybookDecorators";


const meta = {
    component: Header,
    decorators: [ThemeDecorator,BrowserRouterDecorator],
    tags: ["autodocs"],
    title: "Components/Header",
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: (args) => <Header {...args} />,
};

