<template>
    <div>
        <section class="jumbotron tex-center">
            <div class="container">
                <h1>Empleo: {{$route.params.id}}</h1>
            </div>
        </section>
    </div>
        
</template>

<script>

export default{
    data(){
        return {
          empleos: [],
          empleo: {title: ''}
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/jobs/' + this.$route.params.id).then(response=>{
            this.empleos.id = response.data.id;
            this.empleos.title = response.data.title;
            this.empleos.company = response.data.company;
            this.empleos.description = response.data.description;
            console.log(this.empleos);
                }).catch(function (error) {
                    console.log(error);
            });
    }   
    
}
</script>