import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Demo/Accordion',
  component: Accordion,
  subcomponents: {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  },
  parameters: {
    filePath: 'src/components/ui/accordion/accordion.stories.tsx',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>First item</AccordionTrigger>
        <AccordionContent>
          Only one item opens at once. This is the content of the first
          accordion item.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second item</AccordionTrigger>
        <AccordionContent>
          Here is the content of <b>the second accordion item</b>.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>First item</AccordionTrigger>
        <AccordionContent>
          Multiple items can be opened at the same time. This is the content of
          the first accordion item.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second item</AccordionTrigger>
        <AccordionContent>
          Here is the content of <b>the second accordion item</b>.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
