<template>
  <div class="page-container">
    <Map v-if="isChecked"></Map>
    <Filtter :toggleChecked="toggleChecked"></Filtter>
    <Locations v-if="isChecked"></Locations>
    <locationCard></locationCard>
  <LocationsMenu v-if="!isChecked"></LocationsMenu>
 
 
  </div>
</template>
<script>
import Map from "../../components/Home/Map.vue"
import Filtter from "../../components/Home/Filtter.vue"
import LocationsMenu from '../../components/Home/LocationsMenu.vue'
import Locations from '../../components/Home/Locations.vue'
import LocationCard from "../../components/Home/LocationCard.vue"



export default {
  name:"Home",

  components: {
    Map,
    Filtter,
    Locations,
    LocationCard,
  LocationsMenu
  

  },
  methods: {
    toggleChecked() {
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
   
<style>
.page-container {
  margin-right: 230px;
  height: 90vh;
  position: relative;

}

@media only screen and (max-width: 768px) {
  #collapseExample{
    height: 400px;
    overflow-y: scroll;
    font-size: 12px;
  }
  .multi-range input[type=range]{
    width: 250px;
  }
  .login-section {
    width: 100%;
    margin-right: 0%;
  }

  .top-nav {
    margin-right: 0%;
    width: 100%;
  }

  .search-fillter {
    width: 30%;
    margin-bottom: 10px;
  }

  .rent-fillter {
    width: 30%;
    /* order: 0; */
    margin-bottom: 10px;
  }

  .month-fillter {
    width: 30%;
    /* order: 1; */
    margin-bottom: 10px;
  }

  .buildding-type {
    width: 30%;
    /* order: 2; */
    margin-bottom: 10px;
  }

  .fillter-collaps {
    /* order: 3; */
    margin-bottom: 10px;
  }

  .search-fillter {
    /* order: 4; */
    width: 80%;
    margin-bottom: 10px;
  }

  .dropdown-toggle {
    font-size: 12px;
  }

  .main-fillter {
    top: 0
  }

  .ad-link {
    background-color: white;
  }

  .ad-link a span {
    display: none;
  }

  .profile-mob {
    display: none;
  }

  .notification-link {
    background-color: white;
  }

  .modal-content2 {
    right: 0;
  }

  .place-card {
    width: 250px;
  }
  .products-cards{
    background-color: white;
    width: 97%;
    margin: 50% auto 0% auto;
    border-radius: 20px;
    padding: 20px;
   
  }
  .navbar-nav {
flex-direction: row !important;
}
}

@media only screen and (max-width: 600px) {
  .login-section {
    width: 100%;
    margin-right: 0%;
  }

  .page-container {
    margin-right: 0px;
    height: auto;
  }
  .navbar-nav {
flex-direction: row !important;
}
}
</style>