<template>

    <div>
        <navbar :toggleSide="toggleSide" ></navbar>
        <sidebarVue v-if="isChecked"></sidebarVue>
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
      isChecked: true
    };
  }
}

</script>


<style></style>
