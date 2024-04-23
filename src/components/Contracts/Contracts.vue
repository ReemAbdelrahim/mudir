<template>
  <div class="page-container">
    <div class="p-10 bg-light">
      <div class="bg-white p-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <ul class="nav nav-tabs " id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active new-tab" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                    type="button" role="tab" aria-controls="home" aria-selected="true">تعريف العقارات</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link new-tab" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                    type="button" role="tab" aria-controls="profile" aria-selected="false">العقود
                    المسجلة</button>
                </li>

              </ul>
            </div>
            <div class="col-lg-5">
              <div class="d-flex flex-wrap mt-3">

                <div class="inp-div w-50">
                  <input type="text">
                  <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 19.0008L13.803 13.8038M13.803 13.8038C15.2096 12.3972 15.9998 10.4895 15.9998 8.50028C15.9998 6.51108 15.2096 4.60336 13.803 3.19678C12.3965 1.79021 10.4887 1 8.49955 1C6.51035 1 4.60262 1.79021 3.19605 3.19678C1.78947 4.60336 0.999268 6.51108 0.999268 8.50028C0.999268 10.4895 1.78947 12.3972 3.19605 13.8038C4.60262 15.2104 6.51035 16.0006 8.49955 16.0006C10.4887 16.0006 12.3965 15.2104 13.803 13.8038Z"
                        stroke="#3498F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
                <div class="w-50 text-center ">
                  <button class="btn btn-primary add-contract" data-bs-toggle="modal" href="#editModal" role="button">
                    تسجيل عقد جديد
                    <span><svg width="21" height="22" viewBox="0 0 21 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 11H14" stroke="white" stroke-width="1.3125" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path d="M10.5 14.5V7.5" stroke="white" stroke-width="1.3125" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path
                          d="M7.875 19.75H13.125C17.5 19.75 19.25 18 19.25 13.625V8.375C19.25 4 17.5 2.25 13.125 2.25H7.875C3.5 2.25 1.75 4 1.75 8.375V13.625C1.75 18 3.5 19.75 7.875 19.75Z"
                          stroke="white" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

              <!--delete Modal -->
              <div class="modal fade" id="exampleModal2" tabindex="-1"
                              aria-labelledby="exampleModal2Label" aria-hidden="true">
                              <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content p-3">

                                  <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>

                                  <div class="modal-body ">
                                    <div class="text-center">
                                      <img src="/images/delete.png" alt="">
                                      <h4 class="py-3">حذف العقد x</h4>
                                      <h4>هل أنت متأكد من حذف هذا العقد نهائيا ؟</h4>
                                    </div>
                                    <div class="d-flex">
                                      <div class="w-50 p-2">
                                        <button class="delete-btn">نعم حذف </button>
                                      </div>
                                      <div class="w-50 p-2">
                                        <button class="cancel-btn">الغاء</button>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>

          <div class="tab-content mt-3" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

              <div class="table-responsive pt-5">
                <table class="table">

                  <tbody>
                    <tr class="tr-light">
                      <td scope="col">م</td>
                      <td scope="col">تعريف المبنى</td>
                      <td scope="col">المساحة</td>
                      <td scope="col">عدد الوحدات</td>
                      <td scope="col">نوع المعاملة</td>
                      <td scope="col"> نوع التسليم</td>
                      <td scope="col">الحالة</td>
                      <td scope="col">السعر المقترح</td>

                      <td scope="col">الخيارات</td>
                    </tr>
                    <tr>
                      <td scope="row">1</td>
                      <td class="second-color-text">اسم العقار </td>
                      <td><span class="present-span">معروض </span></td>
                      <td>150 م</td>
                      <td>6 م </td>
                      <td>12</td>
                      <td>2</td>
                      <td>2</td>

                      <td>
                        <div class="choices">
                          <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                              data-bs-toggle="dropdown" aria-expanded="false">
                              <svg width="5" height="19" viewBox="0 0 5 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M2.25 5C3.4875 5 4.5 3.9875 4.5 2.75C4.5 1.5125 3.4875 0.5 2.25 0.5C1.0125 0.5 0 1.5125 0 2.75C0 3.9875 1.0125 5 2.25 5ZM2.25 7.25C1.0125 7.25 0 8.2625 0 9.5C0 10.7375 1.0125 11.75 2.25 11.75C3.4875 11.75 4.5 10.7375 4.5 9.5C4.5 8.2625 3.4875 7.25 2.25 7.25ZM0 16.25C0 15.0125 1.0125 14 2.25 14C3.4875 14 4.5 15.0125 4.5 16.25C4.5 17.4875 3.4875 18.5 2.25 18.5C1.0125 18.5 0 17.4875 0 16.25Z"
                                  fill="#6B7A85" />
                              </svg>

                            </button>
                            <ul class="dropdown-menu text-end" aria-labelledby="dropdownMenuButton1">




                              <li><a @click="showModal" class="dropdown-item" data-bs-toggle="modal" href="#editModal"
                                  role="button">
                                  <span class="ps-2 ">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                      <path
                                        d="M12.0299 2.26495L6.11991 8.17495C5.89491 8.39995 5.66991 8.84245 5.62491 9.16495L5.30241 11.4224C5.18241 12.2399 5.75991 12.8099 6.57741 12.6974L8.83491 12.3749C9.14991 12.3299 9.59241 12.1049 9.82491 11.8799L15.7349 5.96995C16.7549 4.94995 17.2349 3.76495 15.7349 2.26495C14.2349 0.764945 13.0499 1.24495 12.0299 2.26495Z"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M11.1824 3.1123C11.6849 4.9048 13.0874 6.3073 14.8874 6.8173"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                  </span>
                                  <span class="gray-text">تعديل</span>
                                </a></li>
                              <li><a class="dropdown-item" href="#" type="button" data-bs-toggle="modal"
                                  data-bs-target="#exampleModal2">
                                  <span class="ps-2">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M15.75 4.48486C13.2525 4.23736 10.74 4.10986 8.235 4.10986C6.75 4.10986 5.265 4.18486 3.78 4.33486L2.25 4.48486"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                      <path
                                        d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                      <path
                                        d="M14.1373 6.85498L13.6498 14.4075C13.5673 15.585 13.4998 16.5 11.4073 16.5H6.5923C4.4998 16.5 4.4323 15.585 4.3498 14.4075L3.8623 6.85498"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                      <path d="M7.74756 12.375H10.2451" stroke="#8E8E93" stroke-width="1.125"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M7.125 9.375H10.875" stroke="#8E8E93" stroke-width="1.125"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>


                                  </span>
                                  <span class="gray-text">حذف</span>
                                </a></li>
                            </ul>



                          








                          </div>
                        </div>
                      </td>
                    </tr>





                  </tbody>
                </table>
              </div>

              <nav aria-label="...">
                <ul class="pagination justify-content-center gap-2">
                  <li class="page-item ">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                      <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.344 0.944H2.072L4.832 3.668L2.072 6.392H0.344L3.116 3.668L0.344 0.944Z"
                          fill="#33312C" />
                      </svg>

                    </a>
                  </li>
                  <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                  <li class="page-item ">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">4</a></li>
                  <li class="page-item"><a class="page-link" href="#">5</a></li>
                  <li class="page-item"><a class="page-link" href="#">6</a></li>

                  <li class="page-item">
                    <a class="page-link" href="#">
                      <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.936 6.392L0.176 3.668L2.936 0.944H4.664L1.892 3.668L4.664 6.392H2.936Z"
                          fill="#33312C" />
                      </svg>

                    </a>
                  </li>
                </ul>
              </nav>



            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

              <div class="table-responsive pt-5">
                <table class="table">

                  <tbody>
                    <tr class="tr-light">
                      <td scope="col">رقم العقد</td>
                      <td scope="col">تاريخ الإصدار</td>
                      <td scope="col">اسم المستأجر</td>
                      <td scope="col">مدة إشعار الإخلاء</td>
                      <td scope="col">المدة</td>
                      <td scope="col"> المساحة</td>
                      <td scope="col">قيمة الإيجار</td>
                      <td scope="col">ملاحظات</td>

                      <td scope="col">الخيارات</td>
                    </tr>
                    <tr>
                      <td scope="row">1</td>
                      <td class="second-color-text">اسم العقار </td>
                      <td><span>معروض </span></td>
                      <td>150 م</td>
                      <td>6 م </td>
                      <td>12</td>
                      <td>2</td>
                      <td>2</td>

                      <td>
                        <div class="choices">
                          <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                              data-bs-toggle="dropdown" aria-expanded="false">
                              <svg width="5" height="19" viewBox="0 0 5 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M2.25 5C3.4875 5 4.5 3.9875 4.5 2.75C4.5 1.5125 3.4875 0.5 2.25 0.5C1.0125 0.5 0 1.5125 0 2.75C0 3.9875 1.0125 5 2.25 5ZM2.25 7.25C1.0125 7.25 0 8.2625 0 9.5C0 10.7375 1.0125 11.75 2.25 11.75C3.4875 11.75 4.5 10.7375 4.5 9.5C4.5 8.2625 3.4875 7.25 2.25 7.25ZM0 16.25C0 15.0125 1.0125 14 2.25 14C3.4875 14 4.5 15.0125 4.5 16.25C4.5 17.4875 3.4875 18.5 2.25 18.5C1.0125 18.5 0 17.4875 0 16.25Z"
                                  fill="#6B7A85" />
                              </svg>

                            </button>
                            <ul class="dropdown-menu text-end" aria-labelledby="dropdownMenuButton1">




                              <li>
                                <a class="dropdown-item"  @click="showModalAllData"  data-bs-toggle="modal" href="#allDataModal"
                                  role="button">
                                  <span class="ps-2 ">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M16.5 7.5V11.25C16.5 15 15 16.5 11.25 16.5H6.75C3 16.5 1.5 15 1.5 11.25V6.75C1.5 3 3 1.5 6.75 1.5H10.5"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                      <path d="M16.5 7.5H13.5C11.25 7.5 10.5 6.75 10.5 4.5V1.5L16.5 7.5Z"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                      <path d="M5.25 9.75H9.75" stroke="#8E8E93" stroke-width="1.125"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M5.25 12.75H8.25" stroke="#8E8E93" stroke-width="1.125"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>


                                  </span>
                                  <span class="gray-text">جميع البيانات</span>
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item"  @click="showModalUpload"  data-bs-toggle="modal" href="#uplaodModal"
                                  role="button" >
                                  <span class="ps-2">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                      <path d="M6.75 7.13184L9 4.88184L11.25 7.13184" stroke="#8E8E93"
                                        stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M9 4.88184V10.8818" stroke="#8E8E93" stroke-width="1.125"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M4.5 12.3828C7.4175 13.3578 10.5825 13.3578 13.5 12.3828"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    </svg>



                                  </span>
                                  <span class="gray-text">رفع العقد</span>
                                </a>
                              </li>

                              <li>
                                <a @click="showModalTwo" class="dropdown-item" data-bs-toggle="modal" href="#editModalTwo"
                                  role="button">
                                  <span class="ps-2">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                      <path
                                        d="M12.0299 2.26495L6.11991 8.17495C5.89491 8.39995 5.66991 8.84245 5.62491 9.16495L5.30241 11.4224C5.18241 12.2399 5.75991 12.8099 6.57741 12.6974L8.83491 12.3749C9.14991 12.3299 9.59241 12.1049 9.82491 11.8799L15.7349 5.96995C16.7549 4.94995 17.2349 3.76495 15.7349 2.26495C14.2349 0.764945 13.0499 1.24495 12.0299 2.26495Z"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M11.1824 3.11328C11.6849 4.90578 13.0874 6.30828 14.8874 6.81828"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>




                                  </span>
                                  <span class="gray-text">تعديل</span>
                                </a>
                              </li>

                              <li><a class="dropdown-item" href="#" type="button" data-bs-toggle="modal"
                                  data-bs-target="#exampleModal2">
                                  <span class="ps-2">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M15.75 4.48486C13.2525 4.23736 10.74 4.10986 8.235 4.10986C6.75 4.10986 5.265 4.18486 3.78 4.33486L2.25 4.48486"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                      <path
                                        d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                      <path
                                        d="M14.1373 6.85498L13.6498 14.4075C13.5673 15.585 13.4998 16.5 11.4073 16.5H6.5923C4.4998 16.5 4.4323 15.585 4.3498 14.4075L3.8623 6.85498"
                                        stroke="#8E8E93" stroke-width="1.125" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                      <path d="M7.74756 12.375H10.2451" stroke="#8E8E93" stroke-width="1.125"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M7.125 9.375H10.875" stroke="#8E8E93" stroke-width="1.125"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>


                                  </span>
                                  <span class="gray-text">حذف</span>
                                </a></li>
                            </ul>



                        








                          </div>
                        </div>
                      </td>
                    </tr>





                  </tbody>
                </table>
              </div>

              <nav aria-label="...">
                <ul class="pagination justify-content-center gap-2">
                  <li class="page-item ">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                      <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.344 0.944H2.072L4.832 3.668L2.072 6.392H0.344L3.116 3.668L0.344 0.944Z"
                          fill="#33312C" />
                      </svg>

                    </a>
                  </li>
                  <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                  <li class="page-item ">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">4</a></li>
                  <li class="page-item"><a class="page-link" href="#">5</a></li>
                  <li class="page-item"><a class="page-link" href="#">6</a></li>

                  <li class="page-item">
                    <a class="page-link" href="#">
                      <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.936 6.392L0.176 3.668L2.936 0.944H4.664L1.892 3.668L4.664 6.392H2.936Z"
                          fill="#33312C" />
                      </svg>

                    </a>
                  </li>
                </ul>
              </nav>
            </div>

          </div>
        </div>
      </div>
    </div>


    <AddBuildingModal ref="modal"></AddBuildingModal>
    <editContractModal ref="modal2"></editContractModal>
    <uploadModal ref="modal3"></uploadModal>
    <AllData ref="modal4"></AllData>
  </div>
