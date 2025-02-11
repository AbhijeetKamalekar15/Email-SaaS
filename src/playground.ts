import { db } from "./server/db";

await db.user.create({
    data:{
        emailAddress: 'abc@gmail.com',
        firstName: 'abhijeet',
        lastName: 'kamalekar',
    }
})
console.log("Done!");
