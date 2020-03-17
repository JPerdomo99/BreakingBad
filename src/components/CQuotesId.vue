<template>
    <div class="cQuotesId">
        <v-container>
            <h1 class="font-weight-light mb-4 ml-2">Quotes</h1>
            <v-card color="green darken-2" shaped class="elevation-7 mb-10">
                <v-card-text class="font-italic font-weight-light title white--text">"{{ data.quote }}"</v-card-text>
                <v-card-text class="subtitle-1 white--text">-{{ data.author }}</v-card-text>
            </v-card>

            <h3 class="font-weight-regular mb-6">Other quotes by author</h3>
            <v-card class="elevation-3 mt-3 mb-10" v-for="(quote, index) of dataQuotesbyAuthor" :key="index">
                 <v-card-text class="font-italic font-weight-regular subtitle-1">"{{ quote.quote }}"</v-card-text>
                 <v-card-text class="font-weight-regular subtitle-2">-{{ quote.author }}</v-card-text>
            </v-card>
        </v-container>
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
            data: [],
            dataQuotesbyAuthor: [],
            author: ''
        }
    },
    methods: {
        async getQuote() {
            try {
                this.showLoading({title: 'Please wait...', color: 'info'});
                let datos = await Axios.get(`https://www.breakingbadapi.com/api/quotes/${this.id}`)
                                       .then(response => (this.data = response.data[0], this.author = response.data[0].author));
                this.getQuotesForActor();
            } catch (error) {
                console.log(error);
            } finally {
                this.hiddenLoading({color: 'info'});
            }
        },
        async getQuotesForActor() {
            let datos = await Axios.get(`https://www.breakingbadapi.com/api/quote?author=${this.getAuthor()}`);
            this.dataQuotesbyAuthor = datos.data;
        },
        getAuthor() {
            let patron = / /g;
            let newValue = "+"; 
            let author = this.author.replace(patron, newValue);
            
            return author;
        },
        ...mapMutations(['showLoading', 'hiddenLoading'])
    },
    computed: {
        ...mapState(['loading'])
    },
    mounted() {
        this.getQuote();
    }
}
</script>

