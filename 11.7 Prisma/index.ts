import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.accounts.create({
    data:{
        account_id:78495,
        limit:9000,
        products:["InvestmentFund", "InvestmentChange"],
        scores:{
            exchange :40000,
            balance:5700000,
        }
    }
})
    const myUser = await prisma.accounts.findMany({
        include:{
            scores:true
        }
    })
    console.dir(myUser,{depth:null})


  const allCustomers = await prisma.accounts.findMany()
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

 