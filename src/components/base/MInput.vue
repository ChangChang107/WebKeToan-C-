<template>

<div class="staff-id">
    <label for="">Mã<span class="required">*</span></label>
    <input :type="type" 
            id="staff-id" 
            property-name = "EmployeeCode"
            class="input-staff-id" 
            :class="{'invalid-input': validated}" 
            @blur="$event => onValidate"
            >
    <br>
    <p class="error-message">{{ errorMessage }}</p>
</div>

</template>

<script>

export default {
  name: 'MInput',
  components: {
  },
  props: ['value', 'required'],
  data() {
    return {
        validated: false,
        type: "text",
        employee: {}
    }
  },
  computed: {
    errorMessage() {
        if(!this.validated){
            return '';
        }
        if(this.required && !this.value){
            return 'Trường này không được để trống';
        }
        return '';
    }
  },
  methods: {
    handleChange(ev) {
        this.$emit('input', ev);
        this.validated = true;
    },

    // validateForm() {
    //     this.validated = true;
    // },

    // focus() {
    //     this.$refs.childRef.focus();
    // },

    onValidate(){

    }
  }
}
</script>

<style>

.staff-id{
    width: 220px;
    margin-right: 16px;
}

.staff-id .input-staff-id{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 8px;
}

.staff-id .input-staff-id:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.invalid-input{
    border: 1px solid #E61D1D !important;
}

.error-message{
    color: #E61D1D !important;
    font-size: 12px;
}

</style>
