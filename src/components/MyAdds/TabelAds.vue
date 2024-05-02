<template>
    <div class="bg-light p-10">
        <div class="bg-white rounded p-3">
            <div class="d-flex justify-content-between align-items-center ">
                <div class="d-flex justify-content-right gap-3 flex-wrap">
                    <div class=" d-flex ">
                        <label for="" class=" d-flex align-self-center">حالة العقار</label>
                    </div>
                    <div class="dropdown ">
                        <button class="btn btn-light-g dropdown-toggle ps-5 text-end" type="button"
                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            الكل
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div class="searech-inp">
                        <input type="text" placeholder="ابحث هنا">
                        <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 19.0008L13.803 13.8038M13.803 13.8038C15.2096 12.3972 15.9998 10.4895 15.9998 8.50028C15.9998 6.51108 15.2096 4.60336 13.803 3.19678C12.3965 1.79021 10.4887 1 8.49955 1C6.51035 1 4.60262 1.79021 3.19605 3.19678C1.78947 4.60336 0.999268 6.51108 0.999268 8.50028C0.999268 10.4895 1.78947 12.3972 3.19605 13.8038C4.60262 15.2104 6.51035 16.0006 8.49955 16.0006C10.4887 16.0006 12.3965 15.2104 13.803 13.8038Z"
                                    stroke="#3498F5" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="">
                    <router-link to="/myads/add" type="button" class="btn btn-primary">
                        <span> اضافة عقار جديد </span>
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 11H14" stroke="white" stroke-width="1.3125" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M10.5 14.5V7.5" stroke="white" stroke-width="1.3125" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M7.875 19.75H13.125C17.5 19.75 19.25 18 19.25 13.625V8.375C19.25 4 17.5 2.25 13.125 2.25H7.875C3.5 2.25 1.75 4 1.75 8.375V13.625C1.75 18 3.5 19.75 7.875 19.75Z"
                                stroke="white" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </router-link>
                </div>

            </div>






            <div class="table-responsive pt-5">
                <table class="table">

                    <tbody>
                        <tr class="tr-light">
                            <td scope="col">م</td>
                            <td scope="col">اسم العقار</td>
                            <td scope="col">الحالة</td>
                            <td scope="col">المساحة</td>
                            <td scope="col">عرض الشارع</td>
                            <td scope="col">عدد الغرف</td>
                            <td scope="col">الصالات</td>
                            <td scope="col">رقم الدور</td>
                            <td scope="col">الخدمات</td>
                            <td scope="col">الفئة</td>
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
                            <td class="second-color-text"><span>مياه,</span> <span>كهرباء</span></td>
                            <td>فئة 1 ,فئة 2</td>
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
                                                <router-link to="/myads/1" class="dropdown-item">
                                                    <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.75 16.5H17.25" stroke="#8E8E93"
                                                                stroke-width="1.125" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M14.835 16.5076V13.1626" stroke="#8E8E93"
                                                                stroke-width="1.125" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M14.8502 8.16748C13.9352 8.16748 13.2002 8.90249 13.2002 9.81749V11.52C13.2002 12.435 13.9352 13.17 14.8502 13.17C15.7652 13.17 16.5002 12.435 16.5002 11.52V9.81749C16.5002 8.90249 15.7652 8.16748 14.8502 8.16748Z"
                                                                stroke="#8E8E93" stroke-width="1.125"
                                                                stroke-miterlimit="10" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M1.5752 16.4998V4.52234C1.5752 3.01484 2.32523 2.25732 3.81773 2.25732H8.49022C9.98272 2.25732 10.7252 3.01484 10.7252 4.52234V16.4998"
                                                                stroke="#8E8E93" stroke-width="1.125"
                                                                stroke-miterlimit="10" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path d="M4.3501 6.1875H8.06261" stroke="#8E8E93"
                                                                stroke-width="1.125" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M4.3501 9H8.06261" stroke="#8E8E93"
                                                                stroke-width="1.125" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M6.1875 16.5V13.6875" stroke="#8E8E93"
                                                                stroke-width="1.125" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                    <span>عرض البيانات</span>
                                                </router-link>
                                            </li>
                                            <li @click="toggleStop" class="clickable" v-show="!showStop">
                                                <a class="dropdown-item" href="#">
                                                    <span>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M12.1125 9.6224L10.815 10.0574C10.455 10.1774 10.1775 10.4549 10.0575 10.8149L9.62252 12.1124C9.25502 13.2299 7.68002 13.2074 7.33502 12.0899L5.87252 7.37991C5.58752 6.44241 6.45002 5.57992 7.37252 5.86492L12.09 7.3274C13.2075 7.6799 13.2225 9.2549 12.1125 9.6224Z"
                                                                stroke="#8E8E93" stroke-width="1.125"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                                                                stroke="#8E8E93" stroke-width="1.125"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                    </span>
                                                    <span>تشغيل الاعلان</span>

                                                </a>
                                            </li>
                                            <li @click="toggleStop" class="clickable" v-show="showStop"><a
                                                    class="dropdown-item" href="#">
                                                    <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M11.175 1.5H6.825C6.315 1.5 5.595 1.8 5.235 2.16L2.16 5.23501C1.8 5.59501 1.5 6.315 1.5 6.825V11.175C1.5 11.685 1.8 12.405 2.16 12.765L5.235 15.84C5.595 16.2 6.315 16.5 6.825 16.5H11.175C11.685 16.5 12.405 16.2 12.765 15.84L15.84 12.765C16.2 12.405 16.5 11.685 16.5 11.175V6.825C16.5 6.315 16.2 5.59501 15.84 5.23501L12.765 2.16C12.405 1.8 11.685 1.5 11.175 1.5Z"
                                                                stroke="#8E8E93" stroke-width="1.125"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M3.70508 14.3101L14.3101 3.70508" stroke="#8E8E93"
                                                                stroke-width="1.125" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                    <span>ايقاف الاعلان</span>

                                                </a>
                                            </li>

                                            <li>
                                                <a class="dropdown-item" href="#">

                                                    <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M16.4476 9.64459C16.4326 9.78709 16.4101 9.92209 16.3726 10.0571C15.5926 9.39709 14.5801 8.99959 13.4776 8.99959C10.9951 8.99959 8.97762 11.0171 8.97762 13.4996C8.97762 14.6021 9.37512 15.6146 10.0351 16.3946C9.90011 16.4321 9.76511 16.4546 9.62261 16.4696C8.98511 16.5296 8.33261 16.4996 7.65761 16.3871C4.57511 15.8621 2.09261 13.3646 1.58261 10.2746C0.735115 5.13709 5.11512 0.757087 10.2526 1.60459C13.3426 2.11459 15.8401 4.59709 16.3651 7.67959C16.4776 8.35459 16.5076 9.00709 16.4476 9.64459Z"
                                                                stroke="#8E8E93" stroke-width="1.125"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M16.3725 10.0575C16.2675 10.425 16.0725 10.755 15.795 11.0325L11.01 15.8175C10.7325 16.095 10.4025 16.29 10.035 16.395C9.37504 15.615 8.97754 14.6025 8.97754 13.5C8.97754 11.0175 10.995 9 13.4775 9C14.58 9 15.5925 9.3975 16.3725 10.0575Z"
                                                                stroke="#8E8E93" stroke-width="1.125"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                    <span>تم حجز العقار </span>

                                                </a>
                                            </li>

                                            <li><a class="dropdown-item" data-bs-toggle="modal"
                                                    data-bs-target="#makead">
                                                    <span>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75"
                                                                stroke="#8E8E93" stroke-width="1.125"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M12.0299 2.26495L6.11991 8.17495C5.89491 8.39995 5.66991 8.84245 5.62491 9.16495L5.30241 11.4224C5.18241 12.2399 5.75991 12.8099 6.57741 12.6974L8.83491 12.3749C9.14991 12.3299 9.59241 12.1049 9.82491 11.8799L15.7349 5.96995C16.7549 4.94995 17.2349 3.76495 15.7349 2.26495C14.2349 0.764945 13.0499 1.24495 12.0299 2.26495Z"
                                                                stroke="#8E8E93" stroke-width="1.125"
                                                                stroke-miterlimit="10" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M11.1824 3.1123C11.6849 4.9048 13.0874 6.3073 14.8874 6.8173"
                                                                stroke="#8E8E93" stroke-width="1.125"
                                                                stroke-miterlimit="10" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>

                                                    </span>
                                                    <span>تعديل</span>
                                                </a></li>
                                            <li><a class="dropdown-item" href="#" type="button" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal2">
                                                    <span>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M15.75 4.48486C13.2525 4.23736 10.74 4.10986 8.235 4.10986C6.75 4.10986 5.265 4.18486 3.78 4.33486L2.25 4.48486"
                                                                stroke="#8E8E93" stroke-width="1.125"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
                                                                stroke="#8E8E93" stroke-width="1.125"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M14.1373 6.85498L13.6498 14.4075C13.5673 15.585 13.4998 16.5 11.4073 16.5H6.5923C4.4998 16.5 4.4323 15.585 4.3498 14.4075L3.8623 6.85498"
                                                                stroke="#8E8E93" stroke-width="1.125"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M7.74756 12.375H10.2451" stroke="#8E8E93"
                                                                stroke-width="1.125" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path d="M7.125 9.375H10.875" stroke="#8E8E93"
                                                                stroke-width="1.125" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>


                                                    </span>
                                                    <span>حذف</span>
                                                </a></li>
                                        </ul>

                                      
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">1</td>
                            <td class="second-color-text">اسم العقار </td>
                            <td><span class="completed">تم الحجز </span></td>
                            <td>150 م</td>
                            <td>6 م </td>
                            <td>12</td>
                            <td>2</td>
                            <td>2</td>
                            <td class="second-color-text"><span>مياه,</span> <span>كهرباء</span></td>
                            <td>فئة 1 ,فئة 2</td>
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
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">1</td>
                            <td class="second-color-text">اسم العقار </td>
                            <td><span class="stoped">متوقف </span></td>
                            <td>150 م</td>
                            <td>6 م </td>
                            <td>12</td>
                            <td>2</td>
                            <td>2</td>
                            <td class="second-color-text"><span>مياه,</span> <span>كهرباء</span></td>
                            <td>فئة 1 ,فئة 2</td>
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
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">1</td>
                            <td class="second-color-text">اسم العقار </td>
                            <td><span class="waiting">انتظار (4) </span></td>
                            <td>150 م</td>
                            <td>6 م </td>
                            <td>12</td>
                            <td>2</td>
                            <td>2</td>
                            <td class="second-color-text"><span>مياه,</span> <span>كهرباء</span></td>
                            <td>فئة 1 ,فئة 2</td>
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
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
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
                            <td class="second-color-text"><span>مياه,</span> <span>كهرباء</span></td>
                            <td>فئة 1 ,فئة 2</td>
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
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
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
                            <td class="second-color-text"><span>مياه,</span> <span>كهرباء</span></td>
                            <td>فئة 1 ,فئة 2</td>
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
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
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
                            <td class="second-color-text"><span>مياه,</span> <span>كهرباء</span></td>
                            <td>فئة 1 ,فئة 2</td>
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
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
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
                            <td class="second-color-text"><span>مياه,</span> <span>كهرباء</span></td>
                            <td>فئة 1 ,فئة 2</td>
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
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
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
                            <td class="second-color-text"><span>مياه,</span> <span>كهرباء</span></td>
                            <td>فئة 1 ,فئة 2</td>
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
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
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
                            <td class="second-color-text"><span>مياه,</span> <span>كهرباء</span></td>
                            <td>فئة 1 ,فئة 2</td>
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
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>



                    </tbody>
                </table>
            </div>
              <!-- Modal -->
              <div class="modal fade" id="exampleModal2" tabindex="-1"
                                            aria-labelledby="exampleModal2Label" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content p-3">

                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>

                                                    <div class="modal-body ">
                                                        <div class="text-center">
                                                            <img src="/images/delete.png" alt="">
                                                            <h4 class="py-3">حذف العقار x</h4>
                                                            <h4>هل أنت متأكد من حذف هذا العقار نهائيا ؟</h4>
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
</template>

