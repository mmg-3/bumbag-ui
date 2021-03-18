if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const css = `.bb-Box{margin: unset;padding: unset;border: unset;background: unset;font: unset;font-family: inherit;font-size: 100%;box-sizing: border-box;}.bb-Box:focus:not(:focus-visible) {outline: none;}`;
  let style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.insertBefore(style, document.getElementsByTagName('style')[0]);
}
