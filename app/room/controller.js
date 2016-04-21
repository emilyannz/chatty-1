import Ember from 'ember';

export default Ember.Controller.extend({

  sendMessage(attrs) {
    const newMessage = this.store.createRecord(`message`, { content: attrs });

    newMessage.save()
    .then(() => {
      this.set(`newMessage`, ``);
    });
  },
});
