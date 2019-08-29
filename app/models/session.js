import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    title: DS.attr('string'),
    place: DS.attr('string'),
    date: DS.attr('date'),
    photos: DS.hasMany('photo'),
});
