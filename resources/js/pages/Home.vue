<template>
<v-app>
    <v-container class="my-5" >
            <h3>Lista de Empleos:</h3>
        <v-layout row wrap>
            <v-row no-gutters >
                <v-flex xs12 sm6 md4 lg3 v-for="(item, index) in empleos" :key="index">
                    <v-card class="primary ma-3" :elevation="20">
                        <v-card-title>
                            <h5 class="secondary--text">{{item.title}}</h5>
                        </v-card-title>
                        
                        <v-card-subtitle>
                            <v-icon large dark>mdi-domain</v-icon>
                            <p class="secondary--text">{{item.company}}</p>
                        </v-card-subtitle>

                        <v-card-text>
                            <v-icon medium dark>fas fa-calendar-alt</v-icon>
                            <p class="secondary--text">{{item.type}}</p>
                        </v-card-text>
                        
                        <v-card-text>
                            <v-icon medium dark>fas fa-map-marker-alt</v-icon>
                            <p class="secondary--text">{{item.location}}</p>
                        </v-card-text>
                        
                        <v-card-actions class="justify-center">
                            <v-btn class="secondary"> 
                                <h4 ><router-link v-bind:to="'/Detalle/' + item.id">Saber Más</router-link></h4>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-row>
        </v-layout>
    </v-container>
        
</v-app>
</template>

<script>
export default{
    data(){
        return {
            empleos: {}
        }
    },
    async created() {
        const result = await this.$axios.get('http://127.0.0.1:8000/api/jobs')
        this.empleos = result.data;
        console.log(result);
    }   
    
}
</script>
