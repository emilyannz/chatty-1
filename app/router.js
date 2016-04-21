import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('public', {
    path: '/'
  }, function() {
    this.route('signup');
    this.route('login');
  });
  this.route('room');
});

export default Router;
