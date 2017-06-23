import PropTypes from 'prop-types';
import styled from 'styled-components';

import { boxMargin, roundLines } from './math';


function calcMarginTop(props) {
  const bonus = boxMargin(props.baseLineRatio, props.baseFontSize, props.height);

  return bonus + roundLines(props.baseLineRatio, props.baseFontSize, props.marginTop);
}

function calcMarginBottom(props) {
  const bonus = boxMargin(props.baseLineRatio, props.baseFontSize, props.height);

  return bonus + roundLines(props.baseLineRatio, props.baseFontSize, props.marginBottom);
}

const Box = styled.div`
  box-sizing: border-box;
  height: ${props => props.height * props.baseFontSize}px;
  margin-top: ${calcMarginTop}px;
  margin-bottom: ${calcMarginBottom}px;
`;

Box.propTypes = {
  baseFontSize: PropTypes.number.isRequired,
  baseLineRatio: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  marginBottom: PropTypes.number.isRequired,
};

export default Box;
