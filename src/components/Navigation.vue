<template>
    <div class="navigation mb-3">
        <v-app-bar 
            class="app-bar"
            color="green darken-4"
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
    .app-bar{
        border-radius: 0px 0px 94px 0px;
        -moz-border-radius: 0px 0px 94px 0px;
        -webkit-border-radius: 0px 0px 94px 0px;
        width: 136px;
        height: 40px !important;
    }
</style>