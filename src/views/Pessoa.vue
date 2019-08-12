<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TabelaP :tableData="pessoas" />
    <!-- <pre>{{pessoas}}</pre> -->
  </div>
</template>
<script>
 import TabelaP from '../components/TabelaPessoas';
export default {

  components: {
    TabelaP
  },
  data(){
    return {
      search:'',
    }
  },
  created(){

  },
  computed:{
    pessoas() {
      return this.$store.getters.getPessoas
    },
    filteredList() {
      return this.pessoas.filter(post => {
        return pessoas.name.toLowerCase().includes(this.search.toLowerCase())
      })
  },
  methods: {
  },
}
</script>

