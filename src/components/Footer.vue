<template>
    <div class="footer">
    <v-footer
      :color="colors.colorIcon"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          color="white"
          text
          rounded
          :href="icon.href"
          class="my-1 icon"
        >
          <v-icon>{{ icon.name }}</v-icon>
        </v-btn>

        <v-col cols="12">
          <v-card 
          :color="colors.colorDate"
          class="py-2 text-center white--text elevation-0"
          tile
          >{{ new Date().getFullYear() }} — <strong>Julián</strong>
          </v-card>
        </v-col>
      </v-row>
  </v-footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: {
      colors: {
        type: Object,
        default: () => ({
          colorIcon: value,
          colorDate: value
        })
      }
    },
    data(){
      return {  
          icons: [
              { name: 'mdi-facebook', href: 'https://www.facebook.com/julian.atehortua.969/'},
              { name: 'mdi-linkedin', href: 'https://www.linkedin.com/in/juli%C3%A1n-perdomo-67a32417a/'},
              { name: 'mdi-twitter' , href: 'https://twitter.com/'},
              { name: 'mdi-instagram' , href: 'https://instagram.com/'},
          ]
      }
    }
}
</script>

<style scoped>
    .icon:hover{
        text-decoration: none;
    }
</style>