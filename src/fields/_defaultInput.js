export const computed = {
    _value: {
        get(){
            return this.value;
        },
        set(value){
            this.$emit('input', value)
        }
    },
};