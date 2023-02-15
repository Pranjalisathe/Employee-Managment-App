<template>
    <div id="visa">
        <div class="container">
            <div class="large-12 medium-12 ">

                <div style="margin: 20px;" class="col-sm-12 btn btn-info"> Email Validation in Vue.js </div>
                <form @submit.prevent="handleSubmission">
                    <div class="row form-group">
                        <div class="col-sm-4">
                            <label class="control-label col-sm-4" for="Mobilenumber"> <label for="email">Email
                                    Address:</label></label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text" v-model="email" required class="form-control"> <br>
                            <span v-if="msg.email" className="text-danger mrgnbtn">{{ msg.email }}</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            email: '',
            msg: [],
        }
    },
    watch: {
        email(value) {
            this.validateEmail(value);
        }
    },
    methods: {
        validateEmail(value) {
            //eslint-disable-next-line
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                this.msg['email'] = '';
            } else {
                this.msg['email'] = 'Invalid Email Address';
            }
        },

    }
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>