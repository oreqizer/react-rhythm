import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import Box from '../Box';


test('Box', (t) => {
  const wrapper = shallow(React.createElement(Box, {
    baseFontSize: 16,
    baseLineRatio: 1.5,
    height: 20,
    marginTop: 1,
    marginBottom: 2,
  }));

  console.log(wrapper.html());
  t.end();
});
