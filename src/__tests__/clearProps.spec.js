import test from 'tape';

import clearProps from '../clearProps';


test('clearProps', (t) => {
  t.equal(clearProps({ fontSize: 15 }), {}, 'forbidden prop');
  t.equal(clearProps({ top: 'kek' }), { top: 'kek' }, 'good prop');
  t.equal(clearProps({ top: 'kek', fontSize: 15 }), { top: 'kek' }, 'combination');
  t.end();
});
