<template>
  <nav>
    <v-app-bar app color="green darken-4 accent-4" dense dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase primary--text"
        ><span class="font-weight-light">smt</span
        ><span class="">info</span></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn class="mr-2" text to="/">Home</v-btn>
      <v-btn text to="/dashboard">Dashboard</v-btn>
      <v-btn text>
        <span>Sign Out</span>
        <v-icon right color="primary"> mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app class="teal darken-2" v-model="drawer">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="primary" left>mdi-home-circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="primary--text">Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home-circle", text: "Home", route: "/" },
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/dashboard" },
        { icon: "mdi-exit-to-app", text: "Logout", route: "/logaut" },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
