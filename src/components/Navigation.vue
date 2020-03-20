<template>
    <div class="navigation">
        <v-app-bar
            class="app-bar mt-3"
            :color="colorNav"
            dense
            dark
            fixed
            >
            <v-spacer></v-spacer>
            <v-btn 
            class="mr-2 mb-2"
            icon 
            @click="previous()" 
            >
                <v-icon size="35px">keyboard_arrow_left</v-icon>
            </v-btn>
            <v-btn 
            class="mr-3 mb-2"
            icon 
            @click="next()" 
            >
            <v-icon size="35px">keyboard_arrow_right</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    props: ['colorNav'],
    data() {
        return {
            
        }
    }, 
    methods: {
        previous() {
            this.$router.go(-1);
        },
        next() {
            this.$router.go(1);
        }
    },
}
</script>

<style scoped>
    .app-bar {
        border-radius: 49px 49px 49px 49px !important;
        -moz-border-radius: 49px 49px 49px 49px !important;
        -webkit-border-radius: 49px 49px 49px 49px !important;
        width: 136px;
        height: 40px !important;
        margin: auto !important;
    }

</style>