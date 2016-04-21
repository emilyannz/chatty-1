import Ember from 'ember';

export default Ember.Controller.extend({
  signup(attrs) {
    const user = this.store.createRecord(`chatter`, attrs);

    if (attrs.password === attrs.password2) {
      user.save().then(() => {
        this.transitionToRoute(`room`);
      }).catch((err) => {
        alert(`There was an error registering this user: ${err.errors[0].detail}.`);
        console.log(err);
      });
    } else {
      alert(`Passwords do not match`);
    }
  },
});
