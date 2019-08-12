<template>
  <h2>Bem Vindo!</h2>
</template>

<script>
export default {
data(){return{
}},
  created(){
    this.getPeople();
  },
    methods: {
     getPeople () {
      let vm = this;
      this.$store.dispatch('fetchPessoas');
    },
}
};
</script>
