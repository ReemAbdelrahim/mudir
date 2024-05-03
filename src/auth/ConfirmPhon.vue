<template>

    <div class="container-fluid p-3">
        <div class="row">
            <div class="col-md-6">
                <div class="login-section">
                    <div class="logo-image text-center">
                        <img src="/images/logo.png" alt="">
                    </div>
                    <div class=" pt-5">
                        <h3>تأكيد رقم الهاتف</h3>
                        <div class="login-inp pt-4">
                            <label for="">ستصلك رسالة SMS بها رقم التأكيد على الرقم 0215151515 + <br>
                                <a href="" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">تغيير
                                    الرقم</a>

                            </label>
                            <!-- <div class="mt-3" id="otp-input">
                                <input type="number" step="1" min="0" max="9" autocomplete="no" pattern="\d*">
                                <input type="number" step="1" min="0" max="9" autocomplete="no" pattern="\d*">
                                <input type="number" step="1" min="0" max="9" autocomplete="no" pattern="\d*">
                                <input type="number" step="1" min="0" max="9" autocomplete="no" pattern="\d*">

                            </div>
                            <input type="hidden" name="otp"> -->
                            <div class="mt-3" id="otp-input">
                                <input v-for="(input, index) in inputs" :key="index" ref="input" type="text"
                                    maxlength="1" v-model="input.value" @input="handleInput(index, $event)"
                                    @keydown="handleKeyDown(index, $event)" />
                                <input type="hidden" name="otp" v-model="otpValue" />
                            </div>
                        </div>
                        <button>
                            <router-link to="/home" class="router-link-btn">تأكيد</router-link>
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
        <!-- Modal -->
        <div class="modal  animate__animated animate__fadeInRight" id="exampleModal" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content">
                    <div class="p-3">

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <img src="/images/modal.png" alt="">
                            <h4>تغيير رقم الهاتف </h4>
                        </div>
                        <div class="login-inp pt-4">
                            <label for="">رقم الهاتف </label>
                            <input type="text" name="" id="" placeholder="ادخل رقم الهاتف " class="form-control">
                            <p>+02</p>
                        </div>
                    </div>
                    <div class="p-3 d-flex gap-3">
                        <button type="button" class="btn btn-green w-50">تعديل</button>
                        <button type="button" class="btn  btn-light-gray w-50" data-bs-dismiss="modal">الغاء</button>
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
      inputs: [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
      otpValue: "",
    };
  },
  methods: {
    handleInput(index, event) {
      const input = this.inputs[index];

      if (input.value && index + 1 < this.inputs.length) {
        this.$nextTick(() => {
          this.$refs.input[index + 1].focus();
        });
      }

      this.updateInput();
    },
    handleKeyDown(index, event) {
      if (event.keyCode === 8 && !this.inputs[index].value && index !== 0) {
        this.inputs[index - 1].value = "";
        this.$nextTick(() => {
          this.$refs.input[index - 1].focus();
        });
        this.updateInput();
        event.preventDefault();
      }

      if (event.keyCode === 46 && index !== this.inputs.length - 1) {
        this.inputs[index].value = "";
        this.$nextTick(() => {
          this.$refs.input[index + 1].focus();
        });
        this.updateInput();
        event.preventDefault();
      }

      if (event.keyCode === 37) {
        if (index > 0) {
          event.preventDefault();
          this.$refs.input[index - 1].focus();
        }
      }

      if (event.keyCode === 39) {
        if (index + 1 < this.inputs.length) {
          event.preventDefault();
          this.$refs.input[index + 1].focus();
        }
      }
    },
    updateInput() {
      this.otpValue = this.inputs
        .map((input) => (input.value ? input.value : " "))
        .join("");
    },
  },
};
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

.side-image img {
    height: 95vh;
    width: 100%;
}
.login-inp label {
    color: var(--gray-text);
    padding-bottom: 10px;
}
.login-inp input {
    padding: 10px;
}
.login-inp p {
    padding-right: 5px;
    border-right: 1px solid var(--gray-text);
    left: 25px;
    color: var(--gray-text);
    position: absolute;
    top: 77%;

}
.btn-green {
    background-color: var(--green);
    color: white;
}
.btn-light-gray {
    background-color: var(--light-gray);
}
</style>