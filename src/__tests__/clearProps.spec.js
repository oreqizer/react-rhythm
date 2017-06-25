import test from 'tape';

import clearProps from '../clearProps';


test('clearProps', (t) => {
  t.deepEqual(clearProps({ fontSize: 15 }), {}, 'forbidden prop');
  t.deepEqual(clearProps({ top: 'kek' }), { top: 'kek' }, 'good prop');
  t.deepEqual(clearProps({ top: 'kek', fontSize: 15 }), { top: 'kek' }, 'combination');
  t.end();
});
