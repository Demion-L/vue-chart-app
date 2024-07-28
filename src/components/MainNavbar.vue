<template>
  <nav>
    <v-app-bar app color="green darken-4 accent-4" dense dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase primary--text"
        ><span class="font-weight-bold">starwars</span
        ><span class="font-weight-light">info</span></v-toolbar-title
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
      <v-list class="primary--text">
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon color="primary" left>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="primary--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
        {
          icon: "mdi-chart-box-multiple-outline",
          text: "ChartView",
          route: "/chartview",
        },
        { icon: "mdi-exit-to-app", text: "Logout", route: "/logaut" },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
