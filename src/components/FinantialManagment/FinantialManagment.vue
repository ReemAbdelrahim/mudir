<template>
  <div class="page-container">

    <div class="p-10 bg-light">
      <div class=" scrool p-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 ">
              <div class="bg-white scroll-notify p-3">
                <div class="d-flex justify-content-between">
                  <h4>إشعارات</h4>
                  <p class="text-primary">تم سداد الكل</p>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <div>
                    <p class="text-gray">سداد قسط ايجار عقار x بإسم Y</p>
                  </div>
                  <div class=" d-flex gap-2">
                    <button class="btn btn-success">سدد</button>
                    <button class="btn btn-second px-4">لا</button>
                    <button class="btn btn-light">لاحقا</button>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <div>
                    <p class="text-gray">سداد قسط ايجار عقار x بإسم Y</p>
                  </div>
                  <div class=" d-flex gap-2">
                    <button class="btn btn-success">سدد</button>
                    <button class="btn btn-second px-4">لا</button>
                    <button class="btn btn-light">لاحقا</button>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <div>
                    <p class="text-gray">سداد قسط ايجار عقار x بإسم Y</p>
                  </div>
                  <div class=" d-flex gap-2">
                    <button class="btn btn-success">سدد</button>
                    <button class="btn btn-second px-4">لا</button>
                    <button class="btn btn-light">لاحقا</button>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <div>
                    <p class="text-gray">سداد قسط ايجار عقار x بإسم Y</p>
                  </div>
                  <div class=" d-flex gap-2">
                    <button class="btn btn-success">سدد</button>
                    <button class="btn btn-second px-4">لا</button>
                    <button class="btn btn-light">لاحقا</button>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <div>
                    <p class="text-gray">سداد قسط ايجار عقار x بإسم Y</p>
                  </div>
                  <div class=" d-flex gap-2">
                    <button class="btn btn-success">سدد</button>
                    <button class="btn btn-second px-4">لا</button>
                    <button class="btn btn-light">لاحقا</button>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <div>
                    <p class="text-gray">سداد قسط ايجار عقار x بإسم Y</p>
                  </div>
                  <div class=" d-flex gap-2">
                    <button class="btn btn-success">سدد</button>
                    <button class="btn btn-second px-4">لا</button>
                    <button class="btn btn-light">لاحقا</button>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <div>
                    <p class="text-gray">سداد قسط ايجار عقار x بإسم Y</p>
                  </div>
                  <div class=" d-flex gap-2">
                    <button class="btn btn-success">سدد</button>
                    <button class="btn btn-second px-4">لا</button>
                    <button class="btn btn-light">لاحقا</button>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-lg-4">
              <dounghtChart></dounghtChart>
            </div>
            <div class="col-12">
              <VicticalBar></VicticalBar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import dounghtChart from '../FinantialManagment/dounghtChart.vue'
import VicticalBar from '../FinantialManagment/VicticalBar.vue'
export default {
  components: {
    dounghtChart,
    VicticalBar
  }

}
</script>

<style>
.page-container {
  margin-right: 230px;
  height: 90vh;
  position: relative;
  /* overflow-x: hidden; */

}

.scrool {
  height: 85vh;
  overflow-y: scroll;

}
.btn-second{
  background-color: #2E637F;
  color: white;
}
.scroll-notify{
  height: 380px;
  overflow-y: scroll;
}
@media only screen and (max-width: 600px) {

.page-container {
    margin-right: 0px;
    height: auto;
}
}
</style>