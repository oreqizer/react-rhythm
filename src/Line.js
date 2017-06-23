import React from 'react';
import PropTypes from 'prop-types';

import { roundLines } from './math';
import clearProps from './clearProps';


function calcMarginTop(props) {
  return roundLines(props.baseLineRatio, props.baseFontSize, props.marginTop);
}

function calcMarginBottom(props) {
  return roundLines(props.baseLineRatio, props.baseFontSize, props.marginBottom);
}

const Line = props => React.createElement(props.as, Object.assign(clearProps(props), {
  style: {
    fontSize: props.fontSize * props.baseFontSize,
    lineHeight: roundLines(props.baseLineRatio, props.baseFontSize, props.fontSize),
    marginTop: calcMarginTop(props),
    marginBottom: calcMarginBottom(props),
  },
}), props.children);

Line.propTypes = {
  as: PropTypes.string.isRequired,
  baseFontSize: PropTypes.number.isRequired,
  baseLineRatio: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  marginBottom: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Line.defaultProps = {
  as: 'span',
};

export default Line;
