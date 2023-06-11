import { db } from "./db/db";
import { UserSchema } from "./db/schema/user.schema";

const runQuery = async () => {
  const insertResult = await db.insert(UserSchema).values({
    name: "drizzle2",
    email: "info2@drizzle.team",
    password: "123456",
  });
  console.log(JSON.stringify(insertResult, null, 2));

  const selectResult = await db.select().from(UserSchema);
  console.log(JSON.stringify(selectResult, null, 2));
};
runQuery();
