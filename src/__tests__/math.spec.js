import test from 'tape';

import * as fns from '../math';


test('#math', (t) => {
  t.equal(fns.boxMargin(1.5, 2), 0, 'box margin - larger');
  t.equal(fns.boxMargin(1.5, 0.5), 0.375, 'box margin - smaller');
  t.equal(fns.lineHeight(1.5, 2), 3, 'line height - larger');
  t.equal(fns.lineHeight(1.5, 1.125), 1.5, 'line height - larger');
  t.equal(fns.lineHeight(1.5, 0.5), 1.5, 'line height - larger');
  t.end();
});
