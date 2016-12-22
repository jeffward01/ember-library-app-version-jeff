import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  emailAddress: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  message: DS.attr('string')
});
