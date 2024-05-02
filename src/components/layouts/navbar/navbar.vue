<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white p-0 top-nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">الرئيسية</a>

      <div class="" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll gap-1 align-items-center">
          <li class="nav-item ad-link">
            <router-link to="myads/add" class="nav-link" aria-current="page" >
              <span>انشاء اعلان</span>

              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.3402 16.1099L16.914 16.5912C16.5202 16.7224 16.2052 17.0287 16.074 17.4312L15.5927 18.8574C15.1815 20.0912 13.449 20.0649 13.064 18.8312L11.4452 13.6249C11.1302 12.5924 12.084 11.6299 13.1077 11.9537L18.3227 13.5724C19.5477 13.9574 19.5652 15.6987 18.3402 16.1099Z"
                  stroke="#2E637F" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M19.25 11C19.25 6.17 15.33 2.25 10.5 2.25C5.67 2.25 1.75 6.17 1.75 11C1.75 15.83 5.67 19.75 10.5 19.75"
                  stroke="#2E637F" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link notification-link" href="#" type="button" data-bs-toggle="modal"
              data-bs-target="#exampleModal">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.5553 16.403L22.237 14.2097C21.9453 13.7314 21.6887 12.8097 21.6887 12.2497V10.068C21.6887 5.83302 18.247 2.39136 14.0237 2.39136C9.78865 2.40302 6.34698 5.83302 6.34698 10.068V12.238C6.34698 12.798 6.09032 13.7197 5.81032 14.198L4.49198 16.3914C3.99032 17.243 3.87365 18.2114 4.18865 19.0514C4.50365 19.903 5.21532 20.5797 6.14865 20.883C7.40865 21.303 8.68032 21.6064 9.97532 21.828C10.1037 21.8514 10.232 21.863 10.3603 21.8864C10.5237 21.9097 10.6987 21.933 10.8737 21.9564C11.177 22.003 11.4803 22.038 11.7953 22.0614C12.5303 22.1314 13.277 22.1664 14.0237 22.1664C14.7587 22.1664 15.4937 22.1314 16.217 22.0614C16.4853 22.038 16.7537 22.0147 17.0103 21.9797C17.2203 21.9564 17.4303 21.933 17.6403 21.898C17.7687 21.8864 17.897 21.863 18.0253 21.8397C19.332 21.6297 20.627 21.303 21.887 20.883C22.7853 20.5797 23.4737 19.903 23.8003 19.0397C24.127 18.1647 24.0337 17.208 23.5553 16.403ZM14.8753 11.6664C14.8753 12.1564 14.4787 12.553 13.9887 12.553C13.4987 12.553 13.102 12.1564 13.102 11.6664V8.04969C13.102 7.55969 13.4987 7.16302 13.9887 7.16302C14.4787 7.16302 14.8753 7.55969 14.8753 8.04969V11.6664Z"
                  fill="#3498F5" />
                <path
                  d="M17.3019 23.3449C16.8119 24.6983 15.5169 25.6666 14.0002 25.6666C13.0785 25.6666 12.1685 25.2933 11.5269 24.6283C11.1535 24.2783 10.8735 23.8116 10.7102 23.3333C10.8619 23.3566 11.0135 23.3683 11.1769 23.3916C11.4452 23.4266 11.7252 23.4616 12.0052 23.4849C12.6702 23.5433 13.3469 23.5783 14.0235 23.5783C14.6885 23.5783 15.3535 23.5433 16.0069 23.4849C16.2519 23.4616 16.4969 23.4499 16.7302 23.4149C16.9169 23.3916 17.1035 23.3683 17.3019 23.3449Z"
                  fill="#3498F5" />
              </svg>
            </a>
          </li>

          <li class="nav-item profile-mob dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
              aria-expanded="false">
              <div class="d-flex gap-3">
                <img src="/images/profile.png" alt="" class="profile-img" />
                <div>
                  <p class="m-0">عبدالرحمن محمد</p>
                  <p class="m-0">+20 1121212155</p>
                </div>
              </div>
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <router-link to="/Profile" class="dropdown-item" >
                  <span class="ps-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.4375 4.5C5.4375 2.53249 7.03249 0.9375 9 0.9375C10.9675 0.9375 12.5625 2.53249 12.5625 4.5C12.5625 6.46751 10.9675 8.0625 9 8.0625C7.03249 8.0625 5.4375 6.46751 5.4375 4.5ZM6.6 9.9375C4.30111 9.9375 2.4375 11.8011 2.4375 14.1C2.4375 15.7361 3.76386 17.0625 5.4 17.0625H12.6C14.2361 17.0625 15.5625 15.7361 15.5625 14.1C15.5625 11.8011 13.6989 9.9375 11.4 9.9375H6.6Z"
                        fill="#8E8E93" />
                    </svg>
                  </span>
                  <span>الملف الشخصي</span>
                </router-link>
              </li>
              <li><a class="dropdown-item" href="#">

                  <span class="ps-2">
                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.325 8.7C2.4 8.625 2.4 8.55 2.475 8.475L4.725 6.225C5.025 5.925 5.475 5.925 5.775 6.225C6.075 6.525 6.075 6.975 5.775 7.275L4.8 8.25H8.25C8.7 8.25 9 8.55 9 9C9 9.45 8.7 9.75 8.25 9.75H4.8L5.775 10.725C6.075 11.025 6.075 11.475 5.775 11.775C5.625 11.925 5.4 12 5.25 12C5.1 12 4.875 11.925 4.725 11.775L2.475 9.525C2.4 9.45 2.325 9.375 2.325 9.3C2.25 9.075 2.25 8.925 2.325 8.7Z"
                        fill="#8E8E93" />
                      <path
                        d="M6.375 13.575C7.2 14.025 8.1 14.25 9 14.25C11.925 14.25 14.25 11.925 14.25 9C14.25 6.075 11.925 3.75 9 3.75C8.1 3.75 7.2 3.975 6.375 4.425C6 4.65 5.55 4.5 5.325 4.125C5.1 3.75 5.25 3.3 5.625 3.075C6.675 2.55 7.8 2.25 9 2.25C12.75 2.25 15.75 5.25 15.75 9C15.75 12.75 12.75 15.75 9 15.75C7.8 15.75 6.675 15.45 5.625 14.85C5.25 14.625 5.175 14.175 5.325 13.8C5.55 13.5 6 13.35 6.375 13.575Z"
                        fill="#8E8E93" />
                    </svg>

                  </span>
                  <span>تسجيل الخروج</span>
                </a></li>

            </ul>

          </li>
          <li>
            <div class="d-lg-none d-block">
              <span @click="toggleSide()"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.05 11H3.95C3.42533 11 3 11.4253 3 11.95V12.05C3 12.5747 3.42533 13 3.95 13H20.05C20.5747 13 21 12.5747 21 12.05V11.95C21 11.4253 20.5747 11 20.05 11Z"
                    fill="#8E8E93" />
                  <path
                    d="M20.05 16H3.95C3.42533 16 3 16.4253 3 16.95V17.05C3 17.5747 3.42533 18 3.95 18H20.05C20.5747 18 21 17.5747 21 17.05V16.95C21 16.4253 20.5747 16 20.05 16Z"
                    fill="#8E8E93" />
                  <path
                    d="M20.05 6H3.95C3.42533 6 3 6.42533 3 6.95V7.05C3 7.57467 3.42533 8 3.95 8H20.05C20.5747 8 21 7.57467 21 7.05V6.95C21 6.42533 20.5747 6 20.05 6Z"
                    fill="#8E8E93" />
                </svg>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>

  

    <!-- Notification modal  -->
    <!-- Button trigger modal -->

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content2">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">اشعارات</h3>
            <div class="text-center">
              <span class="text-primary">تحديد الكل مقروء</span>
            </div>
          </div>
          <div class="modal-body">
            <div class="notify-section">
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <img src="/images/Rectangle 3.png" alt="" />
                  <div class="pe-3">
                    <p class="m-0 text-bold">عبدالرحمن أحمد علي</p>
                    <p class="m-0 gray-text">يريد حجز العقار X</p>
                  </div>
                </div>
                <div class="notification-time">
                  <span>منذ ساعة</span>
                </div>
              </div>
            </div>
            <div class="notify-section">
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <img src="/images/Group 12.png" alt="" />
                  <div class="pe-3">
                    <p class="m-0 text-bold">النظام</p>
                    <p class="m-0 gray-text">يريد حجز العقار X</p>
                  </div>
                </div>
                <div class="notification-time">
                  <span>منذ 1 يوم</span>
                </div>
              </div>
              <div class="d-flex gap-2 pt-3">
                <button class="complete-btn">تم السداد</button>
                <button class="delay-btn">تأجيل السداد الشهري</button>
                <button class="notify-btn">ذكرني بعد اليوم</button>
              </div>
            </div>

            <div class="notify-section">
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <img src="/images/Group 12.png" alt="" />
                  <div class="pe-3">
                    <p class="m-0 text-bold">عبدالرحمن أحمد علي</p>
                    <div class="d-flex">
                      <p class="m-0 gray-text">تستطيع تقييم خدمة X</p>
                      <div class="review pe-5">
                        <span><svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M6.56293 0.668365C6.79493 -0.0456511 7.80507 -0.0456486 8.03707 0.668367L9.21398 4.29053C9.31773 4.60985 9.6153 4.82604 9.95105 4.82604H13.7596C14.5104 4.82604 14.8225 5.78675 14.2152 6.22803L11.134 8.46665C10.8623 8.664 10.7487 9.01381 10.8524 9.33313L12.0293 12.9553C12.2613 13.6693 11.4441 14.2631 10.8367 13.8218L7.75553 11.5832C7.48391 11.3858 7.11609 11.3858 6.84447 11.5832L3.76327 13.8218C3.15589 14.2631 2.33867 13.6693 2.57067 12.9553L3.74758 9.33313C3.85133 9.01381 3.73767 8.664 3.46604 8.46665L0.384844 6.22803C-0.222534 5.78675 0.0896189 4.82604 0.84038 4.82604H4.64895C4.9847 4.82604 5.28227 4.60985 5.38602 4.29053L6.56293 0.668365Z"
                              fill="#D9DBE1" />
                          </svg>
                        </span>
                        <span><svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M6.56293 0.668365C6.79493 -0.0456511 7.80507 -0.0456486 8.03707 0.668367L9.21398 4.29053C9.31773 4.60985 9.6153 4.82604 9.95105 4.82604H13.7596C14.5104 4.82604 14.8225 5.78675 14.2152 6.22803L11.134 8.46665C10.8623 8.664 10.7487 9.01381 10.8524 9.33313L12.0293 12.9553C12.2613 13.6693 11.4441 14.2631 10.8367 13.8218L7.75553 11.5832C7.48391 11.3858 7.11609 11.3858 6.84447 11.5832L3.76327 13.8218C3.15589 14.2631 2.33867 13.6693 2.57067 12.9553L3.74758 9.33313C3.85133 9.01381 3.73767 8.664 3.46604 8.46665L0.384844 6.22803C-0.222534 5.78675 0.0896189 4.82604 0.84038 4.82604H4.64895C4.9847 4.82604 5.28227 4.60985 5.38602 4.29053L6.56293 0.668365Z"
                              fill="#D9DBE1" />
                          </svg>
                        </span>
                        <span><svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M6.56293 0.668365C6.79493 -0.0456511 7.80507 -0.0456486 8.03707 0.668367L9.21398 4.29053C9.31773 4.60985 9.6153 4.82604 9.95105 4.82604H13.7596C14.5104 4.82604 14.8225 5.78675 14.2152 6.22803L11.134 8.46665C10.8623 8.664 10.7487 9.01381 10.8524 9.33313L12.0293 12.9553C12.2613 13.6693 11.4441 14.2631 10.8367 13.8218L7.75553 11.5832C7.48391 11.3858 7.11609 11.3858 6.84447 11.5832L3.76327 13.8218C3.15589 14.2631 2.33867 13.6693 2.57067 12.9553L3.74758 9.33313C3.85133 9.01381 3.73767 8.664 3.46604 8.46665L0.384844 6.22803C-0.222534 5.78675 0.0896189 4.82604 0.84038 4.82604H4.64895C4.9847 4.82604 5.28227 4.60985 5.38602 4.29053L6.56293 0.668365Z"
                              fill="#D9DBE1" />
                          </svg>
                        </span>
                        <span><svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M6.56293 0.668365C6.79493 -0.0456511 7.80507 -0.0456486 8.03707 0.668367L9.21398 4.29053C9.31773 4.60985 9.6153 4.82604 9.95105 4.82604H13.7596C14.5104 4.82604 14.8225 5.78675 14.2152 6.22803L11.134 8.46665C10.8623 8.664 10.7487 9.01381 10.8524 9.33313L12.0293 12.9553C12.2613 13.6693 11.4441 14.2631 10.8367 13.8218L7.75553 11.5832C7.48391 11.3858 7.11609 11.3858 6.84447 11.5832L3.76327 13.8218C3.15589 14.2631 2.33867 13.6693 2.57067 12.9553L3.74758 9.33313C3.85133 9.01381 3.73767 8.664 3.46604 8.46665L0.384844 6.22803C-0.222534 5.78675 0.0896189 4.82604 0.84038 4.82604H4.64895C4.9847 4.82604 5.28227 4.60985 5.38602 4.29053L6.56293 0.668365Z"
                              fill="#D9DBE1" />
                          </svg>
                        </span>
                        <span><svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M6.56293 0.668365C6.79493 -0.0456511 7.80507 -0.0456486 8.03707 0.668367L9.21398 4.29053C9.31773 4.60985 9.6153 4.82604 9.95105 4.82604H13.7596C14.5104 4.82604 14.8225 5.78675 14.2152 6.22803L11.134 8.46665C10.8623 8.664 10.7487 9.01381 10.8524 9.33313L12.0293 12.9553C12.2613 13.6693 11.4441 14.2631 10.8367 13.8218L7.75553 11.5832C7.48391 11.3858 7.11609 11.3858 6.84447 11.5832L3.76327 13.8218C3.15589 14.2631 2.33867 13.6693 2.57067 12.9553L3.74758 9.33313C3.85133 9.01381 3.73767 8.664 3.46604 8.46665L0.384844 6.22803C-0.222534 5.78675 0.0896189 4.82604 0.84038 4.82604H4.64895C4.9847 4.82604 5.28227 4.60985 5.38602 4.29053L6.56293 0.668365Z"
                              fill="#D9DBE1" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="notification-time">
                  <span>منذ ساعة</span>
                </div>
              </div>
            </div>
            <div class="notify-section">
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <img src="/images/Rectangle 3.png" alt="" />
                  <div class="pe-3">
                    <p class="m-0 text-bold">عبدالرحمن أحمد علي</p>
                    <p class="m-0 gray-text">يريد حجز العقار X</p>
                  </div>
                </div>
                <div class="notification-time">
                  <span>منذ ساعة</span>
                </div>
              </div>
            </div>
            <div class="notify-section">
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <img src="/images/Rectangle 3.png" alt="" />
                  <div class="pe-3">
                    <p class="m-0 text-bold">عبدالرحمن أحمد علي</p>
                    <p class="m-0 gray-text">يريد حجز العقار X</p>
                  </div>
                </div>
                <div class="notification-time">
                  <span>منذ ساعة</span>
                </div>
              </div>
            </div>
            <div class="notify-section">
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <img src="/images/Rectangle 3.png" alt="" />
                  <div class="pe-3">
                    <p class="m-0 text-bold">عبدالرحمن أحمد علي</p>
                    <p class="m-0 gray-text">يريد حجز العقار X</p>
                  </div>
                </div>
                <div class="notification-time">
                  <span>منذ ساعة</span>
                </div>
              </div>
            </div>
            <div class="notify-section">
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <img src="/images/Rectangle 3.png" alt="" />
                  <div class="pe-3">
                    <p class="m-0 text-bold">عبدالرحمن أحمد علي</p>
                    <p class="m-0 gray-text">يريد حجز العقار X</p>
                  </div>
                </div>
                <div class="notification-time">
                  <span>منذ ساعة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    toggleSide: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    toggleElement() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<style>
