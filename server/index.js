
import  express from 'express';
import cors from "cors";
import { faker } from '@faker-js/faker';
import { createServer } from 'vite';

const app = express();
const port = 3000;
const server = createServer(app);

app.use(cors({'Origin':'*'}))
app.get('hello/:id',res,)


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

/*
    /studnet/:id  ?od=  & do=
    /grupa/:nazwa
    /wykładowca/:id
    /sala/:nr
    /plan
*/