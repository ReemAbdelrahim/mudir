<template>
    <div class="page-container">
        <div class="p-10 bg-light">
            <div class=" p-2">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <ul class="nav nav-tabs " id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active new-tab" id="home-tab" data-bs-toggle="tab"
                                        data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                        aria-selected="true">نماذج الأعمال</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link new-tab" id="profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                        aria-selected="false">أعمالي
                                        المسجلة</button>
                                </li>

                            </ul>
                        </div>
                        <div class="col-lg-5">
                            <div class="d-flex flex-wrap mt-3">

                                <div class="inp-div w-50">
                                    <input type="text">
                                    <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19 19.0008L13.803 13.8038M13.803 13.8038C15.2096 12.3972 15.9998 10.4895 15.9998 8.50028C15.9998 6.51108 15.2096 4.60336 13.803 3.19678C12.3965 1.79021 10.4887 1 8.49955 1C6.51035 1 4.60262 1.79021 3.19605 3.19678C1.78947 4.60336 0.999268 6.51108 0.999268 8.50028C0.999268 10.4895 1.78947 12.3972 3.19605 13.8038C4.60262 15.2104 6.51035 16.0006 8.49955 16.0006C10.4887 16.0006 12.3965 15.2104 13.803 13.8038Z"
                                                stroke="#3498F5" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="w-50 text-center ">
                                    <button class="btn btn-primary add-contract"  @click="showServiceRequest"
                                                        data-bs-toggle="modal" href="#service" role="button">
                                        طلب خدمة الإشتراك
                                        <span>
                                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.905 8.71141L0 0.503906V21.2064H2.3625V5.50891L8.05 10.2339L9.905 8.71141Z"
                                                    fill="white" />
                                                <path
                                                    d="M20.6149 0.503906L4.4624 13.8564V21.2064H16.0999V13.8564L12.5299 10.8989L10.6924 12.4214L13.7549 14.9589V18.8439H6.8249V14.9589L18.2699 5.50891V21.2064H20.6149V0.503906Z"
                                                    fill="white" />
                                            </svg>

                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="tab-content mt-3" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                            <div class="container-fluid">

                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="mb-3">
                                            <div class="decoration-card">
                                                <img src="/images/decorationone.jpg" alt="">
                                                <div class="overlay"></div>
                                                <div class="save-btnn">
                                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.25 9.04883C11.03 9.69883 12.97 9.69883 14.75 9.04883"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M16.8196 2H7.17958C5.04958 2 3.31958 3.74 3.31958 5.86V19.95C3.31958 21.75 4.60958 22.51 6.18958 21.64L11.0696 18.93C11.5896 18.64 12.4296 18.64 12.9396 18.93L17.8196 21.64C19.3996 22.52 20.6896 21.76 20.6896 19.95V5.86C20.6796 3.74 18.9496 2 16.8196 2Z"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M16.8196 2H7.17958C5.04958 2 3.31958 3.74 3.31958 5.86V19.95C3.31958 21.75 4.60958 22.51 6.18958 21.64L11.0696 18.93C11.5896 18.64 12.4296 18.64 12.9396 18.93L17.8196 21.64C19.3996 22.52 20.6896 21.76 20.6896 19.95V5.86C20.6796 3.74 18.9496 2 16.8196 2Z"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div class="decoration-card-content p-2">
                                                    <h5 class="text-white">ديكورات لغرفة المعيشة</h5>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex gap-2 pt-3">
                                                            <img src="/images/mark.jpg" alt="" class="mark-img">
                                                            <div class="text-white">
                                                                <p>شركة المنارة</p>
                                                                <p><span><svg width="16" height="15" viewBox="0 0 16 15"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M7.10326 0.816985C7.47008 0.0737391 8.52992 0.07374 8.89674 0.816986L10.4124 3.88798C10.558 4.18313 10.8396 4.38769 11.1653 4.43502L14.5543 4.92748C15.3746 5.04667 15.7021 6.05464 15.1086 6.63317L12.6562 9.02361C12.4205 9.25335 12.313 9.58435 12.3686 9.90874L12.9475 13.2841C13.0877 14.101 12.2302 14.724 11.4966 14.3383L8.46534 12.7446C8.17402 12.5915 7.82598 12.5915 7.53466 12.7446L4.5034 14.3383C3.76978 14.724 2.91235 14.101 3.05246 13.2841L3.63137 9.90874C3.68701 9.58435 3.57946 9.25335 3.34378 9.02361L0.89144 6.63317C0.297923 6.05464 0.625434 5.04667 1.44565 4.92748L4.8347 4.43502C5.16041 4.38769 5.44197 4.18313 5.58764 3.88798L7.10326 0.816985Z"
                                                                                fill="#FFCA27" />
                                                                        </svg>
                                                                    </span>
                                                                    <span>4.9</span>
                                                                    <span>(314)</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <router-link to="/decoration/1" class=" mt-3 service-detailss">تفاصيل الخدمة</router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="mb-3">
                                            <div class="decoration-card">
                                                <img src="/images/decorationone.jpg" alt="">
                                                <div class="overlay"></div>
                                                <div class="save-btnn">
                                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.25 9.04883C11.03 9.69883 12.97 9.69883 14.75 9.04883"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M16.8196 2H7.17958C5.04958 2 3.31958 3.74 3.31958 5.86V19.95C3.31958 21.75 4.60958 22.51 6.18958 21.64L11.0696 18.93C11.5896 18.64 12.4296 18.64 12.9396 18.93L17.8196 21.64C19.3996 22.52 20.6896 21.76 20.6896 19.95V5.86C20.6796 3.74 18.9496 2 16.8196 2Z"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M16.8196 2H7.17958C5.04958 2 3.31958 3.74 3.31958 5.86V19.95C3.31958 21.75 4.60958 22.51 6.18958 21.64L11.0696 18.93C11.5896 18.64 12.4296 18.64 12.9396 18.93L17.8196 21.64C19.3996 22.52 20.6896 21.76 20.6896 19.95V5.86C20.6796 3.74 18.9496 2 16.8196 2Z"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div class="decoration-card-content p-2">
                                                    <h5 class="text-white">ديكورات لغرفة المعيشة</h5>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex gap-2 pt-3">
                                                            <img src="/images/mark.jpg" alt="" class="mark-img">
                                                            <div class="text-white">
                                                                <p>شركة المنارة</p>
                                                                <p><span><svg width="16" height="15" viewBox="0 0 16 15"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M7.10326 0.816985C7.47008 0.0737391 8.52992 0.07374 8.89674 0.816986L10.4124 3.88798C10.558 4.18313 10.8396 4.38769 11.1653 4.43502L14.5543 4.92748C15.3746 5.04667 15.7021 6.05464 15.1086 6.63317L12.6562 9.02361C12.4205 9.25335 12.313 9.58435 12.3686 9.90874L12.9475 13.2841C13.0877 14.101 12.2302 14.724 11.4966 14.3383L8.46534 12.7446C8.17402 12.5915 7.82598 12.5915 7.53466 12.7446L4.5034 14.3383C3.76978 14.724 2.91235 14.101 3.05246 13.2841L3.63137 9.90874C3.68701 9.58435 3.57946 9.25335 3.34378 9.02361L0.89144 6.63317C0.297923 6.05464 0.625434 5.04667 1.44565 4.92748L4.8347 4.43502C5.16041 4.38769 5.44197 4.18313 5.58764 3.88798L7.10326 0.816985Z"
                                                                                fill="#FFCA27" />
                                                                        </svg>
                                                                    </span>
                                                                    <span>4.9</span>
                                                                    <span>(314)</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <button class=" mt-3 service-detailss">تفاصيل الخدمة</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="mb-3">
                                            <div class="decoration-card">
                                                <img src="/images/decorationone.jpg" alt="">
                                                <div class="overlay"></div>
                                                <div class="save-btnn">
                                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.25 9.04883C11.03 9.69883 12.97 9.69883 14.75 9.04883"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M16.8196 2H7.17958C5.04958 2 3.31958 3.74 3.31958 5.86V19.95C3.31958 21.75 4.60958 22.51 6.18958 21.64L11.0696 18.93C11.5896 18.64 12.4296 18.64 12.9396 18.93L17.8196 21.64C19.3996 22.52 20.6896 21.76 20.6896 19.95V5.86C20.6796 3.74 18.9496 2 16.8196 2Z"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M16.8196 2H7.17958C5.04958 2 3.31958 3.74 3.31958 5.86V19.95C3.31958 21.75 4.60958 22.51 6.18958 21.64L11.0696 18.93C11.5896 18.64 12.4296 18.64 12.9396 18.93L17.8196 21.64C19.3996 22.52 20.6896 21.76 20.6896 19.95V5.86C20.6796 3.74 18.9496 2 16.8196 2Z"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div class="decoration-card-content p-2">
                                                    <h5 class="text-white">ديكورات لغرفة المعيشة</h5>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex gap-2 pt-3">
                                                            <img src="/images/mark.jpg" alt="" class="mark-img">
                                                            <div class="text-white">
                                                                <p>شركة المنارة</p>
                                                                <p><span><svg width="16" height="15" viewBox="0 0 16 15"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M7.10326 0.816985C7.47008 0.0737391 8.52992 0.07374 8.89674 0.816986L10.4124 3.88798C10.558 4.18313 10.8396 4.38769 11.1653 4.43502L14.5543 4.92748C15.3746 5.04667 15.7021 6.05464 15.1086 6.63317L12.6562 9.02361C12.4205 9.25335 12.313 9.58435 12.3686 9.90874L12.9475 13.2841C13.0877 14.101 12.2302 14.724 11.4966 14.3383L8.46534 12.7446C8.17402 12.5915 7.82598 12.5915 7.53466 12.7446L4.5034 14.3383C3.76978 14.724 2.91235 14.101 3.05246 13.2841L3.63137 9.90874C3.68701 9.58435 3.57946 9.25335 3.34378 9.02361L0.89144 6.63317C0.297923 6.05464 0.625434 5.04667 1.44565 4.92748L4.8347 4.43502C5.16041 4.38769 5.44197 4.18313 5.58764 3.88798L7.10326 0.816985Z"
                                                                                fill="#FFCA27" />
                                                                        </svg>
                                                                    </span>
                                                                    <span>4.9</span>
                                                                    <span>(314)</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <button class=" mt-3 service-detailss">تفاصيل الخدمة</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="mb-3">
                                            <div class="decoration-card">
                                                <img src="/images/decorationone.jpg" alt="">
                                                <div class="overlay"></div>
                                                <div class="save-btnn">
                                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.25 9.04883C11.03 9.69883 12.97 9.69883 14.75 9.04883"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M16.8196 2H7.17958C5.04958 2 3.31958 3.74 3.31958 5.86V19.95C3.31958 21.75 4.60958 22.51 6.18958 21.64L11.0696 18.93C11.5896 18.64 12.4296 18.64 12.9396 18.93L17.8196 21.64C19.3996 22.52 20.6896 21.76 20.6896 19.95V5.86C20.6796 3.74 18.9496 2 16.8196 2Z"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M16.8196 2H7.17958C5.04958 2 3.31958 3.74 3.31958 5.86V19.95C3.31958 21.75 4.60958 22.51 6.18958 21.64L11.0696 18.93C11.5896 18.64 12.4296 18.64 12.9396 18.93L17.8196 21.64C19.3996 22.52 20.6896 21.76 20.6896 19.95V5.86C20.6796 3.74 18.9496 2 16.8196 2Z"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div class="decoration-card-content p-2">
                                                    <h5 class="text-white">ديكورات لغرفة المعيشة</h5>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex gap-2 pt-3">
                                                            <img src="/images/mark.jpg" alt="" class="mark-img">
                                                            <div class="text-white">
                                                                <p>شركة المنارة</p>
                                                                <p><span><svg width="16" height="15" viewBox="0 0 16 15"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M7.10326 0.816985C7.47008 0.0737391 8.52992 0.07374 8.89674 0.816986L10.4124 3.88798C10.558 4.18313 10.8396 4.38769 11.1653 4.43502L14.5543 4.92748C15.3746 5.04667 15.7021 6.05464 15.1086 6.63317L12.6562 9.02361C12.4205 9.25335 12.313 9.58435 12.3686 9.90874L12.9475 13.2841C13.0877 14.101 12.2302 14.724 11.4966 14.3383L8.46534 12.7446C8.17402 12.5915 7.82598 12.5915 7.53466 12.7446L4.5034 14.3383C3.76978 14.724 2.91235 14.101 3.05246 13.2841L3.63137 9.90874C3.68701 9.58435 3.57946 9.25335 3.34378 9.02361L0.89144 6.63317C0.297923 6.05464 0.625434 5.04667 1.44565 4.92748L4.8347 4.43502C5.16041 4.38769 5.44197 4.18313 5.58764 3.88798L7.10326 0.816985Z"
                                                                                fill="#FFCA27" />
                                                                        </svg>
                                                                    </span>
                                                                    <span>4.9</span>
                                                                    <span>(314)</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <button class=" mt-3 service-detailss">تفاصيل الخدمة</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="mb-3">
                                            <div class="decoration-card">
                                                <img src="/images/decorationone.jpg" alt="">
                                                <div class="overlay"></div>
                                                <div class="save-btnn">
                                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.25 9.04883C11.03 9.69883 12.97 9.69883 14.75 9.04883"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M16.8196 2H7.17958C5.04958 2 3.31958 3.74 3.31958 5.86V19.95C3.31958 21.75 4.60958 22.51 6.18958 21.64L11.0696 18.93C11.5896 18.64 12.4296 18.64 12.9396 18.93L17.8196 21.64C19.3996 22.52 20.6896 21.76 20.6896 19.95V5.86C20.6796 3.74 18.9496 2 16.8196 2Z"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M16.8196 2H7.17958C5.04958 2 3.31958 3.74 3.31958 5.86V19.95C3.31958 21.75 4.60958 22.51 6.18958 21.64L11.0696 18.93C11.5896 18.64 12.4296 18.64 12.9396 18.93L17.8196 21.64C19.3996 22.52 20.6896 21.76 20.6896 19.95V5.86C20.6796 3.74 18.9496 2 16.8196 2Z"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div class="decoration-card-content p-2">
                                                    <h5 class="text-white">ديكورات لغرفة المعيشة</h5>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex gap-2 pt-3">
                                                            <img src="/images/mark.jpg" alt="" class="mark-img">
                                                            <div class="text-white">
                                                                <p>شركة المنارة</p>
                                                                <p><span><svg width="16" height="15" viewBox="0 0 16 15"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M7.10326 0.816985C7.47008 0.0737391 8.52992 0.07374 8.89674 0.816986L10.4124 3.88798C10.558 4.18313 10.8396 4.38769 11.1653 4.43502L14.5543 4.92748C15.3746 5.04667 15.7021 6.05464 15.1086 6.63317L12.6562 9.02361C12.4205 9.25335 12.313 9.58435 12.3686 9.90874L12.9475 13.2841C13.0877 14.101 12.2302 14.724 11.4966 14.3383L8.46534 12.7446C8.17402 12.5915 7.82598 12.5915 7.53466 12.7446L4.5034 14.3383C3.76978 14.724 2.91235 14.101 3.05246 13.2841L3.63137 9.90874C3.68701 9.58435 3.57946 9.25335 3.34378 9.02361L0.89144 6.63317C0.297923 6.05464 0.625434 5.04667 1.44565 4.92748L4.8347 4.43502C5.16041 4.38769 5.44197 4.18313 5.58764 3.88798L7.10326 0.816985Z"
                                                                                fill="#FFCA27" />
                                                                        </svg>
                                                                    </span>
                                                                    <span>4.9</span>
                                                                    <span>(314)</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <button class=" mt-3 service-detailss">تفاصيل الخدمة</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="mb-3">
                                            <div class="decoration-card">
                                                <img src="/images/decorationone.jpg" alt="">
                                                <div class="overlay"></div>
                                                <div class="save-btnn">
                                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.25 9.04883C11.03 9.69883 12.97 9.69883 14.75 9.04883"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M16.8196 2H7.17958C5.04958 2 3.31958 3.74 3.31958 5.86V19.95C3.31958 21.75 4.60958 22.51 6.18958 21.64L11.0696 18.93C11.5896 18.64 12.4296 18.64 12.9396 18.93L17.8196 21.64C19.3996 22.52 20.6896 21.76 20.6896 19.95V5.86C20.6796 3.74 18.9496 2 16.8196 2Z"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M16.8196 2H7.17958C5.04958 2 3.31958 3.74 3.31958 5.86V19.95C3.31958 21.75 4.60958 22.51 6.18958 21.64L11.0696 18.93C11.5896 18.64 12.4296 18.64 12.9396 18.93L17.8196 21.64C19.3996 22.52 20.6896 21.76 20.6896 19.95V5.86C20.6796 3.74 18.9496 2 16.8196 2Z"
                                                                stroke="#8E8E93" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div class="decoration-card-content p-2">
                                                    <h5 class="text-white">ديكورات لغرفة المعيشة</h5>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex gap-2 pt-3">
                                                            <img src="/images/mark.jpg" alt="" class="mark-img">
                                                            <div class="text-white">
                                                                <p>شركة المنارة</p>
                                                                <p><span><svg width="16" height="15" viewBox="0 0 16 15"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M7.10326 0.816985C7.47008 0.0737391 8.52992 0.07374 8.89674 0.816986L10.4124 3.88798C10.558 4.18313 10.8396 4.38769 11.1653 4.43502L14.5543 4.92748C15.3746 5.04667 15.7021 6.05464 15.1086 6.63317L12.6562 9.02361C12.4205 9.25335 12.313 9.58435 12.3686 9.90874L12.9475 13.2841C13.0877 14.101 12.2302 14.724 11.4966 14.3383L8.46534 12.7446C8.17402 12.5915 7.82598 12.5915 7.53466 12.7446L4.5034 14.3383C3.76978 14.724 2.91235 14.101 3.05246 13.2841L3.63137 9.90874C3.68701 9.58435 3.57946 9.25335 3.34378 9.02361L0.89144 6.63317C0.297923 6.05464 0.625434 5.04667 1.44565 4.92748L4.8347 4.43502C5.16041 4.38769 5.44197 4.18313 5.58764 3.88798L7.10326 0.816985Z"
                                                                                fill="#FFCA27" />
                                                                        </svg>
                                                                    </span>
                                                                    <span>4.9</span>
                                                                    <span>(314)</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <button class=" mt-3 service-detailss">تفاصيل الخدمة</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                            <div class="container-fluid">

                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="mb-3">
                                            <div class="decoration-card">
                                                <img src="/images/decorationone.jpg" alt="">
                                                <div class="overlay"></div>
                                                <div class="d-flex gap-2 buttons-div">
                                                    <button class="btn btn-green" @click="showEditModal"
                                                        data-bs-toggle="modal" href="#editWorkModal" role="button">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                                                                stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M16.04 3.01928L8.16 10.8993C7.86 11.1993 7.56 11.7893 7.5 12.2193L7.07 15.2293C6.91 16.3193 7.68 17.0793 8.77 16.9293L11.78 16.4993C12.2 16.4393 12.79 16.1393 13.1 15.8393L20.98 7.95928C22.34 6.59928 22.98 5.01928 20.98 3.01928C18.98 1.01928 17.4 1.65928 16.04 3.01928Z"
                                                                stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M14.91 4.15039C15.58 6.54039 17.45 8.41039 19.85 9.09039"
                                                                stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                    </button>

                                                    <button class="btn btn-danger" @click="showDeleteModal"
                                                        data-bs-toggle="modal" href="#DeleteModal" role="button">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047"
                                                                stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                                                                stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M18.85 9.14062L18.2 19.2106C18.09 20.7806 18 22.0006 15.21 22.0006H8.79002C6.00002 22.0006 5.91002 20.7806 5.80002 19.2106L5.15002 9.14062"
                                                                stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path d="M10.33 16.5H13.66" stroke="white"
                                                                stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path d="M9.5 12.5H14.5" stroke="white" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                    </button>
                                                    <router-link class="btn btn-secondary" to="/chats">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z"
                                                                stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z"
                                                                stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                    </router-link>
                                                </div>

                                                <div class="decoration-card-content p-2">
                                                    <h5 class="text-white">ديكورات لغرفة المعيشة</h5>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex gap-2 pt-3">
                                                            <img src="/images/mark.jpg" alt="" class="mark-img">
                                                            <div class="text-white">
                                                                <p>شركة المنارة</p>
                                                                <p><span><svg width="16" height="15" viewBox="0 0 16 15"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M7.10326 0.816985C7.47008 0.0737391 8.52992 0.07374 8.89674 0.816986L10.4124 3.88798C10.558 4.18313 10.8396 4.38769 11.1653 4.43502L14.5543 4.92748C15.3746 5.04667 15.7021 6.05464 15.1086 6.63317L12.6562 9.02361C12.4205 9.25335 12.313 9.58435 12.3686 9.90874L12.9475 13.2841C13.0877 14.101 12.2302 14.724 11.4966 14.3383L8.46534 12.7446C8.17402 12.5915 7.82598 12.5915 7.53466 12.7446L4.5034 14.3383C3.76978 14.724 2.91235 14.101 3.05246 13.2841L3.63137 9.90874C3.68701 9.58435 3.57946 9.25335 3.34378 9.02361L0.89144 6.63317C0.297923 6.05464 0.625434 5.04667 1.44565 4.92748L4.8347 4.43502C5.16041 4.38769 5.44197 4.18313 5.58764 3.88798L7.10326 0.816985Z"
                                                                                fill="#FFCA27" />
                                                                        </svg>
                                                                    </span>
                                                                    <span>4.9</span>
                                                                    <span>(314)</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <button class=" mt-3 service-detailss">تفاصيل الخدمة</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="mb-3">
                                            <div class="decoration-card">
                                                <img src="/images/decorationone.jpg" alt="">
                                                <div class="overlay"></div>
                                                <div class="d-flex gap-2 buttons-div">
                                                    <button class="btn btn-green" @click="showEditModal"
                                                        data-bs-toggle="modal" href="#editWorkModal" role="button">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                                                                stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M16.04 3.01928L8.16 10.8993C7.86 11.1993 7.56 11.7893 7.5 12.2193L7.07 15.2293C6.91 16.3193 7.68 17.0793 8.77 16.9293L11.78 16.4993C12.2 16.4393 12.79 16.1393 13.1 15.8393L20.98 7.95928C22.34 6.59928 22.98 5.01928 20.98 3.01928C18.98 1.01928 17.4 1.65928 16.04 3.01928Z"
                                                                stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M14.91 4.15039C15.58 6.54039 17.45 8.41039 19.85 9.09039"
                                                                stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                    </button>

                                                    <button class="btn btn-danger" @click="showDeleteModal"
                                                        data-bs-toggle="modal" href="#DeleteModal" role="button">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047"
                                                                stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                                                                stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M18.85 9.14062L18.2 19.2106C18.09 20.7806 18 22.0006 15.21 22.0006H8.79002C6.00002 22.0006 5.91002 20.7806 5.80002 19.2106L5.15002 9.14062"
                                                                stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path d="M10.33 16.5H13.66" stroke="white"
                                                                stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path d="M9.5 12.5H14.5" stroke="white" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                    </button>
                                                    <router-link class="btn btn-secondary" to="/chats">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z"
                                                                stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z"
                                                                stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                    </router-link>
                                                </div>

                                                <div class="decoration-card-content p-2">
                                                    <h5 class="text-white">ديكورات لغرفة المعيشة</h5>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex gap-2 pt-3">
                                                            <img src="/images/mark.jpg" alt="" class="mark-img">
                                                            <div class="text-white">
                                                                <p>شركة المنارة</p>
                                                                <p><span><svg width="16" height="15" viewBox="0 0 16 15"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M7.10326 0.816985C7.47008 0.0737391 8.52992 0.07374 8.89674 0.816986L10.4124 3.88798C10.558 4.18313 10.8396 4.38769 11.1653 4.43502L14.5543 4.92748C15.3746 5.04667 15.7021 6.05464 15.1086 6.63317L12.6562 9.02361C12.4205 9.25335 12.313 9.58435 12.3686 9.90874L12.9475 13.2841C13.0877 14.101 12.2302 14.724 11.4966 14.3383L8.46534 12.7446C8.17402 12.5915 7.82598 12.5915 7.53466 12.7446L4.5034 14.3383C3.76978 14.724 2.91235 14.101 3.05246 13.2841L3.63137 9.90874C3.68701 9.58435 3.57946 9.25335 3.34378 9.02361L0.89144 6.63317C0.297923 6.05464 0.625434 5.04667 1.44565 4.92748L4.8347 4.43502C5.16041 4.38769 5.44197 4.18313 5.58764 3.88798L7.10326 0.816985Z"
                                                                                fill="#FFCA27" />
                                                                        </svg>
                                                                    </span>
                                                                    <span>4.9</span>
                                                                    <span>(314)</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <button class=" mt-3 service-detailss">تفاصيل الخدمة</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>


        <EditWorkModal></EditWorkModal>
        <DeleteModal></DeleteModal>
        <ServiceRequest></ServiceRequest>

    </div>

