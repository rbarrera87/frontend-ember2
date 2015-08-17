import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://blog-post-heroku.herokuapp.com',
  namespace: 'api'
});
