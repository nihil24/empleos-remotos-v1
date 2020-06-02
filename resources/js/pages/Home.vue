<template>
<div>
     <h3>Lista de Empleos:</h3>
    <ul class="list-group">
        <li class="list-group-item" 
            v-for="(item, index) in empleos" :key="index" >
          <p>{{item.title}}</p>
          <p>{{item.company}}</p>
          <p>{{item.type}}</p>
          <p>{{item.location}}</p>
          <a :href="'http://127.0.0.1:8000/api/jobs/' + item.id"> {{item.title}} </a> 
        </li> 
    </ul>  
</div>
   
</template>

<script>
export default{
    data(){
        return {
            empleos: []
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/jobs').then(response=>{
            this.empleos = response.data;
                }).catch(function (error) {
                    console.log(error);
            });
    }   
    
}
</script>