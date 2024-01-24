import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "../decorators/storybookDecorators";
import {Offer} from "./offer";


const meta = {
    component: Offer,
    decorators: [ThemeDecorator],
    tags: [""],
    title: "Components/offer",
} satisfies Meta<typeof Offer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        name:'Бокс мод Lost Vape Centaurus\n' +
            'Q200',
        price:159,
        description:'Lost Vape Centaurus Q200 полная копия ' +
            'своего старшего брата Centaurus DNA250c, за исключением начинки,' +
            ' которую он перенял у другого бокс мода.'
    },
    render: (args) => <Offer {...args} />,
};

