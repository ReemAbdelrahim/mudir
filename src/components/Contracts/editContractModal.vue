<template>
    <div>

        <!-- edit modal -->
        <div class="modal fade" id="editModalTwo" aria-hidden="true" aria-labelledby="editModalTwoLabel" tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header justify-content-between pb-0">
                        <h5 class="modal-title" id="editModalLabel">تعديل بيانات عقد</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pt-0">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-6">
                                    <p> &nbsp;</p>
                                    <div class="first-step rounded-pill"></div>
                                </div>
                                <div class="col-6">
                                    <p>بيانات أخرى</p>
                                    <div class="second-step rounded-pill"></div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row mt-3">

                                        <div class="col-md-6">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">رقم العقد

                                                </label>
                                                <input type="text" class="form-control" readonly>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">تاريخ الإصدار

                                                </label>
                                                <input type="date" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">اسم المستأجر
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <div class="d-flex justify-content-between">
                                                    <label for="" class="form-label gray-text">نوع الهوية
                                                        <span class="text-danger">*</span>
                                                    </label>

                                                    <div>
                                                        <label class="ps-2">جواز سفر
                                                            <input type="checkbox" checked="checked">
                                                            <span class="checkmark"></span>
                                                        </label>
                                                        <label class="">بطاقة
                                                            <input type="checkbox">
                                                            <span class="checkmark"></span>
                                                        </label>

                                                    </div>
                                                </div>

                                                <input type="text" class="form-control">
                                            </div>
                                        </div>



                                        <div class="col-md-6">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">نوع النشاط
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>مفروشة</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">العلامة التجارية

                                                </label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>مفروشة</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">مدة العقد
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">
                                                    &nbsp;
                                                </label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>سنوي</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">تاريخ البدء
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input type="date" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">تاريخ نهاية العقد

                                                </label>
                                                <input type="date" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">مدة إشعار الإخلاء
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">
                                                    &nbsp;
                                                </label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>سنوي</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">
                                                    التجديد
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>سنوي</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">
                                                    نوع الضريبة
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>سنوي</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-between">
                        <button type="button" class="btn btn-secondary px-4" data-bs-target="#editSecondModal2"
                            data-bs-toggle="modal" data-bs-dismiss="modal">التالي</button>
                        <button type="button" class="btn canceling-btn px-4" data-bs-dismiss="modal">إلغاء</button>
                    </div>
                </div>
            </div>
        </div>



        <div class="modal fade" id="editSecondModal2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
            tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header justify-content-between">
                        <h5 class="modal-title" id="exampleModalToggleLabel2">تعديل بيانات عقد</h5>
                        <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pt-0">
                        <div class="container-fluid font-14">
                            <div class="row">
                                <div class="col-6">
                                    <p> &nbsp;</p>
                                    <div class="first-step rounded-pill"></div>
                                </div>
                                <div class="col-6">
                                    <p>بيانات أخرى</p>
                                    <div class="first-step rounded-pill"></div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row mt-3">
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label for="" class="form-label gray-text">تاريخ التسليم
                                                        <span class="text-danger">*</span></label>
                                                    <input type="date" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">

                                                    <label for="" class="form-label gray-text">شروط الدفع
                                                        <span class="text-danger">*</span>
                                                    </label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>مفروشة</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">

                                                    <label for="" class="form-label gray-text">قيمة الإيجار
                                                        <span class="text-danger">*</span>
                                                    </label>
                                                    <input type="text" class="form-control" >
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">

                                                    <label for="" class="form-label gray-text">
                                                        &nbsp;
                                                    </label>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">

                                                    <label for="" class="form-label gray-text">طبيعة العقد
                                                        <span class="text-danger">*</span>
                                                    </label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>مفروشة</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">

                                                    <label for="" class="form-label gray-text">
                                                        نسبة الزيادة
                                                    </label>
                                                    <input type="text" class="form-control" placeholder="" >
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">

                                                    <label for="" class="form-label gray-text">نوع الوحدة
                                                        <span class="text-danger">*</span>
                                                    </label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>مفروشة</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">

                                                    <label for="" class="form-label gray-text">نوع العقار
                                                        <span class="text-danger">*</span>
                                                    </label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>مفروشة</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row mt-3">
                                            <div class="col-md-6">
                                                <div class="mb-3">

                                                    <label for="" class="form-label gray-text">رقم الدور
                                                        <span class="text-danger">*</span>
                                                    </label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>مفروشة</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">

                                                    <label for="" class="form-label gray-text">
                                                        مساحة الوحدة*
                                                    </label>
                                                    <input type="text" class="form-control" placeholder="" >
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="mb-3">

                                                    <label for="" class="form-label gray-text">
                                                        مكان العقار
                                                        <span class="text-danger">*</span>
                                                    </label>
                                                    <input type="text" class="form-control" placeholder="" >
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="mb-3">
                                                    <div class="responsive-map2" id="mmap">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
                                                            frameborder="0" style="border: 0" allowfullscreen></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-between">

                        <div>
                            <button class="btn btn-success">تعديل</button>
                        </div>
                        <div>
                            <button class="btn-modall" data-bs-toggle="modal" href="#editModalTwo"
                                role="button">السابق</button>
                            <button class="btn-modall" data-bs-dismiss="modal">الغاء</button>
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
.first-step {
    width: 100%;
    height: 8px;
    background-color: var(--green);

}

