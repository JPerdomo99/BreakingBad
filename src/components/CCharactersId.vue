<template>
    <div class="CcharactersId">
        <v-row justify="center">
             <!--Dialog-->
            <v-dialog
                v-model="loading.state"
                hide-overlay
                persistent
                width="400"
            >
                <v-card
                class="pt-2"
                :color="loading.color"
                dark
                >
                <v-card-text>
                    {{loading.title}}
                    <v-progress-linear
                    indeterminate
                    color="white"
                    class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
                </v-card>
            </v-dialog>
            <!--Dialog-->
            <v-card
            class="elevation-0 d-flex justify-center"
            v-if="data == undefined || data.length == 0"
            >   
                <v-icon
                color="red darken-1"
                class="iconFail"
                >
                    sentiment_very_dissatisfied
                </v-icon>
                <v-card-title color="grey lighten-1" class="display-3 font-weight-thin">No data found</v-card-title>
            </v-card>
            <v-card 
            shaped 
            elevation="4" 
            width="800"
            v-else
            >
                <v-row>
                    <v-col cols="auto" xs="12">
                        <v-container>
                            <v-img 
                            class="image"
                            :src="data.img"
                            width="300"
                            contain
                            >
                                <template v-slot:placeholder>
                                    <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                                    >
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-container>
                    </v-col>
                    <v-col cols="auto">
                        <v-card-title class="display-1 mb-3">Breaking Bad</v-card-title>
                        <v-card-subtitle class="title mb-2">{{ data.nickname }}</v-card-subtitle>
                        <v-card-text>Name: {{ data.name }}</v-card-text>
                        <v-card-text>Actor: {{ data.portrayed }}</v-card-text>
                        <v-card-text>Ocupation: <span v-for="(item, index) of data.occupation" :key="index">{{ item }} </span></v-card-text>
                        <v-card-text>Birthday: {{ data.birthday }} 
                            <v-icon 
                            v-if="data.birthday != 'Unknown'" 
                            color="pink accent-2" 
                            class="ml-2 mb-2">cake</v-icon>
                            <v-icon 
                            v-else 
                            color="grey lighten-1" 
                            class="ml-2 mb-2">help</v-icon>

                        </v-card-text>
                        <v-card-text>Season(s): <span v-for="(item, index) of data.appearance" :key="index">{{ item }} </span></v-card-text>
                        <v-card-text>Status: 
                            <v-icon color="green darken-3" class="ml-1" v-if="data.status == 'Alive'">wifi</v-icon>
                            <v-icon color="red accent-4" class="ml-1" v-else>wifi_off</v-icon>
                        </v-card-text>
                    </v-col>
                </v-row>
            </v-card>
        </v-row>
    </div>
</template>

<script>
import Axios from "axios";
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
    data() {
        return {
            data: [],
            id: this.$route.params.id
        }
    },
    methods: {
        async getCharacter() {
            try {
                this.showLoading({title: 'Please wait...', color: 'info'});
                let datos = await Axios.get(this.getUrl());
                this.data = datos.data[0];
            } catch (error) {
                console.log(error);
            } finally {
                this.hiddenLoading({color: 'info'});
            }
        },
        getUrl() {
            var reAB = /[A-Za-z]/;
            var re09 = /[0-9]/;
            var url;
            if (reAB.test(this.id)) {
                let patron = / /g;
                let newValue = "+"; 
                this.id = this.id.replace(patron, newValue);
                url = `https://www.breakingbadapi.com/api/characters?name=${this.id}`;
            } else if (re09.test(this.id)){
                url = `https://www.breakingbadapi.com/api/characters/${this.id}`;
            }

            return url;
        },
        ...mapMutations(['showLoading', 'hiddenLoading'])
    },
    computed: {
        ...mapState(['loading'])
    },
    mounted() {
        this.getCharacter();
        console.log(this.data);
    }
}
</script>

<style scoped>
    .image {
        border-radius: 24px 0px 24px 0px !important;
    }

    .iconFail {
        font-size: 200px !important;
    }

    @media only screen and (max-width: 750px) {
        .image {
            width: 100% !important;
            border-radius: 24px 24px 24px 24px !important;
            justify-content: center !important;
        }
    }
</style>