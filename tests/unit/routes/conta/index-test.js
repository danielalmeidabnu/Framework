import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | conta/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:conta/index');
    assert.ok(route);
  });
});
