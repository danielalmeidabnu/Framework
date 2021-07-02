import EmberRouter from '@ember/routing/router';
import config from 'emberjs-tutorial/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('cartao', function() {
    this.route('novo');
  });
  this.route('conta', {path: '/conta/:conta_id'}, function() {});
  this.route('not-found', {path: '/*path'});
  this.route('emprestimo');
});
