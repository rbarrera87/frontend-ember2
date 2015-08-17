import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['name'],
  title: '',
  body: '',
  postC: {
    title: 'Que onda',
    body: 'Si sirve!!'
  }
});
