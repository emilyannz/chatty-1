import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  login(attrs) {
    const { email, password } = attrs;

    this.get(`session`).authenticate(`authenticator:application`, email, password)
    .then(() => {
      this.transitionToRoute(`room`);
    })
    .catch((err) => {
      alert(`There was an error registering this user: ${err.errors[0].detail}.`);
      console.log(err);
    });
  },
});
