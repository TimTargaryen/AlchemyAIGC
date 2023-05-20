<template>
  <v-row class="d-flex justify-center align-center fill-height" style="min-height: 100vh">
    <v-col cols="12" md="6">
      <v-card class="py-6">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">
            Login
          </div>
        </v-card-title>
        <v-card-text>
          <v-text-field
              label="Email"
              outlined
              v-model="email"
          ></v-text-field>
          <v-text-field
              label="Password"
              outlined
              type="password"
              v-model="password"
          ></v-text-field>
          <div class="text-right">
            <v-btn color="primary" @click="login">
              Login
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      userList: [
        { email: "tim", password: "2002" },
        { email: "alex", password: "2003" },
      ],
    };
  },
  methods: {
    inject: ['Ustate'],
    login() {
      const matchedUser = this.userList.find(
          (user) => user.email === this.email && user.password === this.password
      );

      if (matchedUser) {
        // 用户名和密码正确，跳转到用户界面
        this.$router.push("/user");
        this.Ustate = True;
      } else {
        // 用户名或密码错误，弹出提示框
        alert("Incorrect email or password");
      }
    },
  },
};
</script>
