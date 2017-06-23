import PropTypes from 'prop-types';
import styled from 'styled-components';

import { roundLines } from './math';


function calcMarginTop(props) {
  return roundLines(props.baseLineRatio, props.baseFontSize, props.marginTop);
}

function calcMarginBottom(props) {
  return roundLines(props.baseLineRatio, props.baseFontSize, props.marginBottom);
}

const Line = styled.span`
  font-size: ${props => props.fontSize * props.baseFontSize}px;
  line-height: ${props => roundLines(props.baseLineRatio, props.baseFontSize, props.fontSize)}px;
  margin-top: ${calcMarginTop}px;
  margin-bottom: ${calcMarginBottom}px;
`;

Line.propTypes = {
  baseFontSize: PropTypes.number.isRequired,
  baseLineRatio: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  marginBottom: PropTypes.number.isRequired,
};

export default Line;
