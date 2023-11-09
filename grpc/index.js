import * as protoLoader from "@grpc/proto-loader"
import * as grpc from "@grpc/grpc-js"
import { response } from "express";


const packageDefinition = 
    protoLoader.loadSync('grpc/proto/schedule.proto');
const scheduleProto = 
    grpc.loadPackageDefinition(packageDefinition);



const server = new grpc.Server();

server.addService(scheduleProto.ScheduleService.service, {
    getStudent: (req,res) => {
        console.log(req.request);
        res({name:"",surname:""});
    }
})

server.bindAsync("127.0.0.1:9090", grpc.ServerCredentials.createInsecure(),
    (err,port) =>{
        if(err != null){
            return console.error(err);
        }
        console.log(`grpc listening on ${port}`);
        server.start();
    })