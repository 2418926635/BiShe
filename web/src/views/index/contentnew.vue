<template>
    <div class="user-main">
        <!-- <transition enter-active-class="animated fadeInLeft"> 
            <router-view :key="key"></router-view>
        </transition> -->
        <!-- <router-view :key="key"></router-view> -->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <!-- <router-view :key="key" /> -->
    </div>
</template>
<script>


export default {
    name: 'contentnew',
    components: {

    },
    data() {
        return {
            cachedViews: []
            // key:'/contentnew/school'
        }
    },
    created() {

    },
    methods: {

    },
    computed: {
        // cachedViews() {
        //     return this.$store.state.tagsView.cachedViews
        // },
        key() {
            return this.$route.path
        }
    }
}
</script>

<style scoped>
</style>