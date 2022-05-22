<template>
<div>
    <app-nav-bar />
    <table-view />
</div>
    
</template>

<script>
import NavBar from "../components/Navbar.vue"
import TableView from "../components/TableView.vue"


export default {
  components: {
   'app-nav-bar': NavBar,
   'table-view': TableView
  },
  data: () => ({
    //
  }),
}
</script>