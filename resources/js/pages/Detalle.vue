<template>
    <div>
        <section class="jumbotron tex-center">
            <div class="container">
                <h1>Empleo: {{$route.params.id}}</h1>
            </div>
            <ul class="list-group">
                <li class="list-group-item" 
                v-for="(item, index) in empleos"  v-bind:key="index">
                    <p>{{item}} {{index}}</p>
                </li>
            </ul>      
        </section>
    </div>
        
</template>

<script>

export default{
    data(){
        return {
          empleos: []
        }
    },
    created() {
        axios.get('http://127.0.0.1:8000/api/jobs/' + this.$route.params.id).then(response=>{
            this.empleos = response.data;
            console.log(this.empleos);
                }).catch(function (error) {
                    console.log(error);
            });
    }   
    
}
</script>