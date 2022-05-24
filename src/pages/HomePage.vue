<template>
    <div>
        <app-nav-bar />
        <v-container fluid>
            <v-layout justify-center align-center>
                <v-flex shrink>
                    <div class="pa-10 pb-8 pt-10 text-center">
                        <h1 class="pb-5">Добро пожаловать на веб-сайт по <span class="red--text text--darken-4"><i>1С</i></span></h1>
                        <v-divider></v-divider>
                        <div class="pt-5">
                            <router-link to="/table" exact style="text-decoration: none; color: inherit;">
                                <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#BDBDBD">
                                    <h3>Перейти к таблице</h3>
                                </v-btn>
                            </router-link>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>


<script>
import NavBar from "../components/Navbar.vue"

export default {
  components: {
   'app-nav-bar': NavBar
  },
  data: () => ({
    //
  }),
}
</script>