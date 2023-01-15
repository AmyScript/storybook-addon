import React from "react";
import { styled } from "@storybook/theming";
import {  Button } from "@storybook/components";

export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});



interface PanelContentProps {

}

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/code/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export const PanelContent: React.FC<PanelContentProps> = ({

}) => (
  <div>Text</div>
);
