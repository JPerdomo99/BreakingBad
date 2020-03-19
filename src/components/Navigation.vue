<template>
    <div class="navigation">
        <v-app-bar 
            class="app-bar"
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
        border-radius: 0px 0px 94px 0px;
        -moz-border-radius: 0px 0px 94px 0px;
        -webkit-border-radius: 0px 0px 94px 0px;
        width: 136px;
        height: 40px !important;
        margin-top: 64px !important;
    }

    @media only screen and (max-width: 960px) {
        .app-bar {
            margin-top: 56px !important;
        }
    }
</style>