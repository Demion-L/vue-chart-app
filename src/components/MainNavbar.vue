<template>
  <nav>
    <v-app-bar app color="green darken-4 accent-4" dense dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase blue--text text--lighten-5"
        ><span class="font-weight-light">smt</span
        ><span class="">info</span></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn class="mr-2" text to="/">Home</v-btn>
      <v-btn text to="/dashboard">Dashboard</v-btn>
      <v-btn text>
        <span>Sign Out</span>
        <v-icon right color="blue lighten-5"> mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app class="teal darken-2" v-model="drawer">
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
<style lang="scss"></style>
