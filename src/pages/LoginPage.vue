<template>
   <v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="amber lighten-2">
                         <v-img
                            alt="Vuetify Logo"
                            class="shrink mr-2"
                            contain
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/1C_Company_logo.svg/2560px-1C_Company_logo.svg.png"
                            transition="scale-transition"
                            width="40"
                        />
                        <v-spacer></v-spacer>
                        <v-toolbar-title>
                            <h2 class="red--text text--darken-1">Авторизация</h2>
                        </v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                            <v-row>
                                <v-icon class="pl-3 pr-3" color="deep-orange accent-3">mdi-account</v-icon>
                                <v-text-field
                                    name="login"
                                    label="Логин"
                                    type="text"
                                ></v-text-field>
                            </v-row>
                            <v-row>
                                <v-icon class="pl-3 pr-3" color="deep-orange accent-3">mdi-lock</v-icon>
                                <v-text-field
                                    id="password"
                                    name="password"
                                    label="Пароль"
                                    type="password"
                                ></v-text-field>
                            </v-row>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <!-- red darken-1 -->
                        <v-btn class=" red--text text--darken-1" to="/">
                            <v-icon class="pr-1" color="deep-orange accent-3" large>mdi-login-variant</v-icon>
                            Войти
                        </v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
export default {

   props: {
      source: String,
   },
};
</script>

<style></style>
