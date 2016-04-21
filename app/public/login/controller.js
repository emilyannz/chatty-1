import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  login(attrs) {
    const { email, password } = attrs;

    this.get(`session`).authenticate(`authenticator:application`, email, password)
    .then(() => {
      this.transitionToRoute(`public.main`);
    })
    .catch((reason) => {
      console.log(reason);
    });
  },
});
