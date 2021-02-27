<template>



    <ValidationObserver ref="observer" v-slot="{ handleSubmit, invalid }">
      <b-alert
      :show="form_state.success"
      variant="dark"
      @dismissed="alerts.dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
        Message sent. Thank you!
    </b-alert>

      <b-alert
      :show="form_state.error"
      variant="dark"

    >
        An error occured. Please try again.
    </b-alert>

        <b-form @submit.prevent="handleSubmit(onSubmit)" @reset="resetForm">
          <div class="row">
            <div class="col-md-6 mx-auto">

                  <BTextInputWithValidation
                    rules="required"
                    name="Name"
                    vid="name"
                    type="text"
                    label="Name"
                    v-model="form.name"
                    placeholder="Let us know your name."
                  />
                  <input type="hidden" value="" name="gender">

                  <BTextInputWithValidation
                    rules="required|email"
                    type="email"
                    label="Email address:"
                    name="Email"
                    v-model="form.email"
                    placeholder="Your email address"
                  />

                  <BSelectWithValidation rules="required" label="Platform:" placeholder="Select a subject" v-model="form.platform">
                    <option value="script">Script Corner</option>
                    <option value="rought_cut">Rought Cut Corner</option>
                  </BSelectWithValidation>

            </div>

            <div class="col-md-6 mx-auto">
                <MessageInput
                rules="required"
                name="Message"
                vid="message"
                type="text"
                label="Message"
                v-model="form.message"
                placeholder="Message"
                rows="8"
                />
            </div>
        </div>

        <div class="row justify-content-md-center">
          <div class="col-4">
            <b-button block type="submit" :disabled="invalid" class="pb-2" variant="outline-light">
              <b-spinner small v-if="form_state.loading"></b-spinner>
             Send
            </b-button>
          </div>
        </div>
      </b-form>
    </ValidationObserver>
</template>

<script>
import { ValidationObserver, extend } from "vee-validate";
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';
//import { required, email } from 'vee-validate/dist/rules';
import BTextInputWithValidation from "~/components/input/BTextInputWithValidation";
import BSelectWithValidation from "~/components/input/BSelectWithValidation";
import MessageInput from "~/components/input/MessageInput";
import axios from 'axios'


Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

export default {
  name: "Contactform",
  components: {
    ValidationObserver,
    BTextInputWithValidation,
    BSelectWithValidation,
    MessageInput
  },
  data: () => ({
    form: {
      email: "",
      name: "",
      message: "",
      platform: "",
      gender: ""
    },
    form_state: {
      success: false,
      error: false,
      loading: false,
    },
    alerts: {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  }),
  /* watch: {
    subject(val) {

    }
  }, */
  methods: {
    countDownChanged(dismissCountDown) {
      console.log('dismissCountDown: ', dismissCountDown);
      this.alerts.dismissCountDown = dismissCountDown
    },
    showAlert() {
      console.log('this.dismissSecs: ', this.alerts.dismissSecs);
      this.alerts.dismissCountDown = this.alerts.dismissSecs
    },
    onSubmit(e) {
          this.form_state.loading = true;
          this.form_state.success = false;
          this.form_state.error = false;

          let vm = this
          console.log('vm: ', vm);
          console.log('vm - parent: ', vm.$parent);

          axios
             .post(
                 "http://drimshortfestival.mk/m.php",
                 this.form,
                 {
                  'Content-Type': 'application/json',
                 }
             )
             .then(res => {
               console.log('res: ', res);
                 this.form_state.success = true;
                 this.form_state.error = false;

                  /* self,showAlert()
                  self.resetForm() */
             })
             .catch((error) => {
               //this,showAlert()
                  console.log('error: ', error);
                  this.form_state.error = true;
                  console.log(this.form_state.error)

              }).finally(() => {
                  this.form_state.loading =  false
              });
    },
    resetForm() {
      this.email = "";
      this.name = "";
      this.platform = "";
      this.message = "";
      this.gender = "";
      //this.form_state.success = false;
      //this.form_state.error = false;
      this.form_state.loading = false;
      console.log('Resetting');
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    }
  }
};
</script>
