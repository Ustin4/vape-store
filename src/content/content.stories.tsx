import {Meta, StoryObj} from "@storybook/react";
import {Content} from "./content";
import {ThemeDecorator} from "../decorators/storybookDecorators";


const meta = {
    component: Content,
    decorators: [ThemeDecorator],
    tags: ["autodocs"],
    title: "Components/Content",
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: (args) => <Content {...args} />,
};

