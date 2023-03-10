import { addons } from '@storybook/addons';
import { EVENTS } from './constants';
import { Styles } from './models';

export const getCss = (e: any) => {
  const channel = addons.getChannel();
  const styles: Styles = [];
  e.preventDefault();
  e.stopPropagation();
  const element = e.target as any;
  const elementType = element.localName;
  if (elementType) {
    const results = findCss(elementType);
    if (results) {
      styles.push(results);
    }
  }
  const elementId = `#${element.id}`;
  if (elementId) {
    const results = findCss(elementId);
    if (results) {
      styles.push(results);
    }
  }
  let elementClassNames = [];
  const elementClassNamesString = element.className;
  if (elementClassNamesString && typeof elementClassNamesString === 'string') {
    elementClassNames = element.className.split(' ');
    elementClassNames.forEach((className: string) => {
      const results = findCss(`.${className}`);
      if (results) {
        styles.push(results);
      }
    });
  }
  channel.emit(EVENTS.RESULT, { styles });
};

const findCss = (selector: string): string => {
  const styleSheets: StyleSheetList = document.styleSheets;
  for (const index in styleSheets) {
    let cssRules = styleSheets[index].cssRules;
    for (const rulesIndex in cssRules) {
      let cssRule = cssRules[rulesIndex] as CSSStyleRule;
      if (cssRule.selectorText === selector) {
        const cssText: string = addNewLines(cssRule.cssText);
        return cssText;
      }
    }
  }
  return null;
};

const addNewLines = (text: string) => {
  return text.replaceAll(';', ';\n').replaceAll('{', '{\n');
};
