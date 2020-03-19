<template>
  <v-app>
    <Menu></Menu>
    <Navigation colorNav="blue accent-3"></Navigation>
    <v-content class="mt-7 mb-5">
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
    <Footer :colors="{ colorIcon: 'blue accent-4', colorDate: 'blue accent-3' }"></Footer>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import Menu from '@/components/Menu.vue';

export default {
  name: 'App',

  components: {
    Menu,
    Navigation,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
