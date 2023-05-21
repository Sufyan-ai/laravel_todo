<template>
    <div>
       <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>ToDo App</v-toolbar-title>

      <v-spacer></v-spacer>
      </v-app-bar>
        <v-card flat color="#f0f2f4">
            <div>
                <v-toolbar color="#f0f2f4" flat>
                    <!-- <div class="d-flex align-center">
                        <v-icon color="#980000" class="px-2">
                            mdi-account-group
                        </v-icon>
                        <v-toolbar-title class="text-h6 font-weight-bold">
                            Add Customers
                        </v-toolbar-title>
                    </div> -->
                    <v-spacer></v-spacer>
                   <v-btn
                    color="primary"
                    dark
                    @click="editItem"
                    >
                    New Item
                    </v-btn>
                </v-toolbar>
            </div>
            <v-data-table
        :headers="headers"
        :items="allTasks"
        sort-by="calories"
        class="elevation-1 mx-8"
       >
       <template v-slot:item.status="{ item }">
        <v-simple-checkbox
          v-model="item.status"
          @click="updateTask(item)"
        ></v-simple-checkbox>
      </template>
       </v-data-table>
      </v-card>

      
  
    <AddTask v-if="dialog" :dialog="dialog"/>
    </div>
</template>

<script>
import AddTask from './AddTask.vue'
    export default {

        components: {
        AddTask
        },
        computed: {

    //         this.shippoApiData.rates.map((resp: any) => {
    //     if(resp.option_checked){
    //       resp.option_checked = false
    //     }
    //   })
        allTasks() {
            debugger
            return this.$store.getters["Tasks/allTasks"]
        },
    },
        mounted() {
           this.$store.dispatch('Tasks/getTasks', this.task)
        },

        methods:{
            editItem() {
            debugger
            this.dialog = true
        },
        updateTask(item){
            debugger
          if(item['status'] == false){
            this.$store.dispatch('Tasks/updateTask', {id:item['id'],status:0})
          }else{
            this.$store.dispatch('Tasks/updateTask', {id:item['id'],status:1})
          }
          
        }
        },
        data: () => ({
        
            dialog: false,
            headers: [
                {
                    text: "Id#",
                    align: "start",
                    sortable: false,
                    value: "id"
                },
                {
                    text: "Descripton",
                    value: "description"
                },
                { text: 'Status', value: 'status' },
                // { text: 'Carbs (g)', value: 'carbs' },
                // { text: 'Protein (g)', value: 'protein' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
         })
    }
</script>