.second-step {
    width: 100%;
    height: 8px;
    background-color: #D9DBE1;
}

.modal-header {
    border-bottom: 0;
}

.modal-header .btn-close {
    margin: 0 !important;
}

.form-select {
    padding: 0.375rem 0.5rem 0.375rem 0.75rem;
    color: var(--gray-text);
    background-position: left 0.75rem center;
}

.responsive-map2 {
    overflow: hidden;
    position: relative;
    height: 180px;
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

.canceling-btn {
    border: 1px solid #D9DBE1;
    border-radius: 10px;
}

.font-14 {
    font-size: 14px;
}

.inp {
    position: relative;
}

.inp-icon {
    position: absolute;
    top: 6px;
    left: 10px;

}

.form-select {

    padding: 0.375rem 0.5rem 0.375rem 0.75rem;

    color: var(--gray-text);

    background-position: left 0.75rem center;

}

.cat-bg {
    background-color: var(--light-gray);
}

.canceling-btn {
    border: 1px solid #D9DBE1;
    border-radius: 10px;


}

.btn-file {
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 1;
}

.btn-file__actions {
    margin: 0;
    padding: 0;
}

.btn-file__actions__item {
    padding: 35px;
    font-size: 1.5em;
    color: #d3e0e9;
    cursor: pointer;
    text-decoration: none;
    border-top: 3px dashed #d3e0e9;
    border-left: 3px dashed #d3e0e9;
    border-bottom: 3px dashed #d3e0e9;
}

.btn-file__actions__item:first-child {
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
}

.btn-file__actions__item:last-child {
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
    border-right: 3px dashed #d3e0e9;
}

.btn-file__actions__item:hover,
.btn-file__actions__item:focus {
    color: #636b6f;
    background-color: rgba(211, 224, 233, 0.1);
}

.btn-file__actions__item:hover--shadow,
.btn-file__actions__item:focus--shadow {
    box-shadow: #d3e0e9 0 0 60px 15px;
}

.btn-file__actions__item--shadow {
    display: inline-block;
    position: relative;
    z-index: 1;
}

.btn-file__actions__item--shadow::before {
    content: " ";
    box-shadow: #fff 0 0 60px 40px;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    z-index: -1;
}

.btn-file__preview {
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    border-radius: 35px;
    background-size: cover;
    background-position: center;
}

.form-group label.attachment {
    width: 100%;
}

.form-group label.attachment .btn-create>a,
.form-group label.attachment .btn-create>div {
    margin-top: 5px;
}

.form-group label.attachment input[type='file'] {
    display: none;
}

.bg-light-gray {
    background-color: #F3F5F5;
}

.content-p {
    font-size: 12px;
}

.cover-btn {
    background-color: #636b6f;
    color: white;
    border: 0;
    padding: 8px 15px;
    margin-left: 10px;
}

.delete-btn2 {
    color: white;
    border: 0;
    padding: 8px 15px;
    margin-left: 10px;
}

.btn-modall {
    background-color: white;
    color: #8E8E93;
    padding: 8px 30px;
    border: 1px solid #D9DBE1;
    border-radius: 10px;
    margin-left: 10px;
}

.container input:checked~.checkmark {
    background-color: var(--green);
}
</style>