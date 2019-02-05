<template>
    <div class="unicus-group-btns">
        <span  v-for="(item,i) in items" v-bind:key="i">
            <v-btn class="unicus-group-btns-item" flat @click="toggle(item)" :class="{'unicus-group-btns-item-active':isSelected(item)}">
                {{getItemText(item)}}
            </v-btn>
        </span>
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
            }
        },
        data: function (){
            return {
                model:undefined
            };
        },
        created: function (){
            this.model = this.value;
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
            }
        }
    }
</script>

<style scoped>

</style>