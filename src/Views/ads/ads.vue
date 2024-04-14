<template>
    <div class="page-container">
        
     <Map></Map>
 
    <MakeAd></MakeAd>
<MakeAdModal></MakeAdModal> 

 
  </div>
</template>

<script>
    import Map from "../../components/Home/Map.vue"
    import MakeAd from "../../components/Ads/MakeAd.vue"
    import MakeAdModal from "../../components/Ads/MakeAdModal.vue";
    
export default {
    components: {
    Map,
    MakeAd,
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