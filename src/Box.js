import React from 'react';
import PropTypes from 'prop-types';

import { boxMargin, roundLines } from './math';
import clearProps from './clearProps';


function calcMarginTop(props) {
  const bonus = boxMargin(props.baseLineRatio, props.baseFontSize, props.height);

  return bonus + roundLines(props.baseLineRatio, props.baseFontSize, props.marginTop);
}

function calcMarginBottom(props) {
  const bonus = boxMargin(props.baseLineRatio, props.baseFontSize, props.height);

  return bonus + roundLines(props.baseLineRatio, props.baseFontSize, props.marginBottom);
}

const Box = props => React.createElement(props.as, Object.assign(clearProps(props), {
  style: {
    boxSizing: 'border-box',
    height: props.height * props.baseFontSize,
    marginTop: calcMarginTop(props),
    marginBottom: calcMarginBottom(props),
  },
}), props.children);

Box.propTypes = {
  as: PropTypes.string.isRequired,
  baseFontSize: PropTypes.number.isRequired,
  baseLineRatio: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  marginBottom: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Box.defaultProps = {
  as: 'div',
};

export default Box;
