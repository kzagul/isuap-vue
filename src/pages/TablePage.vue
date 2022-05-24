<template>
  <div>
    <app-nav-bar />
    <router-link :to="'/'" exact style="text-decoration: none; color: inherit">
      <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
        <v-icon> mdi-arrow-left </v-icon>
        На главную
      </v-btn>
    </router-link>
    <table-view />
  </div>
</template>

<script>
import NavBar from "../components/Navbar.vue";
import TableView from "../components/TableView.vue";

export default {
  components: {
    "app-nav-bar": NavBar,
    "table-view": TableView,
  },
  data: () => ({
    //
  }),
};
</script>
