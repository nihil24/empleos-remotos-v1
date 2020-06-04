<template>
    <div>
        <section class="jumbotron tex-center">
            <div class="container">
                <h1>Empleo: {{$route.params.id}}</h1>
            </div>
            <p>{{empleo.title}}</p>
            <p>{{empleo.company}}</p>
            <p>{{empleo.description}}</p>

        </section>
    </div>
        
</template>

<script>

export default{
    data(){
        return {
          empleo: {}
        }
    },
    created() {
        axios.get('http://127.0.0.1:8000/api/jobs/' + this.$route.params.id).then(response=>{
            this.empleo = response.data;
            console.log(this.empleo);
                }).catch(function (error) {
                    console.log(error);
            });
    }   
    
}
</script>