<script>
import { RouterLink } from 'vue-router';
import MakeAdModal from '../Ads/MakeAdModal.vue';
export default {


    data() {
        return {
            showStop: false
        };
    },
    methods: {
        toggleStop() {
            this.showStop = !this.showStop;
        }
    },
    components: {
        MakeAdModal,
    }
};
</script>

<style>
.page-second-container {
    border-radius: 10px;
    background-color: white;
}

.searech-inp {
    position: relative;
}

.searech-inp input {
    background-color: var(--light-gray);
    border: 0;
    padding: 8px;
    border-radius: 10px;


}

.searech-inp span {
    position: absolute;
    left: 3px;
    top: 8px;
}

.btn-light-g {
    border-radius: 10px;
    background-color: var(--light-gray);
}

.choices .dropdown-toggle::after {
    display: none;
}

.tr-light td {
    color: var(--gray-text);
}

.second-color-text {
    color: var(--second-color);
}

.present-span {
    background-color: var(--light-gray);
    padding: 2px 8px;
    border-radius: 5px;
}

.completed {
    background-color: #27AE601A;
    color: var(--green);
    padding: 2px 8px;
    border-radius: 5px;
}

.stoped {
    background-color: #C32B431A;
    color: #C32B43;
    padding: 2px 8px;
    border-radius: 5px;
}

.waiting {
    background-color: #3498F51A;
    color: var(--blue);
    padding: 2px 8px;
    border-radius: 5px;
}

.p-10 {
    padding: 10px;
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

.table-responsive {
    height: 68vh;
    overflow-y: scroll;
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
</style>