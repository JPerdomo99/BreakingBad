<template>
    <div class="Ccharacters">
        <v-row>
            <v-col
                cols="auto"
                class="mr-auto"
            >
                <h1 class="font-weight-light mb-4">Characters</h1>
            </v-col>
            <v-col cols="auto">
                <v-btn outlined color="primary" class="mt-3" @click="start()">Start</v-btn>
            </v-col>
        </v-row>
        
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

        <v-data-table
        :headers="headers"
        :items="data"
        hide-default-footer
        :server-items-length="itemsPerPageLimit"
        disable-sort
        class="elevation-3"
        ></v-data-table>

        <v-row>
            <v-col
            cols="auto"
            class="mr-auto"
            >
                <v-select
                :items="items"
                label="Limit per page"
                class="selectCount"
                v-model="limitPage"
                ></v-select>    
            </v-col>
            <v-col 
            cols="auto" 
            class="navButtons">
                <v-btn v-if="page == 1"
                fab
                small 
                disabled
                color="blue darken-4"
                class="buttonDisabled"
                @click="previousPage()"
                >
                    <v-icon dark>keyboard_arrow_left</v-icon>
                </v-btn>
                <v-btn v-else
                fab dark 
                small 
                color="blue darken-4 mr-3"
                @click="previousPage()"
                >
                    <v-icon dark>keyboard_arrow_left</v-icon>
                </v-btn>
                <v-btn 
                fab dark 
                small 
                color="blue darken-4"
                @click="nextPage()"
                >
                    <v-icon dark>keyboard_arrow_right</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Axios from "axios";
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
    name: 'CCharacters',
    data() {
        return {
            limitPage: 5,
            items: [ 5, 10, 15, 20],
            headers: [
                { text: 'Name', value: 'name', align: 'center' },
                { text: 'Nick Name', value: 'nickname', align: 'center' },
                { text: 'Ocupation', value: 'occupation', align: 'center' },
                { text: 'Status', value: 'status', align: 'center' },
                { text: 'Actor', value: 'portrayed', align: 'center', align: 'center' },
                { text: 'Show more', value: '', align: 'center'}
            ],
            data: [],
            itemsPerPageLimit: 0,
            page: 1
        }
    },
    methods: {
        async getCharacters() {
            try {
                this.showLoading({title: 'Please wait...', color: 'info'});
                let datos = await Axios.get(`https://breakingbadapi.com/api/characters?category=Breaking+Bad&limit=${this.limitPage}&offset=${this.page}`);
                this.itemsPerPageLimit = datos.data.length;
                this.data = datos.data;
            } catch (error) {
                console.log(error);
            } finally {
                this.hiddenLoading({color: 'info'})
            }
        },
        previousPage() {
            if(this.page > 1) {
                this.page = this.page - 1;
                this.getCharacters();
            }
        },
        nextPage() {
            this.page = this.page + 1;
            this.getCharacters();
        },
        start() {
            this.page = 1;
            this.getCharacters();
        },
        ...mapMutations(['showLoading', 'hiddenLoading'])
    },
    computed: {
        ...mapState(['loading'])
    },
    watch: {
        limitPage() {
            this.getCharacters();
        }
    },
    mounted() {
        this.getCharacters();
    }
}
</script>

<style scoped>
    .selectCount {
        padding-top: 12px !important;
    }
    .navButtons {
        margin-top: 10px !important;
    }
    .buttonDisabled {
        margin-right: 12px !important;
    }
</style>