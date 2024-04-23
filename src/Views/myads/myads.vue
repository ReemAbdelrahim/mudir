<template>
    <div class="page-container">
        
   <TabelAds></TabelAds>
   <!-- <MakeAdModal></MakeAdModal> -->


 
  </div>
</template>

<script>
    import TabelAds from "../../components/MyAdds/TabelAds.vue"
    // import PlaceDetails from "../../components/MyAdds/PlaceDetails.vue";
    import MakeAdModal from "../../components/Ads/MakeAdModal.vue";
    
export default {
    components: {
        TabelAds,
        // PlaceDetails,
        MakeAdModal,
  },
}
</script>

<style>
.page-container {
  margin-right: 230px;
  height: 90vh;
  position: relative;

}
</style>