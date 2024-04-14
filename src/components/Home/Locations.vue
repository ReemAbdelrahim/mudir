<template>
    <div id="locations">
        <div class="first-location">
            <img src="/images/inside map.png" alt="" />
        </div>
        <div class="second-location">
            <img src="/images/inside map.png" alt="" />
        </div>
        <div class="third-location"  @click="toggleLocationCard" >
            <img src="/images/inside map.png" alt="" />
        </div>

        <LocationCard :isVisible="isLocationCardVisible" />


    </div>
   
</template>

<script>
import LocationCard from './LocationCard.vue';

export default {
  components: {
    LocationCard
  },
  data() {
    return {
      isLocationCardVisible: false
    };
  },
  methods: {
    toggleLocationCard() {
      this.isLocationCardVisible = !this.isLocationCardVisible;
    }
  }
};
</script>

<style>
.first-location {
    background-image: url(../images/Pin.png);
    position: absolute;
    z-index: 1;
    top: 50%;
    padding: 8px;
    right: 50%;
    text-align: center;
    width: 56px;
    cursor: pointer;
}

.first-location img {
    width: 100%;
}

.second-location {
    background-image: url(../images/Pin.png);
    position: absolute;
    z-index: 1;
    top: 36%;
    padding: 8px;
    right: 20%;
    text-align: center;
    width: 56px;
    cursor: pointer;
}

.second-location img {
    width: 100%;
}

.third-location {
    background-image: url(../images/Pin.png);
    position: absolute;
    z-index: 1;
    top: 65%;
    padding: 8px;
    right: 10%;
    text-align: center;
    width: 56px;
    cursor: pointer;
}

.third-location img {
    width: 100%;
}
</style>