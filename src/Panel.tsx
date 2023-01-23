import React from 'react';
import { AddonPanel } from '@storybook/components';
import { useAddonState } from '@storybook/api';
import { useChannel } from '@storybook/api';
import { EVENTS, ADDON_ID } from './constants';
import { PanelState } from './models';
import { PanelContent } from './components/PanelContent';

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = props => {
  const [state, setState] = useAddonState<PanelState>(ADDON_ID);
  useChannel({
    [EVENTS.RESULT]: result => setState(result),
    [EVENTS.CLEAR]: () => setState(undefined),
  });
  return (
    <AddonPanel {...props}>
      <PanelContent style={state && state.styles ? state.styles : []} />
    </AddonPanel>
  );
};
