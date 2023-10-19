
import  express from 'express';
import cors from "cors";
import { faker } from '@faker-js/faker';
import { createServer } from 'node:http';
import {studentsRouter} from "./routes/students.js";
//import {coursesRouter} from "./routes/courses.js";

const app = express();
const port = 3000;
const server = createServer(app);

app.use(cors({
  'Origin':'*'
}))

app.use('/students', studentsRouter);

//app.use('/courses', coursesRouter);

app.get('hello/:id',(req, res) => {
  faker.internet.email()
  const id = req.params.id;
  res.send(faker.internet.email())
})

function generateSchedule() {

  const schedule = {
    day: faker.date.weekday(),
    group: faker.person.zodiacSign(),
    time: faker.date.future().toLocaleTimeString(),
    course: faker.lorem.word(5),
    location: faker.location.city(),
  };
  return schedule;
}

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
