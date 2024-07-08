// const tinderUser = new Object();
const tinderUser={}

tinderUser.id="123abc";
tinderUser.name="Ronaldo";
tinderUser.isLoggedIn= false;
// console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Lionel",
            lastName:"Messi"
        }
    }
}
// console.log(regularUser.fullname.userfullname);
const obj1={1:"a", 2:"b"};
const obj2={3:"a", 4:"b"};
const obj4={5:"a", 6:"b"};

// const obj3= Object.assign({}, obj1, obj2);
const obj3={...obj1, ...obj2};
// console.log(obj3);

const user=[
    {
        id:1,
        email:"abc1@gmail.com"
    },
    {
        id:2,
        email:"abc2@gmail.com"
    },
    {
        id:3,
        email:"abc3@gmail.com"
    },
]
user[1].email;
// console.log("tinderUser");

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedOut'));

const course={
    coursename:"Learn JavaScript",
    price:"100",
    CourseInstructor:"Ronaldo"
}
// destructure
// course.CourseInstructor
const {CourseInstructor:instructor}=course
// console.log(CourseInstructor);
console.log(instructor);
//Json
// {
//     "name":"Halland";
//     "coursename":"Json Tutorial";
//     "price":"free";
// }
