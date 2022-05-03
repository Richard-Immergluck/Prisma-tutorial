import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const main = async() => {
  const newUser = await prisma.user.create({
    data:{
      email: "testemail@emailbollocks.com",
      firstName: "Joe",
      lastName: "Bloggs",  
      postCode: "CD23 6AH",
      avatar: "http://someinterestingavatar.github.com"
    }
  })
} 