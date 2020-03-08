<template>
  <v-app>
    <Navigation></Navigation>
    <v-content class="mt-12">
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',

  components: {
    Navigation
  },

  data: () => ({
    //
  }),
};
</script>
