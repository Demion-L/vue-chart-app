<template>
  <v-app>
    <MainNavbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MainNavbar from "@/components/MainNavbar";
export default {
  name: "App",
  components: { MainNavbar },
};
</script>
