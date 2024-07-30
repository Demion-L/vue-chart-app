<template>
  <nav>
    <v-app-bar app color="green darken-4 accent-4" dense dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase primary--text"
        ><span class="font-weight-bold">starwars</span
        ><span class="font-weight-light">info</span></v-toolbar-title
      >
      <v-spacer></v-spacer>

      <nav-button
        v-for="(button, index) in buttons"
        :key="index"
        v-bind="button"
      />
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
import { mapGetters } from "vuex";

import NavButton from "@/components/UI/NavButton.vue";

export default {
  name: "MainNavbar",
  components: {
    NavButton,
  },
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...mapGetters(["navLinks", "navButtons"]),
    links() {
      return this.navLinks;
    },
    buttons() {
      return this.navButtons.map((button) =>
        button.onClick === "signout"
          ? { ...button, onClick: this.signOut }
          : button
      );
    },
  },
  methods: {
    signOut() {
      console.log("Signing out");
    },
  },
};
</script>
<style lang="scss"></style>
