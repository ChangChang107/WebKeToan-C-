<template >

    <div class="dropdown">
        <DropdownPlaceholder :text= 'textSelect' ></DropdownPlaceholder>
        <div class="dropdown-list">
            <DropdownItem v-for="(item , index) in items" :text="item" :key="index" ></DropdownItem>
        </div>
    </div>

</template>

<script>
import DropdownItem from './DropdownItem.vue';
import DropdownPlaceholder from './DropdownPlaceholder.vue';

export default {
  name: 'TheDropdown',
  components: {
    DropdownItem,
    DropdownPlaceholder,
  },
  props: { 
    items: {
        type: Array,
        default: () => [],
    },
    textSelect: {
      type: String
    },
  },
}
</script>

<style>
.dropdown{
    font-family: Roboto;
    font-size: 14px;
    width: 280px;
    position: relative;
    z-index: 1;
}

.dropdown:hover .dropdown-list{
    opacity: 1;
    visibility: visible;
}

/* .dropdown .dropdown-select{
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
} */

/* .dropdown .dropdown-select span{
    color: #9E9E9E;
    font-size: 14px;
} */

.dropdown .dropdown-list{
    border-radius: 4px;
    background-color: white;
    border: 1px solid #E0E1E4;
    position: absolute;
    padding: 8px 7px 7px 7px;
    top: 100%;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    trasition: opacity 0.2s linear, visibility 0.2s linear;
}

/* .dropdown .dropdown-list__item{
    height: 32px;
    padding-left: 7px;
    display: flex;
    align-items: center;
}

.dropdown .dropdown-list__item:hover{
    background-color: rgba(80,184,60,0.1);
    cursor: pointer;
} */


</style>