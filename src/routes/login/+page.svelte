<script>
    import { signIn } from "@auth/sveltekit/client"
    import { page } from "$app/stores"
    // console.log($page.data.session?.user);
    
</script>

<main class="h-screen flex flex-col justify-center items-center" data-theme="light">
    <button class="btn hover:bg-black hover:text-white" on:click={() => signIn("google", {callbackUrl: "/"})}>Login with Google</button>
</main>