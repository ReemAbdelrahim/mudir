<template>
   <div class="page-container">
     <PlaceDetails></PlaceDetails>
 
    </div>
</template>

<script>
import PlaceDetails from '../../components/MyAdds/PlaceDetails.vue';

export default {
components:{
  PlaceDetails,

}
}
</script>

<style>
.page-container {
  margin-right: 230px;
  height: 90vh;
  position: relative;

}
.p-10{
  padding: 10px;
}
</style>