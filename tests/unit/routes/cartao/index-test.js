import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cartao/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cartao/index');
    assert.ok(route);
  });
});
