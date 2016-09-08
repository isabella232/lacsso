import Ember from 'ember';

export default Ember.Controller.extend({
  modalService: Ember.inject.service('modal'),
  actions: {
    openModal: function(type) {
      this.get('modalService').toggleModal(type);
    },
  }
});
