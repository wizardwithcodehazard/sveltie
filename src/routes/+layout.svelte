<script>
import Navbar from '$lib/Navbar.svelte'
import Footer from '$lib/Footer.svelte'
import "../app.css"
</script>
<!-- svelte-ignore component-name-lowercase -->
<Navbar/>
<slot />
<Footer />