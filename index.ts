import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: [{ level: "query", emit: "event" }] });

prisma.$on(
  //@ts-ignore
  "query" as any,
  async (e: any) => {
    console.debug("Paramas: ", e.params);
  }
);

async function main() {
  const result = await prisma.datetime.findMany({
    where: {
      date: new Date("2024-01-01"),
      time: "2024-01-01T12:00:00Z",
    },
  });

  console.log(result);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
