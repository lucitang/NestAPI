import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
    const post1 = await prisma.car.upsert({
        where: { id : 1},
        update: {},
        create: {
            id: 1,
            brand: 'Brand 1',
            color: 'Color 1',
            model: 'Model 1',

        },
    });
    console.log(post1);
}
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () =>{
        await prisma.$disconnect();
    })