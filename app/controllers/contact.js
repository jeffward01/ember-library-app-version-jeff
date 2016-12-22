import Ember from 'ember';

export default Ember.Controller.extend({

    //Properties
    isDisabled: true,
    contactForm: {
    	emailAddress: "",
    	firstName: "",
    	phoneNumber: "",
    	message:""
    },
    validEmail: Ember.computed.match('contactForm.emailAddress', /^.+@.+\..+$/),
    
      saveContactMessage() {
      const userInquery = this.get('contactForm');

      const newContactFormMessage = this.store.createRecord('contact-form', {
        firstName: userInquery.firstName,
        email: userInquery.emailAddress,
        phone: userInquery.phoneNumber,
        message: userInquery.message
      });

      newContactFormMessage.save().then((response) => {
        this.set('contactFormSubmittedMessage', `Thank you ${response.get('contactForm.firstName')}! We recieved your inquiry and will be reviewing it shortly!`);
        this.set('contactForm', '');
      });

    }

});
