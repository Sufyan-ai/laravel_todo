<template>
    <v-app>
        <div class="public_layout">
            <router-view></router-view>
        </div>
    </v-app>
</template>
<script>

export default {
    name: 'App',

    components: {

    }

}
</script>
<style>
.public_layout {
    background-color: #f0f2f4;
}
</style>
<style scoped>
.myCustomClass {
  z-index: 99 !important;
  position: fixed;
  right: 20px;
  top: 100px;
  color: white;
}
</style>
