import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import Line from '../Line';


test('Line', (t) => {
  const wrapper = shallow(React.createElement(Line, {
    baseFontSize: 16,
    baseLineRatio: 1.5,
    fontSize: 1.75,
    marginTop: 1,
    marginBottom: 2,
  }));

  t.deepEqual(wrapper.prop('style'), {
    fontSize: 28,
    lineHeight: 48,
    marginTop: 24,
    marginBottom: 48,
  }, 'style - no border');

  const wrapperBorder = shallow(React.createElement(Line, {
    baseFontSize: 16,
    baseLineRatio: 1.5,
    fontSize: 1.75,
    marginTop: 1,
    marginBottom: 2,
    border: 2,
  }));

  t.deepEqual(wrapperBorder.prop('style'), {
    fontSize: 28,
    lineHeight: 48,
    marginTop: 22,
    marginBottom: 46,
  }, 'style - border');

  const wrapperAnchor = shallow(React.createElement(Line, {
    as: 'a',
    baseFontSize: 16,
    baseLineRatio: 1.5,
    fontSize: 1.75,
    marginTop: 0,
    marginBottom: 0,
  }));

  t.ok(wrapperAnchor.find('a').exists(), 'as element');
  t.end();
});
