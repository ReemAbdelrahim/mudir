<template>
  <div class="main-fillter">
    <div class="fillter-collaps">
      <button class="btn border rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
        aria-expanded="false" aria-controls="collapseExample">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2329_8011)">
            <path
              d="M11 18H13C13.55 18 14 17.55 14 17C14 16.45 13.55 16 13 16H11C10.45 16 10 16.45 10 17C10 17.55 10.45 18 11 18ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7ZM7 13H17C17.55 13 18 12.55 18 12C18 11.45 17.55 11 17 11H7C6.45 11 6 11.45 6 12C6 12.55 6.45 13 7 13Z"
              fill="#8E8E93" />
          </g>
          <defs>
            <clipPath id="clip0_2329_8011">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
    <!-- <div class="search-fillter" >
      <button class="d-flex justify-content-between align-items-center d-md-flex d-none" ref="serach-btn"  @click="hideSearch"
        >
        <span>بحث</span>
        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 22L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </button>

      <input type="text" class="hidden-search " ref="hidden-search"  placeholder="بحث" v-model="inputValue"/>
      
      <input type="text" class="d-md-none d-block mobile-search" placeholder="بحث" />



      <span class="close-search" ref="close-search" v-if="isInputVisible" @click="hideInput"><svg width="24" height="24" viewBox="0 0 24 24"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            stroke="#2E637F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.16992 14.83L14.8299 9.17004" stroke="#2E637F" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M14.8299 14.83L9.16992 9.17004" stroke="#2E637F" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </span>
    </div>
    <div class="rent-fillter" ref="rent">
      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
          aria-expanded="false">
          ايجار
        </button>
        <ul class="dropdown-menu text-end" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">اختيار اول</a></li>
          <li><a class="dropdown-item" href="#">اختيار ثاني </a></li>
          <li><a class="dropdown-item" href="#">اختيار ثالث </a></li>
        </ul>
      </div>
    </div>
    <div class="month-fillter" ref="month">
      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
          aria-expanded="false">
          شهري
        </button>
        <ul class="dropdown-menu text-end" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">اختيار اول</a></li>
          <li><a class="dropdown-item" href="#">اختيار ثاني </a></li>
          <li><a class="dropdown-item" href="#">اختيار ثالث </a></li>
        </ul>
      </div>
    </div>
    <div class="buildding-type" ref="type">
      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
          aria-expanded="false">
          نوع العقار
        </button>
        <ul class="dropdown-menu text-end" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
    </div> -->
    <div class="search-fillter" ref="searchFilter" :style="{ width: searchFilterWidth }">
    <button
      class="d-flex justify-content-between align-items-center d-md-flex d-none"
      ref="searchBtn"
      @click="hideSearch"
      :class="{ 'hide-btn': searchBtnHide, 'appear-btn': searchBtnAppear }"
    >
      <span>بحث</span>
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </button>

    <input
      type="text"
      class="hidden-search"
      ref="hiddenSearch"
      placeholder="بحث"
      v-model="inputValue"
      :style="{ width: hiddenSearchWidth, display: searchInDisplay  }"
    />

    <!-- mobile search -->
    <input
      type="text"
      class="d-md-none d-block mobile-search"
      placeholder="بحث"
    />

    <span
      class="close-search"
      ref="closeSearch"
      v-if="isInputVisible"
      @click="hideInput"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          stroke="#2E637F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.16992 14.83L14.8299 9.17004"
          stroke="#2E637F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.8299 14.83L9.16992 9.17004"
          stroke="#2E637F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </div>

  <div class="rent-fillter" ref="rent" :style="{ display: rentDisplay }">
    <div class="dropdown">
      <button
        class="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        ايجار
      </button>
      <ul class="dropdown-menu text-end" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">اختيار اول</a></li>
        <li><a class="dropdown-item" href="#">اختيار ثاني</a></li>
        <li><a class="dropdown-item" href="#">اختيار ثالث</a></li>
      </ul>
    </div>
  </div>

  <div class="month-fillter" ref="month" :style="{ display: monthDisplay }">
    <div class="dropdown">
      <button
        class="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        شهري
      </button>
      <ul class="dropdown-menu text-end" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">اختيار اول</a></li>
        <li><a class="dropdown-item" href="#">اختيار ثاني</a></li>
        <li><a class="dropdown-item" href="#">اختيار ثالث</a></li>
      </ul>
    </div>
  </div>

  <div class="buildding-type" ref="type" :style="{ display: typeDisplay }">
    <div class="dropdown">
      <button
        class="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        نوع العقار
      </button>
      <ul class="dropdown-menu text-end" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
    <div class="set-filler">

      <!-- <span class="btn" onclick="submit()">تعيين
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M7.81484 0C11.9082 0 15.2266 3.31836 15.2266 7.41176C15.2266 11.2671 12.283 14.4349 8.52072 14.7904V22.5882C8.52072 22.9781 8.20469 23.2941 7.81484 23.2941C7.42499 23.2941 7.10896 22.9781 7.10896 22.5882V14.7904C3.34665 14.4349 0.403076 11.2671 0.403076 7.41176C0.403076 3.31836 3.72144 0 7.81484 0Z"
            fill="black" />
          <path
            d="M10.2854 7.41175C10.2854 6.04728 9.17929 4.94116 7.81483 4.94116C6.45036 4.94116 5.34424 6.04728 5.34424 7.41175C5.34424 8.77622 6.45036 9.88234 7.81483 9.88234C9.17929 9.88234 10.2854 8.77622 10.2854 7.41175Z"
            fill="white" />
          <path opacity="0.3"
            d="M7.815 24.0001C8.78962 24.0001 9.5797 23.605 9.5797 23.1177C9.5797 22.6304 8.78962 22.2354 7.815 22.2354C6.84038 22.2354 6.05029 22.6304 6.05029 23.1177C6.05029 23.605 6.84038 24.0001 7.815 24.0001Z"
            fill="black" />
        </svg>
      </span> -->

    </div>
    <div class="map-fillter d-flex justify-content-between align-items-center gap-1">
      <span>الخريطة</span>
      <label class="switch">
        <input type="checkbox" checked @click="toggleChecked"/>
        <span class="slider round"></span>
      </label>
     
  
    </div>

    <div class="profile-dropdown2 animate__animated animate__fadeInLeft" id="profile-dropdown2">
      <ul>
        <li><a href="new-location-search.html"> منطقة بحث جديدة </a></li>
        <li><a href="make-ad.html"> انشاء اعلان </a></li>
      </ul>
    </div>

    <div class="collapse" id="collapseExample">
      <div class="container-fluid">
        <div class="row py-5">
          <div class="col-lg-5 col-12">
            <div class="d-flex">
              <div class="w-50 p-1">
                <label for="" class="gray-text">الفئة</label>
                <select class="form-select gray-inp" aria-label="Default select example">
                  <option selected>حدد الفئة</option>
                  <option value="1">الاول</option>
                  <option value="2">الثاني</option>
                  <option value="3">الثالث</option>
                </select>
              </div>
              <div class="w-50 p-1">
                <label for="" class="gray-text">المساحة
                  <span class="text-primary">(بالمتر )</span>
                </label>
                <div class="d-flex">
                  <div class="pe-1 w-50">
                    <input type="text" class="form-control gray-inp" placeholder="من" />
                  </div>
                  <div class="pe-1 w-50">
                    <input type="text" class="form-control gray-inp" placeholder="الي" />
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex pt-3">
              <div class="w-50 p-1">
                <label for="" class="gray-text">المحافظة</label>
                <select class="form-select gray-inp" aria-label="Default select example">
                  <option selected>حدد المحافظة</option>
                  <option value="1">الاول</option>
                  <option value="2">الثاني</option>
                  <option value="3">الثالث</option>
                </select>
              </div>
              <div class="w-25 p-1">
                <label for="" class="gray-text">رقم الدور </label>

                <input type="text" class="form-control gray-inp" placeholder="من" />
              </div>
              <div class="p-1 w-25">
                <label for="" class="gray-text">عدد الغرف </label>
                <input type="text" class="form-control gray-inp" placeholder="الي" />
              </div>
            </div>
            <div class="pt-3">
              <button class="btn btn-primary px-3">تطبيق</button>
            </div>
          </div>

          <div class="col-lg-3 col-12">
            <div class="other-services">
              <label for="" class="gray-text pe-3">
                الخدمات المتوفرة
              </label>
              <div class="d-flex justify-content-between p-3 mt-3">
                <div>
                  <div class="form-check">
                    <label class="container-checkk gray-text">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                      مسبح
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="container-checkk gray-text">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                      حديقة
                    </label>
                  </div>
                </div>
                <div>
                  <div class="form-check">
                    <label class="container-checkk gray-text">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                      مكيف
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="container-checkk gray-text">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                      انترنت
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <label for="" class="gray-text"> تحديد السعر </label>
            <div class="d-flex">
              <div class="pe-1 w-50">
                <input type="text" class="form-control gray-inp" placeholder="00" />
              </div>
              <div class="pe-1 w-50">
                <input type="text" class="form-control gray-inp" placeholder="00" />
              </div>
            </div>
            <div class="px-3 mt-5">
              <label for="" class="gray-text">بداية السعر </label>
              <br />
              <span class="multi-range">
                <input type="range" min="0" max="50" value="5" id="lower" />
                <input type="range" min="0" max="50" value="45" id="upper" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>


