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
        department :faker.person.jobTitle(),
        teacher: faker.person.fullName(),
        class: faker.person.zodiacSign(),
        date: faker.date.future,
    };
}