.dropdown-toggle::after {
  display: none !important;
}
.dropdown-item{
  text-align: right;
}
.ad-link {
  background-color: #2E637F1A;
  height: 100%;
  padding: 14px;
}

.notification-link {
  background-color: #3498F51A;
  height: 100%;
  padding: 20px;
}

.profile-img {
  width: 50px;
  height: 50px;
}

.top-nav {
  width: 85%;
  margin-right: 230px;
  position: relative;
}

.profile-dropdown {
  position: absolute;
  top: 100%;
  left: 10px;
  z-index: 10000;
  background-color: white;
  padding: 10px;
  box-shadow: 4px 8px 14px 0px #2D43771F;
  border-radius: 6px;
  display: none;
}

.profile-dropdown ul {
  margin: 0;
  list-style: none;
  padding: 0px;
}

.profile-dropdown ul li {
  padding: 10px;
  border-radius: 5px;
}

.profile-dropdown ul li:hover {
  background-color: var(--light-gray);
}

.profile-dropdown ul li a {
  text-decoration: none;
  color: var(--gray-text);
}

.modal-dialog2 {
  position: relative;
}


.modal-content2 {
  position: absolute;
  right: 55%;
  top: 0%;
  margin-top: 10%;
  height: 500px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 0.3rem;
  outline: 0;
}

