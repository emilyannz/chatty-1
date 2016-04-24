import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Controller.extend({
  trigger() {
    this.get(`updateMessages`).perform();
  },

  updateMessages: task(function * () {
    while (true) {
      yield timeout(2000);
      console.log(`test`);
      this.store.findAll(`message`);
    }
  }),

  sendMessage(attrs) {
    const newMessage = this.store.createRecord(`message`, { content: attrs });
    this.trigger();

    newMessage.save()
    .then(() => {
      this.set(`newMessage`, ``);
    });
  },
});
