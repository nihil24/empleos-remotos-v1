<template>
<v-app>
    <v-container>
        <h3>Lista de Empleos:</h3>
        <v-card class="mx-auto primary text-xs-center ma-3 " max-width="344" :elevation="20">
        <v-card-title>
            <h3 class="secondary--text"> {{empleo.title}} </h3>
        </v-card-title>

        <v-card-subtitle>
            <v-icon x-large dark>mdi-domain</v-icon>
            <h5 class="secondary--text">{{empleo.company}}</h5>
        </v-card-subtitle>

        <v-card-text>
            <p class="secondary--text">{{empleo.description}}</p>
        </v-card-text>

        <v-card-text>
            <v-icon medium dark>fas fa-calendar-alt</v-icon>
            <p class="secondary--text">{{empleo.type}}</p>
        </v-card-text>

        <v-card-text>
            <v-icon medium dark>fas fa-map-marker-alt</v-icon>
            <p class="secondary--text">{{empleo.location}}</p>
        </v-card-text>

    </v-card> 
    </v-container>
     
</v-app>
  
</template>

<script>

export default{
    data(){
        return {
          empleo: {}
        }
    },
    async created() {
        const result = await this.$axios.get('http://127.0.0.1:8000/api/jobs/' + this.$route.params.id);
        this.empleo = result.data;
        console.log(result);  
    }
    
}
</script>