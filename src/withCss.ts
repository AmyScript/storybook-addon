import type { DecoratorFunction } from "@storybook/addons";
import { useEffect } from "@storybook/addons";
import { getCss } from "./getCss";

export const withCss: DecoratorFunction = (StoryFn, context) => {

  useEffect(() => {
    document.querySelector('#root').addEventListener('click', getCss);
    return () => document.querySelector('#root').removeEventListener('click', getCss);
  }, [context.id]);

  return StoryFn();
};




