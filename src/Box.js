import React from 'react';
import PropTypes from 'prop-types';
import { getBoxHeight, getBoxMargin } from 'rhythm-fns';

import clearProps from './clearProps';


function calcMarginTop(props) {
  return getBoxMargin(props.baseFontSize, props.baseLineRatio, props.height, props.marginTop);
}

function calcMarginBottom(props) {
  return getBoxMargin(props.baseFontSize, props.baseLineRatio, props.height, props.marginBottom);
}

const Box = props => React.createElement(props.as, Object.assign(clearProps(props), {
  style: {
    height: getBoxHeight(props.baseFontSize, props.baseLineRatio, props.height),
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
