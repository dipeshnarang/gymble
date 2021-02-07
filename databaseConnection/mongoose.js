const mongoose=require('mongoose')

const connectionStr=process.env.mongodbConnection

const dbConnectFucntion=async function(){
    try{
        await mongoose.connect(connectionStr,{useNewUrlParser : true , useCreateIndex: true, useFindAndModify:false,
            useUnifiedTopology:true} )
        console.log('Database Connection Successful')
    }catch(e){
        console.log({error:'connection failed'})
    }
}

dbConnectFucntion()
