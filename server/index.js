
import  express from 'express';
import cors from "cors";
import { faker } from '@faker-js/faker';
import { createServer } from 'node:http';
import {studentsRouter} from "./routes/students.js";
import {coursesRouter} from "./routes/courses.js";
import { lecturersRouter } from "./routes/lecturers.js";
import { groupsRouter } from "./routes/groups.js";
import { roomsRouter } from "./routes/rooms.js";


const app = express();
const port = 3000;
const server = createServer(app);

app.use(cors({
  'Origin':'*'
}))

app.use('/students', studentsRouter);
app.use("/lecturers", lecturersRouter);
app.use("/courses", coursesRouter);
app.use("/groups", groupsRouter);
app.use("/rooms", roomsRouter);

app.get('hello/:id',(req, res) => {
  faker.internet.email()
  const id = req.params.id;
  res.send(faker.internet.email())
})

server.listen(port,() => {
  console.log(`Strated on port: ${port}!`)
});

/*
    /student/:id  ?od=  & do=
    /grupa/:nazwa
    /wykładowca/:id
    /sala/:nr
    /plan
*/

// npm run dev
// npm run serve
