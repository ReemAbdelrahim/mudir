<template>
    <div class="modal fade" id="service" tabindex="-1" aria-labelledby="serviceLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-2">

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                <div class="modal-body">
                    <h5 class="text-center">طلب خدمة</h5>
                    <div class="mb-3">
                        <label for="" class="form-label">اسم الشركة / الشخص <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="" placeholder="الاسم">
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">نوع الخدمة<span class="text-danger">*</span></label>
                        <select class="form-select form-select mb-3" aria-label=".form-select-lg example">
                            <option selected>تسويق</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-3 login-inp position-relative">
                        <label for="" class="form-label">رقم الهاتف </label>
                        <input type="text" name="" id="" placeholder="ادخل رقم الهاتف " class="form-control">
                        <p>+02</p>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">الملاحظات</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="mb-3 d-flex">
                        <div class="w-50 p-2">
                            <button class="send-request">ارسال</button>
                        </div>
                        <div class="w-50 p-2">
                            <button class="cancel-request" data-bs-dismiss="modal">الغاء</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        };
    }
}
</script>

<style>
.login-inp p {
    padding-right: 5px;
    border-right: 1px solid var(--gray-text);
    left: 17px;
    color: var(--gray-text);
    position: absolute;
    top: 55%;
}
.send-request{
    background-color: var(--blue);
    color: white;
    border: 0;
    width: 100%;
    border-radius: 6px;
    padding: 8px 12px 8px 12px;
}
.cancel-request{
    background-color: #F3F5F5;
    border: 0;
    width: 100%;
    border-radius: 6px;
    padding: 8px 12px 8px 12px;  
}</style>