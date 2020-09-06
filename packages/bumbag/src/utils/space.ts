import _times from 'lodash/times';

export function generateSpaceScale({ length, prefix, unitPx }) {
  return _times(length + 1).reduce((scale, index) => {
    return {
      ...scale,
      [`${prefix}-${index}`]: `${unitPx * index}px`,
      [`-${prefix}-${index}`]: `-${unitPx * index}px`,
    };
  }, {});
}
