import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import Box from '../Box';


test('Box', (t) => {
  const wrapper = shallow(React.createElement(Box, {
    baseFontSize: 16,
    baseLineRatio: 1.5,
    height: 1.5,
    marginTop: 1,
    marginBottom: 2,
  }));

  t.deepEqual(wrapper.prop('style'), {
    height: 36,
    marginTop: 30,
    marginBottom: 54,
  }, 'style');
  t.end();
});
