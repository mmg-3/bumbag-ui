const { _ATOM } = require('@stitches/react');

const resolveVal = (val) => {
  const { className, ...props } = val.props;
  const orderedAppliedStyles = [];
  // inject styles by calling to string on the atom
  const injectedClasses = className.toString();
  const classesAsArray = injectedClasses.split(' ').map((atomClass) => `.${atomClass}`);

  const mainSheetRules = window.document.styleSheets[1].cssRules;
  for (let index = 0; index < mainSheetRules.length; index++) {
    const rule = mainSheetRules[index];
    classesAsArray.forEach((atomClass) => {
      if (rule.selectorText.includes(atomClass)) {
        orderedAppliedStyles.push(rule.cssText);
      }
    });
  }

  return {
    orderedAppliedStyles,
    props: { ...props, className: injectedClasses },
    children: val.children,
  };
};

module.exports = {
  serialize(val, config, indentation, depth, refs, printer) {
    return JSON.stringify(resolveVal(val), null, 2);
  },

  test(val) {
    return val && val.props && val.props.className[_ATOM] && val.children && val.type;
  },
};
