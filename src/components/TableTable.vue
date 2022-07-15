<template>
    <div class="TableTable">
        <button v-on:click="ramdonlist()">new</button>
        <table width="300px" height="300">
            <tr v-for="j,index in 5" :key="index">
                <td v-for="i,index in 5" :key="index" :id="j"> 
                    <div v-on:click="clickchange(i+(j-1)*5-1)" :id="i" :style="bingolist[i+(j-1)*5-1].background">
                        {{bingolist[i+(j-1)*5-1].number}}   
                    </div>
                </td> 
            </tr>
        </table>
    </div>
</template>

<script>
    export default{
        name:'TableTable',
        data() {
            return {
                bingolist:[
            {number:1 ,background:"background-color:white;"},{number:2 ,background:"background-color:white;"},{number:3 ,background:"background-color:white;"},
            {number:4 ,background:"background-color:white;"},{number:5 ,background:"background-color:white;"},{number:6 ,background:"background-color:white;"},
            {number:7 ,background:"background-color:white;"},{number:8 ,background:"background-color:white;"},{number:9 ,background:"background-color:white;"},
            {number:10,background:"background-color:white;"},{number:11,background:"background-color:white;"},{number:12,background:"background-color:white;"},
            {number:13,background:"background-color:white;"},{number:14,background:"background-color:white;"},{number:15,background:"background-color:white;"},
            {number:16,background:"background-color:white;"},{number:17,background:"background-color:white;"},{number:18,background:"background-color:white;"},
            {number:19,background:"background-color:white;"},{number:20,background:"background-color:white;"},{number:21,background:"background-color:white;"},
            {number:22,background:"background-color:white;"},{number:23,background:"background-color:white;"},{number:24,background:"background-color:white;"},
            {number:25,background:"background-color:white;"}],
            }
        },
        methods: {
            ramdonlist:function(){
                for(var i = 0; i < this.bingolist.length; i++){
                var randomposition = Math.floor(Math.random() * (25-i));
                var change = this.bingolist[i].number;
                this.bingolist[i].number= this.bingolist[randomposition].number;
                this.bingolist[randomposition].number = change;
                }
                //this.bingolist[0].background="background-color:white;";
                this.bingolist.forEach(element =>element.background="background-color:white;");
            },


            async clickchange(number){
            // if(this.playerturn==this.mynumber){
            //       this.$store.commit("addnumber",number);  //名稱 變數(物件)
            // }
            this.bingolist[number].background='background-color:orange;';
            // e.target.setAttribute('style','background-color:orange;');
            },
            
        
            
        },created () { console.log('created'); }, mounted () { this.ramdonlist(); }, unmounted () { console.log('unmounted'); },
    }
</script>
    
<style scoped>
table {
  border-collapse: collapse;
}
table, th, td {
  border: 1px solid black;
}

</style>