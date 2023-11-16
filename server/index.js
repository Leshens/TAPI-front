
import  express from 'express';
import cors from "cors";
import { faker } from '@faker-js/faker';
import { createServer } from 'node:http';
import {studentsRouter} from "./routes/students.js";
import {coursesRouter} from "./routes/courses.js";
import { lecturersRouter } from "./routes/lecturers.js";
import { groupsRouter } from "./routes/groups.js";
import { roomsRouter } from "./routes/rooms.js";
import swaggerUi from 'swagger-ui-express';
import swaggerAutogen from 'swagger-autogen';


const app = express();
const port = 3000;
const server = createServer(app);

const doc = {
  info: {
    version: '1.0.0',
    title: 'TAPI-FRONT',
    description: 'TAPI-FRONT'
   },
   components: {
      schemas: {
      Student:{
          value:{
              id: 1,
              name: 'John',
              surname: 'Doe',
              email: 'john.doe@gmail.com'
          }
      }
    }
}
};

const route = ['./server/index.js'];
const outputFile = './swagger.json';
const def = await swaggerAutogen({openapi: '3.0.0'})(outputFile, route, doc);



app.use(cors({
  'Origin':'*'
}))

app.use('/students', studentsRouter);
app.use("/lecturers", lecturersRouter);
app.use("/courses", coursesRouter);
app.use("/groups", groupsRouter);
app.use("/rooms", roomsRouter);
if(def){
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(def.data));
}


app.get('hello/:id',(req, res) => {
  // #swagger.tags = ['Hello']
  faker.internet.email()
  const id = req.params.id;
  res.send(faker.internet.email())
})
server.listen(port,() => {
  console.log(`Strated on port: ${port}!`)
});

// npm run dev
// npm run serve
