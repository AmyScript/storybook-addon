import React from "react";
import { AddonPanel } from "@storybook/components";
import { useAddonState } from '@storybook/api';
import { PanelContent } from "./components/PanelContent";
import { useChannel } from '@storybook/api';
import { EVENTS, ADDON_ID } from "./constants";

interface PanelProps {
  active: boolean;
}
interface State {
  styles: Array<string>;
  classNames: Array<string>;
  elementId: string;
  elementType: string;
}

export const Panel: React.FC<PanelProps> = (props) => {
  const [state, setState] = useAddonState<State>(ADDON_ID);
  useChannel({
    [EVENTS.RESULT]: (result) => setState(result),
  });
  return (
    <AddonPanel {...props}>
      <PanelContent style={state && state.styles ? state.styles : []} />
    </AddonPanel>
  );
};
