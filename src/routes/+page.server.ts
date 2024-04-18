import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"
 
export const load: PageServerLoad = async (events) => {
  const session = await events.locals.auth()
  console.log(session?.user?.id);
 
  // if (!session?.user) {
  //   redirect(303, `/login`)
  // }
 
  return {session}
}