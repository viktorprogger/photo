import { computed } from '@ember/object';
import DS from 'ember-data';

const { Model } = DS;

export default Model.extend({
    name: DS.attr('string'),
    city: DS.attr('string'),
    site: DS.attr('string'),
    avatar: DS.attr('string', {defaultValue: 'https://dummyimage.com/100x100/fff/000'}),
    yearStart: DS.attr('number'),
    portfolio: DS.hasMany('portfolio'),
    experience: computed('yearStart', function() {
        return new Date().getFullYear() - this.yearStart;
    }),
});
