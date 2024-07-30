export default {
  characters: [],
  currentPage: 1,
  totalPages: 1,
  loading: false,
  error: null,
  cache: {},
  selectedCharacters: [],
  navigation: {
    links: [
      { icon: "mdi-home-circle", text: "Home", route: "/" },
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/dashboard" },
      {
        icon: "mdi-chart-box-multiple-outline",
        text: "ChartView",
        route: "/chartview",
      },
      { icon: "mdi-exit-to-app", text: "Logout", route: "/logout" },
    ],
    buttons: [
      { text: "Home", to: "/", marginRight: true },
      { text: "Dashboard", to: "/dashboard" },
      { text: "ChartView", to: "/chartview" },
      {
        text: "Sign Out",
        icon: "mdi-exit-to-app",
        onClick: "signout",
      },
    ],
  },
};
