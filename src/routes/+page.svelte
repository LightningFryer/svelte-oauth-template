<script>
    import { page } from "$app/stores"
    import {signOut, signIn} from "@auth/sveltekit/client"
    let session = $page.data.session
    console.log(session?.user)
</script>

<main class="h-screen flex flex-col justify-center items-center">
    <div class="card min-w-fit flex flex-row items-center justify-center shadow-xl p-7 gap-4">
        {#if !session}
            <div class="flex flex-col gap-5 justify-center items-center">
                <p class="font-semibold text-2xl">No user session found, please login.</p>
                <button class="btn btn-primary max-w-fit" on:click={() => signIn("google", {callbackUrl: "/"})}>Login with Google</button>
            </div>
        {:else}
            <div class="">
                <img src={`${$page.data.session?.user?.image}`} class="rounded-full" alt="user_photo"/>
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="text-2xl font-bold">{`Welcome ${$page.data.session?.user?.name}!`}</h1>
                <p>{`Email: ${$page.data.session?.user?.email}`}</p>
                <button class="btn btn-primary" on:click={() => signOut()}>Logout</button>
            </div>
        {/if}   
    </div>
</main>