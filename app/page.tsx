import { database } from "@/db/database";
import { bids  as bidSchema, items } from "@/db/schema";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { revalidatePath } from "next/cache";
import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth()
const allItems = await database.query.items.findMany();
 
  return (
    <main className="container mx-auto py-12 space-y-5">
    <h2 className="text-2xl font-bold">Items for Sale</h2>
    <div className="grid grid-cols-4 gap-8">
    {
      allItems.map((item) => (
        <div key={item.id} className="border p-8 rounded-xl">
          {item.name}
        </div>
      ))
    }
    </div>

    </main>
  );
}
