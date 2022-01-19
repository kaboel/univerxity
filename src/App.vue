<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
const Dashboard = () => import("./views/Dashboard.vue");

export default {
  name: "App",
  components: {
    Dashboard,
  },
};
</script>