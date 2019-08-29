import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr('string'),
  place: DS.attr('string'),
  photos: DS.hasMany('photo'),
});
