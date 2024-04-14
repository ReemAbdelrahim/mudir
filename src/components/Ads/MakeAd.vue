<template>

<div>
    
    <input type="text" placeholder="بحث" class="new-input-search">
    <div class="d-flex gap-1">
    <button class="continue-btn2">تراجع</button>
    <button class="continue-btn3">حفظ</button>  
   </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.responsive-map2 {
    overflow: hidden;
    position: relative;
    height: 90vh;
}

.responsive-map2 iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 20px;
    z-index: 1;
}

.new-input-search {
    position: absolute;
    z-index: 100;
    top: 0;
    right: 0;
    left: 0;
    width: 80%;

    margin: 20px auto;
    border: 0;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 24px 0px #00000026;
}

.continue-btn2 {
    background-color: white;
    color: #2E637F;
    border: 0;
    padding: 10px 60px;
    font-size: 21px;
    margin-top: 40px;
    border-radius: 10px;
    position: absolute;
    bottom: 40px;
    right: 5%;
    z-index: 10;
    font-weight: 600;
    box-shadow: 0px 0px 24px 0px #00000026;

}
.continue-btn3 {
  color: white;
  background-color: var(--blue);
  border: 0;
  padding: 10px 60px;
  font-size: 21px;
  margin-top: 40px;
  border-radius: 10px;
  position: absolute;
  bottom: 40px;
  right: 19%;
  z-index: 10;
  font-weight: 600;
  box-shadow: 0px 0px 24px 0px #00000026;
}

</style>