<script>
export default {
  props: {
    toggleChecked: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      isInputVisible: false,
      inputValue: "",
      elementStyle:{

      }
      ,
      inputValue: '',
      hiddenSearchWidth: '0px',
      isInputVisible: false,
      searchBtnHide: false,
      searchBtnAppear: false,
      rentDisplay: 'block',
      monthDisplay: 'block',
      typeDisplay: 'block',
      searchFilterWidth: '10%',
      searchInDisplay:'none'
    };
  },

  methods: {
    toggleChecked() {
      this.toggleChecked();
    },
    hideSearch() {
      this.isInputVisible = !this.isInputVisible;
      if (this.isInputVisible) {
        console.log("Reem")
        this.hiddenSearchWidth = '100%';
        this.rentDisplay = 'none';
        this.monthDisplay = 'none';
        this.typeDisplay = 'none';
        this.searchBtnHide = true;
        this.searchBtnAppear = false;
        // this.$refs.closeSearch.style.display = 'block';
        this.searchFilterWidth = '50%';
        this.searchInDisplay ='block';

      } else {
        this.hiddenSearchWidth = '0px';
        this.rentDisplay = 'block';
        this.monthDisplay = 'block';
        this.typeDisplay = 'block';
        this.searchBtnHide = false;
        this.searchBtnAppear = true;
        // this.$refs.closeSearch.style.display = 'none';
        this.searchFilterWidth = '10%';
      }
    },
    hideInput() {
      this.searchInDisplay ='none';
      this.isInputVisible = false;
      this.hiddenSearchWidth = '0px';
      this.rentDisplay = 'block';
      this.monthDisplay = 'block';
      this.typeDisplay = 'block';
      this.searchBtnHide = false;
      this.searchBtnAppear = true;
      this.$refs.closeSearch.style.display = 'none';
      this.searchFilterWidth = '10%';

    },
  },
  
};
</script>



