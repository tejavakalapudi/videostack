<template>
    <div class='container'>
        <SearchBar/>
        <router-view></router-view>
    </div>
</template>

<script>
    import SearchBar from './components/SearchBar';
    export default {
        name: 'App',
        components: {
            SearchBar
        }
    }
</script>

