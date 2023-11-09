import { faker } from '@faker-js/faker';

 var fName = faker.person.firstName();

export const getStudent = (id) => {
    faker.seed(Number(id));
    return{
        id: id,
        name: fName,
        surname: faker.person.lastName(),
        email: faker.internet.email({firstName:fName}),
    };
}
export const getCourse = (id) => {
    faker.seed(Number(id));
    return{
        id: id,
        name: faker.person.jobTitle(),
        department:faker.person.jobTitle(),
        teacher: faker.person.fullName(),
        class: faker.person.zodiacSign(),
        date: faker.date.future,
    };
}
export const getLecturer = (id) => {
    faker.seed(Number(id));
    return{
        id: id,
        name: fName,
        surname: faker.person.lastName(),
        email: faker.internet.email({firstName:fName}),
        courses: faker.number.int(100)
    };
}
export const getGroup = (id) => {
    faker.seed(Number(id));
    return{
        id: id,
        course: faker.number.int(100),
        lecturer: faker.number.int(100),
        students: [faker.number.int(100),faker.number.int(100),faker.number.int(100),faker.number.int(100),faker.number.int(100)]
    };
}
export const getRoom = (id) => {
    faker.seed(Number(id));
    return{
        id: id,
        room: faker.person.zodiacSign(),
    };
}