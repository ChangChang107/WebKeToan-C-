<template>
    <div class="dropdown" v-outside="() => this.isOpen = false" @keydown.down="onArrowDown" 
            @keydown.up="onArrowUp"
            @keydown.enter="onEnter">
        <div class="dropdown-select" :class="{ 'border-error': isEmptyInput }">
            <input 
            type="text" 
            :placeholder="textPlaceHolder" 
            class="dropdown-input"  v-model="search" 
            @input="onChange" @keydown.down="onArrowDown" 
            @keydown.up="onArrowUp" @keydown.enter.prevent
            @keydown.enter="onEnter" @blur="sendValidate(search)">
            <div class="icon" @click="btnShow">
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
        <div class="dropdown-list"  v-show="isOpen">
            <!-- <MsLoading v-if="isLoading"></MsLoading> -->
            <div class="dropdown-list__item" v-for="(result, index) in results" :key="index" @click="setResult(result)"
                :class="{ 'is-active': index == arrowCounter }">
                <span class="item-text unit-item">{{ getItem(result) }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GComboBox',
    components: {
    },
    
    props: {
        items: {
            type: Array,
            required: false,
            default: () => [],
        },
        isAsync: {
            type: Boolean,
            required: false,
            default: false,
        },
        errorText: {
            type: String,
            default: '',
        },
        textPlaceHolder: {
            type: String,
            default: '',
        },
        isItemObject: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            isOpen: false,
            results: this.items,
            search: '',
            isLoading: false,
            arrowCounter: -1,
        }
    },

    watch: {
        // items: function (value, oldValue) {
        //     if (value.length !== oldValue.length) {
        //         this.results = value;
        //         // this.isLoading = false;
        //     }
        // },
        // search: function () {
        //     if (this.search == "" || this.search == undefined) {
        //         this.isEmptyInput = true;
        //     }
        //     else {
        //         this.$emit('setValueInput', this.search);
        //         this.isEmptyInput = false;
        //     }
        // }
    },

    methods: {
        btnShow() {
            this.isOpen = !this.isOpen;
        },
        setResult(result) {
            if(this.isItemObject) {
                this.search = result.name;
                this.$emit('sendItem', result.id);
                this.sendValidate(this.search)
            } else {
                this.search = result;
                this.$emit('sendItem', result);
                this.sendValidate(this.search)
            }
            this.isOpen = false;
        },
        filterResults() {
            // this.results = this.items.filter((item) => {
            //     if (this.search == "") return item;
            //     else {
            //         return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
            //     }
            // });
            for(let item of this.items) {
                if(this.isItemObject) {
                    if (this.search == "") return item;
                    else {
                        return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
                    }
                } else {
                    if (this.search == "") return item;
                    else {
                    return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
                }
                }
            }
        },
        onChange() {
            // if (this.isAsync) {
            //     this.isLoading = true;
            // } else {
                this.filterResults();
                this.isOpen = true;
            // }
        },
        onArrowDown() {
            if (this.arrowCounter < this.results.length - 1) {
                this.arrowCounter = this.arrowCounter + 1;
            }
        },
        onArrowUp() {
            if (this.arrowCounter > 0) {
                this.arrowCounter = this.arrowCounter - 1;
            }
        },
        onEnter() {
            this.isOpen = !this.isOpen;
            if (this.arrowCounter != -1) {  
                if(this.isItemObject) {
                    this.search = this.results[this.arrowCounter].name;
                    this.$emit('sendItem', this.results[this.arrowCounter].id);
                    this.sendValidate(this.search)
                } else {
                    this.search = this.results[this.arrowCounter];
                    this.$emit('sendItem', this.results[this.arrowCounter]);
                    this.sendValidate(this.search)
                }
            }
            // this.isOpen = false;
            this.arrowCounter = -1;
        },

        getItem(result) {
            if (this.isItemObject) {
                return result.name;
            } else {
                return result;
            }
        },

         /**
         * Mô tả: 
         * @param: input
         * return: 
         * Created by: nttrang
         * Created date: 19/04/2023
         */
         sendValidate(input){
            this.$emit('sendValidate', input)
        },
    }

}

</script>
<style scoped>

.dropdown-list__item:hover {
    background-color: rgba(80,184,60,0.1);
    cursor: pointer;
}

.is-active {
    background-color: rgba(80,184,60,0.1);
}

.dropdown:focus {
    outline: none;
    border: solid 1px #50b83c;
    border-radius: 4px;
}
</style>