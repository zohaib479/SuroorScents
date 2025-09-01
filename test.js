import { PrismaClient } from "./src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  const order = await prisma.order.create({
    data: {
      name: "BILAL",
      email: "zohaib@example.com",
      address: "Karachi, Pakistan",
      product: "Perfume",
      quantity: 2,
    },
  });

  console.log("✅ Order created:", order);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
