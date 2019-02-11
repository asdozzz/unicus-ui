<template>
    <div class="unicus-group-btns">
        <div class="unicus-group-left-button" @click="prev" :class="{disabled:page <= 1}" v-if="totalPages > 1">
            <i class="fal fa-chevron-left"></i>
        </div>
        <div class="unicus-group-content" :class="{'px-0':totalPages == 1}">
            <v-slide-y-transition group tag="span">
                <template v-for="(item,i) in resultItems">
                    <v-btn :key="i" class="unicus-group-btns-item" flat @click="toggle(item)" :class="{'unicus-group-btns-item-active':isSelected(item)}">
                        {{getItemText(item)}}
                    </v-btn>
                </template>
            </v-slide-y-transition>

        </div>
        <div class="unicus-group-right-button" @click="next" :class="{disabled:page >= totalPages}" v-if="totalPages > 1">
            <i class="fal fa-chevron-right"></i>
        </div>
    </div>

</template>


<script>
    export default {
        name: "unicus-group-btns",
        props:{
            "value":{
                type:String|Number
            },
            "items":{
                require:true,
                type:Array,
                default:[]
            },
            "item_value":{
                type:String,
            },
            "item_text":{
                type:String,
            },
            "page_size":{
                type:Number|Number
            },
            "start_page":{
                type:Number|Number
            }
        },
        data: function (){
            return {
                model:undefined,
                pageSize:undefined,
                page:undefined
            };
        },
        computed:{
            totalPages:function (){
                return this.pageSize?Math.ceil(this.totalRecords/this.pageSize):0;
            },
            totalRecords:function (){
                return this.items?this.items.length:0;
            },
            startIndex:function (){

                if (!this.page)
                {
                    return 0;
                }

                return (this.page - 1)*this.pageSize;
            },
            endIndex:function (){
                if (!this.page)
                {
                    return 0;
                }

                let end = this.page*this.pageSize;

                if (end > this.totalRecords)
                {
                    end = this.totalRecords;
                }

                return end;
            },
            resultItems:function (){
                return this.items.slice(this.startIndex, this.endIndex);
            }
        },
        created: function (){
            this.model = this.value;
            this.pageSize = this.page_size?parseInt(this.page_size):this.totalRecords;
            this.page = this.start_page?parseInt(this.start_page):this.totalPages;
        },
        methods:{
            getItemText:function (item){

                if (typeof item == 'string' || typeof item == 'number')
                {
                    return item;
                }

                if (typeof item == 'object' && !this.item_text)
                {
                    console.error('need determine prop - %s',"item_text");
                    return null;
                }

                if (typeof item == 'object' && this.item_text && !item.hasOwnProperty(this.item_text))
                {
                    console.error('item not found prop - %s',this.item_text);
                    return null;
                }

                if (typeof item == 'object' && this.item_text && item.hasOwnProperty(this.item_text))
                {
                    return item[this.item_text];
                }

                console.log('unknown item type %s',typeof item);
                return null;
            },
            getItemValue:function (item){
                if (typeof item == 'string' || typeof item == 'number')
                {
                    return item;
                }

                if (typeof item == 'object' && !this.item_value)
                {
                    console.error('need determine prop - %s',"item_value");
                    return null;
                }

                if (typeof item == 'object' && this.item_value && !item.hasOwnProperty(this.item_value))
                {
                    console.error('item not found prop - %s',this.item_value);
                    return null;
                }

                if (typeof item == 'object' && this.item_value && item.hasOwnProperty(this.item_value))
                {
                    return item[this.item_value];
                }

                console.log('unknown item type %s',typeof item);
                return null;
            },
            toggle: function (item){
                let val = this.getItemValue(item);
                let newVal = null;

                if (String(val) != String(this.model))
                {
                    newVal = val;
                }

                this.model = newVal;
                this.$emit('input',newVal);
            },
            isSelected:function (item){
                let val = this.getItemValue(item);

                return String(val) == String(this.model);
            },
            prev: function (){
                let page = this.page - 1;

                this.page = page > 0?page:1;
            },
            next: function (){
                let page = this.page + 1;

                this.page = page > this.totalPages?this.totalPages:page;
            }
        }
    }
</script>

<style scoped>

</style>