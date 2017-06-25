import React from 'react';
import PropTypes from 'prop-types';
import { getLineHeight, getLineMargin } from 'rhythm-fns';

import clearProps from './clearProps';


function calcMarginTop(props) {
  return getLineMargin(props.baseFontSize, props.baseLineRatio, props.marginTop, props.border);
}

function calcMarginBottom(props) {
  return getLineMargin(props.baseFontSize, props.baseLineRatio, props.marginBottom, props.border);
}

const Line = props => React.createElement(props.as, Object.assign(clearProps(props), {
  style: {
    fontSize: props.fontSize * props.baseFontSize,
    lineHeight: getLineHeight(props.baseFontSize, props.baseLineRatio, props.fontSize),
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
  border: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Line.defaultProps = {
  as: 'span',
};

export default Line;
