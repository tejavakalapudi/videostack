<template>
    <div>
        <input @input="onInputChange"/>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInputChange(e) {
            this.$emit('onSearchTermChange', e.target.value)
        }
    }
}
</script>

<style scoped>
    input{
        width: 75%;
    }

    div{
        text-align: center;
        margin: 20px;
    }
</style>

