import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list photographers', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /list-photographers', async function(assert) {
      await visit('/photographers');
      assert.equal(this.element.querySelectorAll('.photographer').length, 5, 'should be 5 photographers')
  });
});
