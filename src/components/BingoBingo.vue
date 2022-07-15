<template>
    <div>
    <button v-on:click="newgame">new</button>
    
       <TableTable ref="random" id="1"></TableTable>
       <TableTable ref="random" id="2"></TableTable>
       <!-- <div v-for="i,index in 2" :key="index"> -->
         <!-- <TableTable ref="random" :player-number="i"/> -->
    <!-- </div> -->
    </div>
</template>

<script>
    import TableTable from '../components/TableTable.vue';
    export default{
        name: 'BingoBingo',
        components: {
               TableTable
            },
        methods: {
            newgame(){
                this.$refs.random.ramdonlist;
            }
        },
        
    }
</script>