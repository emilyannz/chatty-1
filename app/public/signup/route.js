import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      email: ``,
      username: ``,
      password: ``,
    };
  },
});
