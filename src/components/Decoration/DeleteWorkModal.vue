<template>
    <!--delete Modal -->
    <div class="modal fade" id="DeleteModal" tabindex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3">

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                <div class="modal-body ">
                    <div class="text-center">
                        <img src="/images/delete.png" alt="">
                        <h4 class="py-3">حذف العقد x</h4>
                        <h4>هل أنت متأكد من حذف هذا العقد نهائيا ؟</h4>
                    </div>
                    <div class="d-flex">
                        <div class="w-50 p-2">
                            <button class="deletee-btn">نعم حذف </button>
                        </div>
                        <div class="w-50 p-2">
                            <button class="cancel-btn">الغاء</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.deletee-btn {
  background-color: var(--red-color);
  border: 0;
  width: 100%;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

.cancel-btn {
  background-color: var(--light-gray);
  border: 0;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
}</style>