.notify-section {
  border-bottom: 1px solid #D9DBE1;
  padding: 15px 0px;
}

.notification-time span {
  color: var(--gray-text);
}

.gray-text {
  color: var(--gray-text);
}

.text-bold {
  font-weight: 600;
}

.complete-btn {
  background-color: var(--green);
  color: white;
  border: 0;
  padding: 10px;
  width: 33%;
  border-radius: 5px;
  font-size: 14px;
}

.delay-btn {
  background-color: #2E637F;
  color: white;
  border: 0;
  padding: 4px;
  width: 33%;
  border-radius: 5px;
  font-size: 14px;
}

.notify-btn {
  background-color: var(--light-gray);
  color: black;
  border: 0;
  padding: 10px;
  width: 33%;
  border-radius: 5px;
  font-size: 14px;
}

@media only screen and (max-width: 768px) {
  #collapseExample {
    height: 400px;
    overflow-y: scroll;
    font-size: 12px;
  }

  .multi-range input[type=range] {
    width: 250px;
  }

  .login-section {
    width: 100%;
    margin-right: 0%;
  }

  .top-nav {
    margin-right: 0%;
    width: 100%;
  }

  .search-fillter {
    width: 30%;
    margin-bottom: 10px;
  }

  .rent-fillter {
    width: 30%;
    /* order: 0; */
    margin-bottom: 10px;
  }

  .month-fillter {
    width: 30%;
    /* order: 1; */
    margin-bottom: 10px;
  }

  .buildding-type {
    width: 30%;
    /* order: 2; */
    margin-bottom: 10px;
  }

  .fillter-collaps {
    /* order: 3; */
    margin-bottom: 10px;
  }

  .search-fillter {
    /* order: 4; */
    width: 80%;
    margin-bottom: 10px;
  }

  .dropdown-toggle {
    font-size: 12px;
  }

  .main-fillter {
    top: 0
  }

  .ad-link {
    background-color: white;
  }

  .ad-link a span {
    display: none;
  }

  .profile-mob {
    display: none;
  }

  .notification-link {
    background-color: white;
  }

  .modal-content2 {
    right: 0;
  }

  .place-card {
    width: 250px;
  }

  .products-cards {
    background-color: white;
    width: 97%;
    margin: 50% auto 0% auto;
    border-radius: 20px;
    padding: 20px;

  }

  .navbar-nav {
    flex-direction: row !important;
  }
  .page-container {
    margin-right: 0px !important;
    height: auto !important;
  }
}

@media only screen and (max-width: 600px) {
  .login-section {
    width: 100%;
    margin-right: 0%;
  }

  .page-container {
    margin-right: 0px;
    height: auto;
 
  }

  .navbar-nav {
    flex-direction: row !important;
  }

}
</style>