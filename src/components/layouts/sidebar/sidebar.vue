<template>
  <aside class="side-nav" id="side-nav">
    <div class="company-logo text-center">
      <img src="/images/logo.png" alt="" />
    </div>
    <ul class="side-nav">
      <li :class="{ 'active-li': currentRoute === '/home' }">
        <router-link to="/">
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.8925 3.04227L3.17625 6.71727C2.38875 7.32977 1.75 8.63352 1.75 9.62227V16.106C1.75 18.136 3.40375 19.7985 5.43375 19.7985H15.5663C17.5963 19.7985 19.25 18.136 19.25 16.1148V9.74477C19.25 8.68602 18.5413 7.32977 17.675 6.72602L12.2675 2.93727C11.0425 2.07977 9.07375 2.12352 7.8925 3.04227Z"
              stroke="#3498F5" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.5 16.2986V13.6736" stroke="#3498F5" stroke-width="1.3125" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          الرئيسية
        </router-link>
      </li>

      <li :class="{ 'active-li': currentRoute === '/myads' }">
        <router-link to="/myads">
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.3402 16.1673L16.914 16.6486C16.5202 16.7798 16.2052 17.0861 16.074 17.4886L15.5927 18.9148C15.1815 20.1486 13.449 20.1223 13.064 18.8886L11.4452 13.6823C11.1302 12.6498 12.084 11.6873 13.1077 12.0111L18.3227 13.6298C19.5477 14.0148 19.5652 15.7561 18.3402 16.1673Z"
              stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M19.25 11.0574C19.25 6.22737 15.33 2.30737 10.5 2.30737C5.67 2.30737 1.75 6.22737 1.75 11.0574C1.75 15.8874 5.67 19.8074 10.5 19.8074"
              stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          اعلاناتي
        </router-link>
      </li>
      <li :class="{ 'active-li': currentRoute === '/chats' }">
        <router-link to="/chats">
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.25 6.02612V10.4886C19.25 11.5999 18.8825 12.5361 18.2263 13.1836C17.5788 13.8399 16.6425 14.2074 15.5312 14.2074V15.7911C15.5312 16.3861 14.8662 16.7449 14.3762 16.4124L13.5275 15.8524C13.6063 15.5811 13.6412 15.2836 13.6412 14.9686V11.4074C13.6412 9.62239 12.4513 8.43237 10.6663 8.43237H4.72499C4.60249 8.43237 4.48875 8.44114 4.375 8.44989V6.02612C4.375 3.79487 5.8625 2.30737 8.09375 2.30737H15.5312C17.7625 2.30737 19.25 3.79487 19.25 6.02612Z"
              stroke="#A6A8B1" stroke-width="1.3125" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M13.6412 11.4074V14.9686C13.6412 15.2836 13.6063 15.5811 13.5275 15.8524C13.2038 17.1386 12.1363 17.9436 10.6663 17.9436H8.28625L5.64375 19.7024C5.25 19.9736 4.72499 19.6849 4.72499 19.2124V17.9436C3.83249 17.9436 3.08875 17.6461 2.5725 17.1299C2.0475 16.6049 1.75 15.8611 1.75 14.9686V11.4074C1.75 9.74489 2.7825 8.59864 4.375 8.44989C4.48875 8.44114 4.60249 8.43237 4.72499 8.43237H10.6663C12.4513 8.43237 13.6412 9.62239 13.6412 11.4074Z"
              stroke="#A6A8B1" stroke-width="1.3125" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          المحادثات
        </router-link>
        <span class="message-counter">1</span>
      </li>
      <li :class="{ 'active-li': currentRoute === '/stateMnagment' }">
        <router-link to="/stateMnagment">
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.8925 3.04227L3.17625 6.71727C2.38875 7.32977 1.75 8.63352 1.75 9.62227V16.106C1.75 18.136 3.40375 19.7985 5.43375 19.7985H15.5663C17.5963 19.7985 19.25 18.136 19.25 16.1148V9.74477C19.25 8.68602 18.5413 7.32977 17.675 6.72602L12.2675 2.93727C11.0425 2.07977 9.07375 2.12352 7.8925 3.04227Z"
              stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.4375 10.6199L10.7625 14.2949L9.3625 12.1949L6.5625 14.9949" stroke="#A6A8B1"
              stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.6875 10.6199H14.4375V12.3699" stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          الادراة العقارية
        </router-link>
      </li>
      <li :class="{ 'active-li': currentRoute === '/contracts' }">
        <router-link to="/contracts">
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.25 9.30737V13.6824C19.25 18.0574 17.5 19.8074 13.125 19.8074H7.875C3.5 19.8074 1.75 18.0574 1.75 13.6824V8.43237C1.75 4.05737 3.5 2.30737 7.875 2.30737H12.25"
              stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.25 9.30737H15.75C13.125 9.30737 12.25 8.43237 12.25 5.80737V2.30737L19.25 9.30737Z"
              stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.125 11.9324H11.375" stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M6.125 15.4324H9.625" stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          العقود
        </router-link>
      </li>
      <li :class="{ 'active-li': currentRoute === '/FinantialManagment' }">
        <router-link to="/FinantialManagment">
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.58789 13.096C7.58789 14.2247 8.45414 15.1347 9.53039 15.1347H11.7266C12.6629 15.1347 13.4241 14.3385 13.4241 13.3585C13.4241 12.291 12.9604 11.9147 12.2691 11.6697L8.74289 10.4447C8.05164 10.1997 7.58789 9.82349 7.58789 8.75599C7.58789 7.77599 8.34914 6.97974 9.28539 6.97974H11.4816C12.5579 6.97974 13.4241 7.88974 13.4241 9.01849"
              stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.5 5.80737V16.3074" stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M13.125 19.8074H7.875C3.5 19.8074 1.75 18.0574 1.75 13.6824V8.43237C1.75 4.05737 3.5 2.30737 7.875 2.30737H13.125C17.5 2.30737 19.25 4.05737 19.25 8.43237V13.6824C19.25 18.0574 17.5 19.8074 13.125 19.8074Z"
              stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          الادراة المالية
        </router-link>
      </li>
      <li :class="{ 'active-li': currentRoute === '/Decoration' }">
        <router-link to="/Decoration">
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.1826 12.5011V16.8236H2.81763V12.5011C2.81763 8.28359 6.23013 4.87109 10.4476 4.87109H10.5526C14.7701 4.87109 18.1826 8.28359 18.1826 12.5011Z"
              stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.5 2.30737V4.87112" stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M13.6939 16.8237C13.5801 18.495 12.1889 19.8075 10.5001 19.8075C8.81139 19.8075 7.42015 18.495 7.3064 16.8237H13.6939Z"
              stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          الديكور
        </router-link>
      </li>
      <li :class="{ 'active-li': currentRoute === '/Packages' }">
        <router-link to="/Packages">
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.1826 12.5011V16.8236H2.81763V12.5011C2.81763 8.28359 6.23013 4.87109 10.4476 4.87109H10.5526C14.7701 4.87109 18.1826 8.28359 18.1826 12.5011Z"
              stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.5 2.30737V4.87112" stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M13.6939 16.8237C13.5801 18.495 12.1889 19.8075 10.5001 19.8075C8.81139 19.8075 7.42015 18.495 7.3064 16.8237H13.6939Z"
              stroke="#A6A8B1" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          الباقات
        </router-link>
      </li>
     
    
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: '/'
    };
  },
  created() {

    this.currentRoute = window.location.pathname;
    this.$router.afterEach((to) => {
      console.log(to.path);
      this.currentRoute = to.path;
    });
  }
}
</script>

<style>
aside {
  height: 100vh;
  width: 230px;
  position: fixed;
  top: 0;
  z-index: 1000;
  background: white;
}

.company-logo img {
  width: 65px;
  padding-top: 40px;
}

.side-nav {
  list-style: none;
  padding: 10px;
}

.side-nav li {
  padding: 12px 0px;
}

.side-nav li a {
  text-decoration: none;
  color: #A6A8B1;
  font-weight: 600;
}

.active-li a {
  color: var(--blue) !important;
}

.active-li {
  background-color: #3498F51A;
  border-radius: 5px;
}

.side-nav li:hover {
  background-color: #3498F51A;
}

.message-counter {
  background-color: #C32B43;
  color: white;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  font-size: 14px;
  margin-right: 20px;
}
</style>