<style> 
.main-fillter {
  width: 97%;
  margin: 0 auto;
  right: 0;
  left: 0;
  position: absolute;
  top: 20px;
  background-color: white;
  z-index: 10;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #2196F3;
}

input:focus+.slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.search-fillter {
  display: flex;
  justify-items: center;
  justify-content: space-between;
  width: 10%;
  /* order: 1; */
  position: relative;
}

.search-fillter button {
  background-color: #2E637F;
  color: white;
  border-radius: 10px;
  border: 0;
  width: 100%;
  text-align: right;
}

.rent-fillter {
  display: block;
  width: 10%;
  /* order: 2; */
}

.rent-fillter button {
  background-color: var(--light-gray);
  border-radius: 10px;
  width: 100%;
  text-align: right;
}

.month-fillter {
  width: 10%;
  /* order: 3; */
}

.month-fillter button {
  background-color: var(--light-gray);
  border-radius: 10px;
  width: 100%;
  text-align: right;
}

.buildding-type {
  width: 20%;
  /* order: 4; */
}

.buildding-type button {
  background-color: var(--light-gray);
  border-radius: 10px;
  width: 100%;
  text-align: right;
}

.dropdown-toggle::after {
  position: absolute;
  left: 0;
  top: 40%;
  bottom: 0;

  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.set-filler {
  background-color: var(--light-gray);
  border-radius: 10px;
  /* order: 5; */
}

.set-filler a {
  color: black;
  text-decoration: none;
}

.map-fillter {
  /* order: 6; */
}

.gray-inp {
  background-color: var(--light-gray);
}

.container-checkk {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container-checkk input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container-checkk:hover input~.checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container-checkk input:checked~.checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container-checkk input:checked~.checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container-checkk .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.other-services {
  border-right: 2px solid var(--light-gray);
  border-left: 2px solid var(--light-gray);
}

input[type=range] {
  box-sizing: border-box;
  appearance: none;
  width: 350px;
  margin: 0;
  padding: 0 2px;
  overflow: hidden;
  border: 0;
  border-radius: 7px;
  outline: none;
  background: linear-gradient(#CDB684, #CDB684) no-repeat center;
  background-size: 100% 6px;
  pointer-events: none;
}

input[type=range]:active,
input[type=range]:focus {
  outline: none;
}

input[type=range]::-webkit-slider-thumb {
  height: 28px;
  width: 28px;
  border-radius: 28px;
  background-color: #CDB684;
  position: relative;
  margin: 5px 0;
  cursor: pointer;
  appearance: none;
  pointer-events: all;
  box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.25);
}

input[type=range]::-webkit-slider-thumb::before {
  content: ' ';
  display: block;
  position: absolute;
  top: 13px;
  left: 100%;
  width: 2000px;
  height: 2px;
}

.multi-range {
  position: relative;
  height: 50px;
}

.multi-range input[type=range] {
  position: absolute;
}

.multi-range input[type=range]:nth-child(1)::-webkit-slider-thumb::before {
  background-color: red;
}

.multi-range input[type=range]:nth-child(2) {
  background: none;
}

.multi-range input[type=range]:nth-child(2)::-webkit-slider-thumb::before {
  background-color: grey;
}

.profile-dropdown2 {
  position: absolute;
  top: 100%;
  left: 15%;
  z-index: 10000;
  background-color: white;
  padding: 10px;
  box-shadow: 4px 8px 14px 0px #2D43771F;
  border-radius: 6px;
  display: none;
  height: 0;
  overflow: hidden;
}

.profile-dropdown2 ul {
  margin: 0;
  list-style: none;
  padding: 0px;
}

.profile-dropdown2 ul li {
  padding: 10px;
  border-radius: 5px;
}

.profile-dropdown2 ul li:hover {
  background-color: var(--light-gray);
}

.profile-dropdown2 ul li a {
  text-decoration: none;
  color: var(--gray-text);
}

.new-input-search {
  position: absolute;
  z-index: 100;
  right: 0;
  left: 0;
  width: 80%;
  margin: 20px auto;
  border: 0;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 0px 24px 0px #00000026;
}


.hidden-search {
  /* display: none; */
  width: 0px;
  overflow: hidden;
  /* transition: width 0.5s ease; */
  transition: width 4s cubic-bezier(0.5, 0, 0.5, 1);
  background-color: var(--light-gray);
  border: 0;
  border-radius: 10px;
  padding: 0px 10px;
  position: relative;
}

.mobile-search {
  background-color: var(--light-gray);
  border: 0;
  border-radius: 10px;
  padding: 0px 10px;
  width: 100%;
}

.close-search {
  position: absolute;
  left: 1%;
  /* display: none; */
  top: 5px;
  cursor: pointer;
}

.hide-btn {
  display: none !important;
}

.appear-btn {
  display: flex !important;
}


.hidden-search {
  width: v-bind(hiddenSearchWidth);
  overflow: hidden;
  transition: width 0.5s ease;
  background-color: var(--light-gray);
  border: 0;
  border-radius: 10px;
  padding: 0px 10px;
  position: relative;
}

.hide-btn {
  display: none !important;
}
@media only screen and (max-width: 768px){
.search-fillter {
 
    width: 80% !important;
    margin-bottom: 10px;
}
}
</style>