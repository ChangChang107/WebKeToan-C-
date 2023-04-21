<template>

    <div class="dropdown-select">
        <span class="select">{{ text }}</span>
        <i class="fa fa-caret-down icon"></i>
    </div>

</template>

<script>

export default {
  name: 'DropdownPlaceholder',
  components: {
  },
  props: ["text"]
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

</style>