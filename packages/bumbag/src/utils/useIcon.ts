import { useTheme } from './useTheme';

export function useIcon({ icon: initialIcon, type }) {
  const { theme } = useTheme();
  // @ts-ignore
  const icon = theme?.Icon?.iconNames?.[initialIcon] ?? initialIcon;
  const icons = theme?.Icon?.icons ?? {};

  let iconInfo = icons[icon];
  if (type) {
    // @ts-ignore
    const parsedIcons = parseIcons([icon], { type });
    iconInfo = Object.entries(parsedIcons)[0][1];
  } else if (typeof icon === 'object') {
    iconInfo = icon;
  }
  const { viewBoxWidth = 0, viewBoxHeight = 0, paths = [] } = iconInfo || {};
  return {
    viewBoxHeight,
    viewBoxWidth,
    paths,
  };
}
