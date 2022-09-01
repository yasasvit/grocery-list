<template>
    <div class = "auth-page">
        <amplify-authenticator />
    </div>
  </template>
  
  <script>
  import Auth from "@aws-amplify/auth";
import { AmplifyEventBus } from "aws-amplify-vue";
  export default {
    mounted() {
      AmplifyEventBus.$on("authState", eventInfo => {
        if (eventInfo === "signedIn") {
          this.$router.push({ name: "GroceryList" });
        } else if (eventInfo === "signedOut") {
          this.$router.push({ name: "Auth" });
        }
      });

      try {
        await Auth.currentAuthenticatedUser();
        this.$router.push({name: "Home"});
      } catch (error) {
        this.$router.push({name: "Auth"});   
      }

      if (Auth.currentAuthenticatedUser()) {
        this.$router.push({name: "Home"});
      } else {
        this.$router.push({name: "Auth"});   
      }
    }
  };
  </script>

  <style scoped>
  .auth-page {
    height: 100vh;
    padding-top: 10vh;
    background-color: azure;
  }
  </style>