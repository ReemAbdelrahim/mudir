<template>

    <div>

      

        <!-- Modal -->
        <div class="modal fade" id="makead" tabindex="-1" aria-labelledby="makeadLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header pb-0">
                        <h5 class="modal-title" id="makeadLabel">إضافة إعلان</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                    <div class="second-step rounded-pill"></div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3 pt-3">
                                        <label class="form-label gray-text">اسم العقار
                                            <span class="text-danger">*</span>
                                        </label>
                                        <input type="email" class="form-control" placeholder="اسم العقار">
                                    </div>

                                </div>
                                <div class="col-lg-2">
                                    <div class="mb-3 pt-3">
                                        <label class="form-label gray-text"> المساحة بالمتر
                                            <span class="text-danger">*</span>
                                        </label>
                                        <input type="email" class="form-control" placeholder="00">
                                    </div>

                                </div>
                                <div class="col-lg-2">
                                    <div class="mb-3 pt-3">
                                        <label class="form-label gray-text">عرض الشارع
                                            <span class="text-danger">*</span>
                                        </label>
                                        <input type="email" class="form-control" placeholder="00">
                                    </div>

                                </div>
                                <div class="col-lg-2">
                                    <div class="mb-3 pt-3">
                                        <label class="form-label gray-text"> عدد الغرف
                                            <span class="text-danger">*</span>
                                        </label>
                                        <input type="email" class="form-control" placeholder="00">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3 ">
                                        <label class="form-label gray-text">المنطقة
                                            <span class="text-danger">*</span>
                                        </label>
                                        <div class="inp">
                                            <input type="email" class="form-control " placeholder="اسم العقار">
                                            <span class="inp-icon"><svg width="18" height="18" viewBox="0 0 18 18"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16.5 6.75001V11.25C16.5 13.125 16.125 14.4375 15.285 15.285L10.5 10.5L16.2975 4.70251C16.4325 5.29501 16.5 5.97001 16.5 6.75001Z"
                                                        stroke="#D9DBE1" stroke-width="1.125" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M16.2975 4.7025L4.70249 16.2975C2.44499 15.78 1.5 14.22 1.5 11.25V6.75C1.5 3 3 1.5 6.75 1.5H11.25C14.22 1.5 15.78 2.445 16.2975 4.7025Z"
                                                        stroke="#D9DBE1" stroke-width="1.125" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M15.285 15.285C14.4375 16.125 13.125 16.5 11.25 16.5H6.75002C5.97002 16.5 5.29501 16.4325 4.70251 16.2975L10.5 10.5L15.285 15.285Z"
                                                        stroke="#D9DBE1" stroke-width="1.125" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M4.68001 5.98504C5.19001 3.78754 8.49002 3.78754 9.00002 5.98504C9.29252 7.27504 8.48251 8.37004 7.77001 9.04504C7.25251 9.54004 6.43502 9.54004 5.91002 9.04504C5.19752 8.37004 4.38001 7.27504 4.68001 5.98504Z"
                                                        stroke="#D9DBE1" stroke-width="1.125" />
                                                    <path d="M6.82095 6.5249H6.82769" stroke="#D9DBE1"
                                                        stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-2">
                                    <div class="mb-3">
                                        <label class="form-label gray-text"> الصالات
                                            <span class="text-danger">*</span>
                                        </label>
                                        <input type="email" class="form-control" placeholder="00">
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="mb-3">
                                        <label class="form-label gray-text"> رقم الدور
                                            <span class="text-danger">*</span>
                                        </label>
                                        <input type="email" class="form-control" placeholder="00">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <label class="form-label gray-text"> اختر الفئة او الفئات
                                            <span class="text-danger">*</span>
                                        </label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>اختر</option>
                                            <option value="1">فئة 1</option>
                                            <option value="2">فئة 2</option>
                                            <option value="3">فئة 3</option>
                                        </select>
                                        <div class="d-flex flex-wrap pt-3 gap-2">
                                            <div class="rounded-pill cat-bg p-2">
                                                <span class="ps-3">فئة 1</span>
                                                <span><svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M7.5 0.5C3.3525 0.5 0 3.8525 0 8C0 12.1475 3.3525 15.5 7.5 15.5C11.6475 15.5 15 12.1475 15 8C15 3.8525 11.6475 0.5 7.5 0.5ZM11.25 10.6925L10.1925 11.75L7.5 9.0575L4.8075 11.75L3.75 10.6925L6.4425 8L3.75 5.3075L4.8075 4.25L7.5 6.9425L10.1925 4.25L11.25 5.3075L8.5575 8L11.25 10.6925Z"
                                                            fill="#8E8E93" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div class="rounded-pill cat-bg p-2">
                                                <span class="ps-3">فئة 2</span>
                                                <span><svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M7.5 0.5C3.3525 0.5 0 3.8525 0 8C0 12.1475 3.3525 15.5 7.5 15.5C11.6475 15.5 15 12.1475 15 8C15 3.8525 11.6475 0.5 7.5 0.5ZM11.25 10.6925L10.1925 11.75L7.5 9.0575L4.8075 11.75L3.75 10.6925L6.4425 8L3.75 5.3075L4.8075 4.25L7.5 6.9425L10.1925 4.25L11.25 5.3075L8.5575 8L11.25 10.6925Z"
                                                            fill="#8E8E93" />
                                                    </svg>
                                                </span>
                                            </div>

                                        </div>
                                        <div class="d-flex gap-3 justify-content-between  pt-3">
                                            <div>
                                                <input type="checkbox" name="plus1">
                                                <label class="pe-2"> مسبح</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="plus2">
                                                <label class="pe-2"> حديقة</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="plus3">
                                                <label class="pe-2"> انترنت</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="plus4">
                                                <label class="pe-2"> المكيف</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <label class="form-label gray-text"> تفاصيل اخرى
                                        </label>
                                        <textarea class="form-control" placeholder="اكتب هنا" rows="3"></textarea>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-between">
                        <button type="button" class="btn btn-secondary px-4" data-bs-target="#exampleModalToggle2"
                            data-bs-toggle="modal" data-bs-dismiss="modal">التالي</button>
                        <button type="button" class="btn canceling-btn px-4" data-bs-dismiss="modal">إلغاء</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- second modal -->
        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
            tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header pb-0">
                        <h5 class="modal-title" id="makeadLabel">إضافة إعلان</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                        <button class="delete-btn bg-danger rounded-pill">حذف
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
                                        <button class="delete-btn bg-danger rounded-pill">حذف
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
                        <!-- <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
                            data-bs-dismiss="modal">Back to first</button> -->
                            <div>
                                <button class="btn btn-primary">اضافة</button>
                            </div>
                            <div>
                                <button class="btn-modall" data-bs-toggle="modal" href="#makead" role="button">السابق</button>
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

}
</script>

<style>


.modal-header .btn-close {
    margin-left: 0 !important;
}

.modal-header {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    padding: var(--bs-modal-header-padding);
    border-bottom: 0;
    justify-content: space-between;

}

.first-step {
    width: 100%;
    height: 8px;
    background-color: var(--blue);

}

.second-step {
    width: 100%;
    height: 8px;
    background-color: #D9DBE1;
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

.delete-btn {
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