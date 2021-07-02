import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cartao/novo', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cartao/novo');
    assert.ok(route);
  });
});
