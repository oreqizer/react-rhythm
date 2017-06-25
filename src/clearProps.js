const remove = [
  'as',
  'baseFontSize',
  'baseLineRatio',
  'height',
  'fontSize',
  'marginTop',
  'marginBottom',
  'border',
  'children',
];

function clearProps(props) {
  return Object
    .keys(props)
    .reduce((acc, next) => {
      if (remove.includes(next)) {
        return acc;
      }

      return Object.assign(acc, {
        [next]: props[next],
      });
    }, {});
}

export default clearProps;
