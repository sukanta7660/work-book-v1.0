<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="6">
        <v-card class="elevation-1">
          <v-toolbar dark color="info">
            <v-toolbar-title
              >{{
                isRegister ? stateObj.register.name : stateObj.login.name
              }}
              form</v-toolbar-title
            >
          </v-toolbar>
          <v-card-text>
            <form
              ref="form"
              @submit.prevent="isRegister ? register() : login()"
            >
              <v-text-field
                v-model="username"
                name="username"
                label="Username"
                type="text"
                placeholder="username"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                name="password"
                label="Password"
                type="password"
                placeholder="password"
                required
              ></v-text-field>

              <v-text-field
                v-if="isRegister"
                v-model="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="confirm password"
                required
              ></v-text-field>
              <div class="red--text">{{ errorMessage }}</div>
              <v-btn type="submit" class="mt-4" color="info" value="log in">{{
                isRegister ? stateObj.register.name : stateObj.login.name
              }}</v-btn>
              <div
                class="grey--text mt-4"
                v-on:click="isRegister = !isRegister"
              >
                {{ toggleMessage }}
              </div>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RegisterComp',
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      isRegister: false,
      errorMessage: '',
      stateObj: {
        register: {
          name: 'Register',
          message: 'Already have an Account? login.',
        },
        login: {
          name: 'Login',
          message: 'Register',
        },
      },
    };
  },
  methods: {
    login() {
      const { username } = this;
      console.log(username + 'logged in');
    },
    register() {
      if (this.password == this.confirmPassword) {
        this.isRegister = false;
        this.errorMessage = '';
        this.$refs.form.reset();
      } else {
        this.errorMessage = 'password did not match';
      }
    },
  },
  computed: {
    toggleMessage: function () {
      return this.isRegister
        ? this.stateObj.register.message
        : this.stateObj.login.message;
    },
  },
};
</script>
