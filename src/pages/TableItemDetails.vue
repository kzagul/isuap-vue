<template>
    <div>
        <router-link :to="'/table'" exact style="text-decoration: none; color: inherit;">    
            <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                    <v-icon>
                        mdi-arrow-left
                    </v-icon>
                    Назад к таблице
            </v-btn>
         </router-link>

        <app-nav-bar />

        ДАБЛ КЛИК ПРОИЗВЕДЕН 

    </div>
</template>


<script>
import NavBar from "../components/Navbar.vue"

export default {
    components: {
      'app-nav-bar': NavBar,
    },
    
}
</script>