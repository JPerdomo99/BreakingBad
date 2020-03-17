<template>
    <div class="CepisodesId">
        <v-card
        elevation="4"
        width="auto"
        >
            <v-container>
                <v-card-title class="display-1 mb-3">Breaking Bad</v-card-title>
                <v-card-text>Title: {{ data.title }}</v-card-text>
                <v-card-text>Season: {{ data.season }}</v-card-text>
                <v-card-text>Episode: {{ data.episode }}</v-card-text>
                <v-card-text>Air date: {{ data.air_date }}</v-card-text>
                <v-card-subtitle class="subtitle-1 text-center black--text">Characters</v-card-subtitle>
                <v-data-table
                :headers="headers"
                :items="characters"
                hide-default-footer
                disable-sort
                >
                    <template v-slot:item.id="{ item }">  
                        <v-btn 
                        icon
                        :to="{ name: 'CharactersId', params: { id: item.id } }">
                            <v-icon 
                            color="blue accent-4"
                            >visibility
                            </v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import Axios from "axios";
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
    data() {
        return {
            id: this.$route.params.id,
            headers: [
                { text: 'Name', value: 'name', align: 'center' },
                { text: 'Show', value: 'id', align: 'center' },
            ],
            data: [],
            characters: []
        }
    },
    methods: {
        async getEpisode() {
            try {
                this.showLoading({title: 'Please wait...', color: 'info'});
                let datos = await Axios.get(`https://www.breakingbadapi.com/api/episodes/${this.id}`);
                this.data = datos.data[0];
                for (let character of this.data.characters) {
                    this.characters.push({ name: character, id: character });
                }
            } catch(error) {
                console.log(error);
            } finally {
                this.hiddenLoading({color: 'info'});
            }
        }, 
        ...mapMutations(['showLoading', 'hiddenLoading'])
    },
    computed: {
        ...mapState(['loading'])
    },
    mounted() {
        this.getEpisode();
    }
}
</script>

<style scoped>
    .subtitle-1 {
        text-decoration: underline !important;
    }
</style>