<template>
    <div >

        <!-- edit modal -->
        <div class="modal fade"  id="editModal" aria-hidden="true" aria-labelledby="editModalLabel" tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header justify-content-between pb-0">
                        <h5 class="modal-title" id="editModalLabel">تعديل عقار</h5>
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
                                    <p>صورة العقار</p>
                                    <div class="second-step rounded-pill"></div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">الحالة
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

                                                <label for="" class="form-label gray-text">نوع التسليم
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

                                                <label for="" class="form-label gray-text">نوع المعاملة
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" placeholder="تأجير">
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

                                                <label for="" class="form-label gray-text">السعر المقترح
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" placeholder="">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">
                                                    &nbsp;
                                                </label>
                                                <input type="text" class="form-control" placeholder="" readonly>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">عدد الوحدات
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

                                                <label for="" class="form-label gray-text">مساحة الوحدة
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row mt-3">
                                        <div class="col-md-4">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">الحي
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" placeholder="">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">المدينة
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected></option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-3">

                                                <label for="" class="form-label gray-text">المحافظة
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected></option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
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
                    <div class="modal-footer d-flex justify-content-between">
                        <button type="button" class="btn btn-secondary px-4" data-bs-target="#editSecondModal"
                            data-bs-toggle="modal" data-bs-dismiss="modal">التالي</button>
                        <button type="button" class="btn canceling-btn px-4" data-bs-dismiss="modal">إلغاء</button>
                    </div>
                </div>
            </div>
        </div>



        <div class="modal fade" id="editSecondModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
            tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header justify-content-between">
                        <h5 class="modal-title" id="exampleModalToggleLabel2">تعديل عقار</h5>
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
                                    <p>صورة العقار</p>
                                    <div class="first-step rounded-pill"></div>
                                </div>


                                <div class="col-md-12 col-md-offset-2 pt-3">
                                    <div class="form-group">
                                        <label for="fileField" class="attachment">
                                            <div class="row btn-file">
                                                <div class="btn-file__preview"></div>
                                                <div class="btn-file__actions">
                                                    <div class="btn-file__actions__item col-xs-12 text-center">
                                                        <div class="btn-file__actions__item--shadow">
                                                            <i class="fa fa-plus fa-lg fa-fw" aria-hidden="true"></i>
                                                            <div class="visible-xs-block"></div>
                                                            <div class="d-flex  align-items-center">
                                                                <div>اختر ملف</div>
                                                                <div>
                                                                    <img src="/images/Upload Media.png" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <input name="file" type="file" id="fileField">
                                        </label>
                                    </div>
                                </div>
                                <div class="bg-light-gray p-2 d-flex justify-content-between align-items-center mt-3">
                                    <div class="d-flex">
                                        <div>
                                            <img src="/images/galleryone.png" alt="">
                                        </div>
                                        <div class="pe-2 content-p">
                                            <p>اسم الصورة</p>
                                            <p>24 م</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="cover-btn rounded-pill">الغلاف
                                            <span><svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16.7599 12.72L14.4124 7.23747C13.6174 5.37747 12.1549 5.30247 11.1724 7.07247L9.75494 9.62997C9.03494 10.9275 7.69244 11.04 6.76244 9.87747L6.59744 9.66747C5.62994 8.45247 4.26494 8.60247 3.56744 9.98997L2.27744 12.5775C1.36994 14.3775 2.68244 16.5 4.69244 16.5H14.2624C16.2124 16.5 17.5249 14.5125 16.7599 12.72Z"
                                                        stroke="white" stroke-width="1.125" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M5.72766 6C6.9703 6 7.97766 4.99264 7.97766 3.75C7.97766 2.50736 6.9703 1.5 5.72766 1.5C4.48502 1.5 3.47766 2.50736 3.47766 3.75C3.47766 4.99264 4.48502 6 5.72766 6Z"
                                                        stroke="white" stroke-width="1.125" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </button>
                                        <button class="delete-btn2 bg-danger rounded-pill">حذف
                                            <span><svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16.25 4.48499C13.7525 4.23749 11.24 4.10999 8.735 4.10999C7.25 4.10999 5.765 4.18499 4.28 4.33499L2.75 4.48499"
                                                        stroke="white" stroke-width="1.125" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M6.875 3.7275L7.04 2.745C7.16 2.0325 7.25 1.5 8.5175 1.5H10.4825C11.75 1.5 11.8475 2.0625 11.96 2.7525L12.125 3.7275"
                                                        stroke="white" stroke-width="1.125" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M14.6374 6.85498L14.1499 14.4075C14.0674 15.585 13.9999 16.5 11.9074 16.5H7.09243C4.99993 16.5 4.93243 15.585 4.84993 14.4075L4.36243 6.85498"
                                                        stroke="white" stroke-width="1.125" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M8.24756 12.375H10.7451" stroke="white"
                                                        stroke-width="1.125" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M7.625 9.375H11.375" stroke="white" stroke-width="1.125"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div class="bg-light-gray p-2 d-flex justify-content-between align-items-center mt-3">
                                    <div class="d-flex">
                                        <div>
                                            <img src="/images/galleryone.png" alt="">
                                        </div>
                                        <div class="pe-2 content-p">
                                            <p>اسم الصورة</p>
                                            <p>24 م</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="cover-btn rounded-pill">الغلاف
                                            <span><svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16.7599 12.72L14.4124 7.23747C13.6174 5.37747 12.1549 5.30247 11.1724 7.07247L9.75494 9.62997C9.03494 10.9275 7.69244 11.04 6.76244 9.87747L6.59744 9.66747C5.62994 8.45247 4.26494 8.60247 3.56744 9.98997L2.27744 12.5775C1.36994 14.3775 2.68244 16.5 4.69244 16.5H14.2624C16.2124 16.5 17.5249 14.5125 16.7599 12.72Z"
                                                        stroke="white" stroke-width="1.125" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M5.72766 6C6.9703 6 7.97766 4.99264 7.97766 3.75C7.97766 2.50736 6.9703 1.5 5.72766 1.5C4.48502 1.5 3.47766 2.50736 3.47766 3.75C3.47766 4.99264 4.48502 6 5.72766 6Z"
                                                        stroke="white" stroke-width="1.125" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </button>
                                        <button class="delete-btn2 bg-danger rounded-pill">حذف
                                            <span><svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16.25 4.48499C13.7525 4.23749 11.24 4.10999 8.735 4.10999C7.25 4.10999 5.765 4.18499 4.28 4.33499L2.75 4.48499"
                                                        stroke="white" stroke-width="1.125" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M6.875 3.7275L7.04 2.745C7.16 2.0325 7.25 1.5 8.5175 1.5H10.4825C11.75 1.5 11.8475 2.0625 11.96 2.7525L12.125 3.7275"
                                                        stroke="white" stroke-width="1.125" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M14.6374 6.85498L14.1499 14.4075C14.0674 15.585 13.9999 16.5 11.9074 16.5H7.09243C4.99993 16.5 4.93243 15.585 4.84993 14.4075L4.36243 6.85498"
                                                        stroke="white" stroke-width="1.125" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M8.24756 12.375H10.7451" stroke="white"
                                                        stroke-width="1.125" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M7.625 9.375H11.375" stroke="white" stroke-width="1.125"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </button>
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
                            <button class="btn-modall" data-bs-toggle="modal" href="#editModal"
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
  height: 280px;
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
.btn-modall{
    background-color: white;
    color: #8E8E93;
    padding: 8px 30px;
    border: 1px solid #D9DBE1;
    border-radius: 10px;
    margin-left: 10px;
}

</style>