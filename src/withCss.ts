import { DecoratorFunction, useGlobals } from "@storybook/addons";
import { addons } from "@storybook/addons";
import { useEffect } from "@storybook/addons";
import { getCss } from "./getCss";
import { EVENTS } from "./constants";

export const withCss: DecoratorFunction = (StoryFn, context) => {
  const [{ myAddon }] = useGlobals();

  useEffect(() => {
    const channel = addons.getChannel();
    channel.emit(EVENTS.CLEAR);
    if(myAddon){
    document.querySelector('#root').addEventListener('click', getCss);
    return () => document.querySelector('#root').removeEventListener('click', getCss);
    }
  }, [context.id, myAddon]);

  return StoryFn();
};