</template>

<script>
import EditWorkModal from '../Decoration/EditWorkModal.vue';
import DeleteModal from '../Decoration/DeleteWorkModal.vue'
import ServiceRequest from '../Decoration/ServiceRequest.vue'


export default {
    components: {
        EditWorkModal,
        DeleteModal,
        ServiceRequest

    },
    methods: {
        showEditModal() {
            this.$refs.modal.visible = true;
        },
        showDeleteModal() {
            this.$refs.modal.visible = true;
        },
        showServiceRequest() {
            this.$refs.modal.visible = true;
        },
    }
};
</script>

<style>
.p-10 {
    padding: 10px;
}

.page-container {
    margin-right: 230px;
    height: 90vh;
    position: relative;
    overflow-x: hidden;
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
    background-color: transparent !important;
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

.decoration-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;

}

.decoration-card img {
    width: 100%;
    height: 300px;
}

.overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 300px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3745) 65.4%, rgba(0, 0, 0, 0.5) 100%);

}

.save-btnn {
    background-color: white;
    padding: 5px;
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 10.67px;
}

.mark-img {
    width: 50px !important;
    height: 50px !important;
    border-radius: 50%;
}

.decoration-card-content {
    position: absolute;
    top: 60%;
    width: 100%;
}

.service-detailss {
    background-color: white;
    border-radius: 10px;
    border: 0;
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 5px;
}

.scrooll {

    height: 85vh;
    overflow-y: scroll;
    overflow-x: hidden;
}

.buttons-div {
    position: absolute;
    top: 10px;
    right: 10px;
}

.btn-green {
    background-color: var(--green);

}
</style>