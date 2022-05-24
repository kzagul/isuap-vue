<template>
  <div>
    <app-nav-bar />
    <v-container fluid>
      <v-layout justify-center align-center>
        <v-flex shrink>
          <div class="pa-10 pb-8 pt-10 text-center">
            <h1 class="pb-5">
              Добро пожаловать на веб-сайт по
              <span class="red--text text--darken-4"><i>1С</i></span>
            </h1>
            <v-divider></v-divider>
            <div class="pt-5">
              <router-link
                to="/table"
                exact
                style="text-decoration: none; color: inherit"
              >
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="ma-1"
                  large
                  color="#BDBDBD"
                >
                  <h3>Перейти к таблице</h3>
                </v-btn>
              </router-link>
            </div>
          </div>
        </v-flex>
      </v-layout>
      <div id="draggable" class="ui-widget-content">
        <!-- <p>Этот хуй может залететь тебе в рот</p> -->
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import NavBar from "../components/Navbar.vue";
import $ from "jquery";

// import { jsPlumb } from 'jsplumb'
// Note that when jquery-ui is introduced,
// Write import juqery-ui directly, no effect, can only write directly to the specific method
// The advantage is that there are only two draggable droppables that need to be referenced.
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/ui/widgets/droppable";
import "jquery-ui/ui/widgets/resizable";

$(function () {
  $("#draggable").draggable();
});

export default {
  components: {
    "app-nav-bar": NavBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
img {
  width: 100px;
}
#draggable {
  width: 120px;
  height: 70px;
  padding: 0.5em;
}
</style>
