<template>

    <div class="container-fluid p-3">
        <div class="row">
            <div class="col-md-6">
                <div class="login-section">

                    <div class="">
                        <h3>تسجيل حساب جديد</h3>
                        <div class='upload-field-customized'>
                            <input type="file" multiple="multiple" name="file" id="file_upload">
                            <span class="up">
                                <img src="/images/camera.png" alt="" />
                            </span>
                        </div>
                        <div class="login-inp pt-4">
                            <label for="">الاسم الاول <span class="text-danger">*</span></label>
                            <input type="text" name="" id="" placeholder="عبدالرحمن" class="form-control">

                        </div>
                        <div class="login-inp pt-4">
                            <label for="">الاسم الاخير <span class="text-danger">*</span></label>
                            <input type="text" name="" id="" placeholder="محمد" class="form-control">

                        </div>
                        <button class="mb-3">
                            <router-link to="/confirmPhone" class="router-link-btn">التالي</router-link>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-md-6 ">
                <div class="position-relative p-3">
                    <Map></Map>
                    <input type="text" placeholder="بحث" class="input-searechh form-control">
                </div>


            </div>

        </div>
    </div>
</template>

<script>
import Map from '../components/Home/Map.vue'
export default {
    components: {
        Map
    }
}
</script>

<style>
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

#otp-input {
    display: flex;
    direction: ltr;
    justify-content: space-around;
}

#otp-input input {
    width: 4em;
    padding: 1.3em 1em;
    background-color: var(--second-light-gray);
    font-size: 1em;
    text-align: center;
    border: 0;
    border-radius: 12px;
}


/* hide spinner */
#otp-input input::-webkit-outer-spin-button,
#otp-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

#otp-input input[type=number] {
    -moz-appearance: textfield;
    /* Firefox */
}


.btn-green {
    background-color: var(--green);
    color: white;
}

.btn-light-gray {
    background-color: var(--light-gray);
}

.upload-field-customized {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: var(--light-gray);
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.upload-field-customized input[type="file"] {
    position: absolute;
    width: 100%;
    height: 50px;
    opacity: 0;
    cursor: pointer;
    left: 0px;
    top: 0px;
    z-index: 10;
}

.upload-field-customized .up {
    text-align: center;
    width: 100%;
    display: block;
    line-height: 50px;
}

.upload-field-customized .up img {
    width: 70px;
}
.input-searechh{
    width: 80%;
    position: absolute;
    top: 30px;
    z-index: 12;
    margin: 0 auto;
    right: 0;
    left: 0;
    
}
@media only screen and (max-width: 600px) {

    .login-section {
        width: 100%;
        margin-right: 0%;
    }
}
</style>