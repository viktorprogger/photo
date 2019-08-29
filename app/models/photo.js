import DS from 'ember-data';

const { Model } = DS;

export default Model.extend({
  src: DS.attr('string', { defaultValue: 'https://dummyimage.com/400x400/000/fff' }),
  is_best: DS.attr('boolean'),
  session_id: DS.attr('number'),
  session: DS.belongsTo('session'),
});
