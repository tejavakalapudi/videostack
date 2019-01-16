<template>
    <div>
        <input @input="fetchVideosBySearchTerm"/>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'SearchBar',
    methods: mapActions( ['fetchVideosBySearchTerm'] )
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

