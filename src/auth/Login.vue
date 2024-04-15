<template>
  <div class="container-fluid p-3">
  <div class="row">
    <div class="col-md-6">
    <div class="login-section">
      <div class="logo-image text-center">
        <img src="/images/logo.png" alt="">
      </div>
      <div class=" pt-5">
        <h3>تسجيل الدخول </h3>
        <div class="login-inp pt-4">
          <label for="" >رقم الهاتف </label>
          <input type="text" name="" id="" placeholder="ادخل رقم الهاتف " class="form-control">
          <p>+02</p>
        </div>
        <button>
            <router-link to="/home" class="router-link-btn">تسجيل الدخول </router-link>
        </button>
    
      </div>
    </div>
  </div>
    <div class="col-md-6 d-md-block d-none">
      <div class="side-image">
        <img src="/images/image.png" alt="">
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
.side-image img {
  height: 95vh;
  width: 100%;
}

.login-inp {
  position: relative;
}

.login-inp label {
  color: var(--gray-text);
  padding-bottom: 10px;
}

.login-inp p {
  padding-right: 5px;
  border-right: 1px solid var(--gray-text);
  left: 17px;
  color: var(--gray-text);
  position: absolute;
  top: 65%;
}

.login-inp input {
  padding: 10px;
}

.login-section {
  width: 60%;
  padding-top: 20%;
  margin-right: 20%;
}

.login-section button {
  background-color: var(--blue);
  width: 100%;
  color: white;
  border: 0;
  padding: 10px;
  margin-top: 40px;
  border-radius: 10px;
}
 .router-link-btn{
    color: white;
    text-decoration: none;
}

</style>