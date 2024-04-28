const app = Vue.createApp({
    data(){
        return{
            title:"بوف کور",
            author:"صادق هدایت",
            mount:0,
           
        }
        
    } , 
    methods:{ 
        chengeTitel(books){
         this.title=books ;          
        }
    }
    
})

app.mount("#app")

