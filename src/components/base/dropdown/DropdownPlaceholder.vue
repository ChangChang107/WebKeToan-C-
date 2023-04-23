<template>
    <div class="dropdown-select">
        <input 
        type="text" 
        class="dropdown-input" 
        :placeholder="text" 
        v-on:keyup.enter = "sendMessage"
        v-model="input">
        <!-- <span class="select">{{ text }}</span> -->
        <div class="icon">
        </div>
    </div>

</template>

<script>

export default {
  name: 'DropdownPlaceholder',
  components: {
  },
  props: ["text"],
  data() {
    return {
        input: '',
    }
  },
  methods: {
    sendMessage() {
      this.$emit('data', this.input);
    },
}
}
</script>

<style>

.dropdown-select{
    padding: 8px;
    border-radius: 4px;
    width: 100%;
    height: 36px;
    box-sizing: border-box;
    border: 1px solid #E0E1E4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    cursor: pointer;
}

.dropdown-select span{
    color: #9E9E9E;
    font-size: 14px;
}

.dropdown-select .dropdown-input{
    width: 100%;
    height: 100%;
    border: none;
    font-size: 14px;
    /* border-right: 1px solid #E0E1E4; */
    margin: 10px;
}

.dropdown-select .dropdown-input:focus{
    outline: none;
}

.dropdown-select .icon {
    -webkit-mask: url("@/assets/img/Sprites.64af8f61.svg") no-repeat -1129px -365px;
    mask: url("@/assets/img/Sprites.64af8f61.svg") no-repeat -1129px -365px;
    width: 14px;
	height: 8px;
    background-color: #1F1F1F;
}

</style>