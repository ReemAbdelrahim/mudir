<template>

    <div>

        <input type="text" placeholder="بحث" class="new-input-search">
        <div class="d-flex buttonss gap-2">
            <button class="continue-btn2 px-md-5 py-md-2 px-4 py-2">تراجع</button>
            <button class="continue-btn3 px-md-5 py-md-2 px-2 py-2" type="button" data-bs-toggle="modal" data-bs-target="#makead">انشاء
                اعلان</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>


.new-input-search {
    position: absolute;
    z-index: 100;
    top: 0;
    right: 0;
    left: 0;
    width: 80%;

    margin: 20px auto;
    border: 0;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 24px 0px #00000026;
}
.buttonss{
    position: absolute;
    bottom: 40px;
    right: 5%;
    z-index: 10;
}
.continue-btn2 {
    background-color: white;
    color: #2E637F;
    border: 0;

    font-size: 21px;
    margin-top: 40px;
    border-radius: 10px;
    font-weight: 600;
    box-shadow: 0px 0px 24px 0px #00000026;

}

.continue-btn3 {
    color: white;
    background-color: var(--blue);
    border: 0;

    font-size: 21px;
    margin-top: 40px;
    border-radius: 10px;
   

    font-weight: 600;
    box-shadow: 0px 0px 24px 0px #00000026;
}
</style>