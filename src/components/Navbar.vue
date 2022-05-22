<template>
    <v-app-bar
      app
      color="amber lighten-2"
      dark
    >
      <div class="d-flex align-center">
        <router-link :to="'/'" exact>
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/1C_Company_logo.svg/2560px-1C_Company_logo.svg.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon color="deep-orange accent-3">mdi-basket</v-icon>
      </v-btn>
    </v-app-bar>
</template>


<script>
export default {
   name: 'NavBar',
}
</script>