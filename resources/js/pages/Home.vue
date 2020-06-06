<template>
<v-app>
    <v-container class="my-5" >
            <h3>Lista de Empleos:</h3>
        <v-layout row wrap>
            <v-row no-gutters >
                <v-flex xs12 sm6 md4 lg3 v-for="(item, index) in empleos" :key="index">
                    <v-card class="primary text-xs-center ma-3" >
                        <v-card-title class="text-xs-center ma-3">
                            <h5 class="secondary--text">{{item.title}}</h5>
                        </v-card-title>
                        
                        <v-card-subtitle>
                            <p class="secondary--text">{{item.company}}</p>
                        </v-card-subtitle>

                        <v-card-text>
                            <p class="secondary--text">{{item.type}}</p>
                        </v-card-text>
                        
                        <v-card-text>
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
    mounted() {
        axios.get('http://127.0.0.1:8000/api/jobs').then(response=>{
            this.empleos = response.data;
                }).catch(function (error) {
                    console.log(error);
            });
    }   
    
}
</script>