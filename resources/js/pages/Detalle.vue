<template>
<v-app>
    <v-card class="mx-auto" max-width="344">
        <v-card-title>
            <h3> {{empleo.title}} </h3>
        </v-card-title>

        <v-card-subtitle>
            <v-icon large>mdi-domain</v-icon>
            <h2>{{empleo.company}}</h2>
        </v-card-subtitle>
            
        <v-card-text>
            <p>{{empleo.description}}</p>
        </v-card-text>
        
    </v-card>  
</v-app>
  
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