</template>

<script>

import AddBuildingModal from './AddBuildingModal.vue';
import editContractModal from './editContractModal.vue';
import uploadModal from './uploadModal.vue';
import AllData from './AllData.vue';


export default {
  components: {
    AddBuildingModal,
    editContractModal,
    uploadModal,
    AllData
  },
  methods: {
    showModal() {
      this.$refs.modal.visible = true;
    },
    showModalTwo() {
      this.$refs.modalTwo.visible = true;
    },
    showModalUpload() {
      this.$refs.modalTwo.visible = true;
    },
    showModalAllData() {
      this.$refs.modalTwo.visible = true;
    }
  }
};
</script>

<style>
.p-10 {
  padding: 10px;
}

.nav-tabs {
  border-bottom: solid #dee2e6 !important;
  padding: 0;
}

.new-tab {
  border: 0 !important;

}

.nav-tabs .nav-link.active {
  color: black !important;
  border-bottom: solid #000000 !important;
}

.nav-link {
  color: #C0C0C0 !important;
}

.inp-div {
  position: relative;
}

.inp-div input {
  width: 100%;
  padding: 11px 20px 11px 20px;
  border: 1px solid #D9DBE1;
  border-radius: 7px;
}

.inp-div span {
  position: absolute;
  top: 25%;
  left: 5px;
}

.add-contract {
  padding: 11px 20px 11px 20px;
}

.table-responsive {
  height: 66vh;
  overflow-y: scroll;
}

.page-link {
  border: 0;
  color: black;
  background-color: var(--light-gray);
  border-radius: 10px;
}

.page-item.active .page-link {
  background-color: var(--second-color);
}

.dropdown-toggle::after {
  display: none;

}

.delete-btn {
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
}

.tr-light td {
  color: var(--gray-text);
}

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

.btn-modall {
  background-color: white;
  color: #8E8E93;
  padding: 8px 30px;
  border: 1px solid #D9DBE1;
  border-radius: 10px;
  margin-left: 10px;
}
</style>