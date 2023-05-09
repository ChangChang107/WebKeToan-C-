<template >

    <div class="dropdown">
        <!-- <DropdownPlaceholder :text= 'textSelect' ></DropdownPlaceholder> -->
        <div class="dropdown-select">
        <input 
        type="text" 
        class="dropdown-input" 
        :placeholder="textSelect" 
        v-on:keyup = "findItem()"
        v-model="input"
        @blur="sendValidate(input)">
        <div class="icon">
        </div>
    </div>
        <div class="dropdown-list">
            <DropdownItem 
            v-for="(item , index) in itemFinds" 
            :text="getText(item)" 
            :key="index"
            @click ="sendItem(item)"></DropdownItem>
        </div>
    </div>

</template>

<script>
import DropdownItem from './DropdownItem.vue';

export default {
  name: 'TheDropdown',

  components: {
    DropdownItem,
  },

    
  props: { 
    items: {
        type: Array,
        default: () => [],
    },
    isItemObject: {
        type: Boolean,
        default: false,
    },
    itemSelected: {
        type: String,
        default: '',
    },
    textSelect: {
      type: String
    },
  },
  data() {
        return {
        input: this.itemSelected,
        itemFinds: this.items,
        itemObjectFinds: this.items,
        }
    },


    methods: {

        /**
         * Mô tả: 
         * @param: Hàm tìm kiếm các item
         * return:
         * Created by: nttrang
         * Created date: 18/04/2023
         */
        findItem() {
            this.itemFinds = [];
            if(!this.isItemObject)
            this.items.forEach(item => {
                if (item.includes(this.input)) {
                    this.itemFinds.push(item);
                }
            });
            else {
                for(let item of this.items) {
                    if(item.name.includes(this.input)) {
                        this.itemFinds.push(item);
                    }
                }
            }
        },

         /**
         * Mô tả: Trả về item đã chọn cho component cha
         * @param: 
         * return: 
         * Created by: nttrang
         * Created date: 18/04/2023
         */
        sendItem(item) {
            if(!this.isItemObject){
                this.$emit('sendItem', item)
                this.input = item;
            }
            else {
                this.$emit('sendItem', item.id)
                this.input = item.name;
            }
        },

         /**
         * Mô tả: 
         * @param: 
         * return: 
         * Created by: nttrang
         * Created date: 19/04/2023
         */
        getText(item){
            if(!this.isItemObject){
                return item;
            }
            else {
                return item.name;
            }
        },

         /**
         * Mô tả: 
         * @param: 
         * return: 
         * Created by: nttrang
         * Created date: 19/04/2023
         */
        sendValidate(input){
            this.$emit('sendValidate', input)
        }
    }
}
</script>

<style>
.dropdown{
    font-family: Roboto;
    background: #FFFFFF;
    font-size: 14px;
    width: 100%;
    height: 36px;
    margin-top: 8px;
    position: relative;
    z-index: 1;
}


.dropdown:hover .dropdown-list{
    /* opacity: 1; */
    /* visibility: visible; */
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

.dropdown-select{
    display: flex;
    align-items: center;
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
    padding-left: 4px !important;
    margin: 0px !important;
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


.dropdown .dropdown-list{
    border-radius: 4px;
    background-color: white;
    border: 1px solid #E0E1E4;
    position: absolute;
    padding: 8px 7px 7px 7px;
    top: 100%;
    left: 0;
    right: 0;
    /* opacity: 0; */
    /* visibility: hidden; */
    /* trasition: opacity 0.2s linear, visibility 0.2s linear; */
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