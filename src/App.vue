<template>

  <div>
    <navbar :toggleSide="toggleSide"  v-if="currentPath !== '/'"></navbar>
    <sidebarVue v-if="isChecked && currentPath !== '/'"></sidebarVue>
    <router-view></router-view>
  </div>
</template>


<script>
import sidebarVue from './components/layouts/sidebar/sidebar.vue'
import navbar from "./components/layouts/navbar/navbar.vue"



export default {
  components: {
    navbar,
    sidebarVue,
  },
  methods: {
    toggleSide() {
      this.isChecked = !this.isChecked;
    }
  },
  data() {
    return {
      isChecked: true,
      currentPath: '',
    };
  },
  created() {
    this.$router.afterEach((to) => {
      console.log(to.path);
      this.currentPath = to.path;
    });
  },




}

</script>


<style></style>
