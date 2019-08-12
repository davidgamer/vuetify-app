<template>
  <v-data-table :headers="headers" :items="tableData" :items-per-page="5" class="elevation-1"></v-data-table>
</template>
<script>
import { type } from 'os';
export default {

props:{
     tableData:{
       type: Array,
       required: true
     },
  },
  data: () => {
    return {
      headers:[
        {text:'Nome', value:'name.first'},
        {text:'Celular', value:'cell'},
        {text:'email', value:'email'},
        {text:'Fixo', value:'phone'},
        {text:'Idade', value:'dob.age'}],
    }
  },
  methods:{

  },
  mounted (){
    this.getChaves()
  }
}
</script>
