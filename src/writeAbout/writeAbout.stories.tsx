import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "../decorators/storybookDecorators";
import {WriteAbout} from "./writeAbout";


const meta = {
    component:WriteAbout ,
    decorators: [ThemeDecorator],
    tags: [""],
    title: "Components/WriteAboutUS",
} satisfies Meta<typeof WriteAbout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: (args) => <WriteAbout {...args} />,
};

