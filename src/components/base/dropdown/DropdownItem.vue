<template>

    <div class="dropdown-list__item" >{{ text }}</div>

</template>

<script>

export default {
  name: 'DropdownItem',
  components: {
  },
  props: ["text", "selected"]
}
</script>

<style>

.dropdown-list__item{
    height: 32px;
    padding-left: 7px;
    display: flex;
    align-items: center;
    border-radius: 4px;
}


</style>