<template>
    <div>
        <v-dialog transition="dialog-bottom-transition" max-width="800" v-model="dialog" persistent>
            <v-card flat>
                <v-form ref="form">
                   
                    <div id="table-toolbar">
                        <v-toolbar flat class="black">
                            <v-toolbar-title style="
                            padding: 3px 7px;
                            font-size: 17px;
                            color: #fff;">
                               Add Task
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn label="" :icon="true" iconstyle="color: #fff;" btnicon="close"
                                style="padding-right: 7px !important;" @click="editItem" />
                        </v-toolbar>
                    </div>
                    <v-container class="grey lighten-5">
                        <v-row justify="start">
                            <v-col sm="5.5">
                                <v-text-field v-model="task.description" label='Enter first_name' :required="true"
                                    rule="first_name is required" :outlined="true" :hide-details="true" :dense="true" />
                            </v-col>
                            <v-col sm="1"></v-col>
                            <v-col sm="5.5">
                                <v-text-field v-model="task.category_id" label='Enter last_name' :required="true"
                                    rule="last_name is required" :outlined="true" :hide-details="true" :dense="true" />
                            </v-col>
                        </v-row>
                        

                    </v-container>
                    <v-card-actions class="justify-end">
                       <v-btn color="primary" dark @click="saveTask" >Save</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

export default {
    name: "CustomerDialog",
    components: {

    },
    data() {
        return {
            task: {
                description: '',
                category_id: '',
            },
        }
    },
    props: {
        dialog: Boolean,
    },
    mounted() {
        this.selectedItem
    },
    methods: {
              saveTask(){
                debugger
                this.$store.dispatch('Tasks/saveTask', this.task)
                },
    }
}
</script>

<style></style>
