
import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

// create User type 

async function main() {
  // ... you will write your Prisma Client queries here

  // pour essyaer de de regler l'erreur on initianiliser une seed

  await prisma.users.create({
    data:{
        // id:78495,
        email:"Mzikhela@gmail.com",
        image:"787854454754.png",
        nom:"Koffi",
        // products:["InvestmentFund", "InvestmentChange"],e
        password:"024784",
        tasks:[{singleTask:"norman est mort je dois aller à son enterement", time:new Date()},{singleTask:"j'i perdu le reste je vais les chercehr", time:new Date()}]
        
    }
})
    // const myUser = await prisma.users.findUnique({
    //     include:{
    //         scores:true
    //     }
    // })
    // console.dir(myUser,{depth:null})


  const allCustomers = await prisma.users.findMany()
  console.log(allCustomers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
main()

