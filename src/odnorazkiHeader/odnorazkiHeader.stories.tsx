import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "../decorators/storybookDecorators";
import {OdnorazkiHeader} from "./odnorazkiHeader";

const meta = {
    component: OdnorazkiHeader,
    decorators: [ThemeDecorator],
    tags: [""],
    title: "Components/OdnorazkiHeader",
} satisfies Meta<typeof OdnorazkiHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: (args) => <OdnorazkiHeader {...args} />,
};

