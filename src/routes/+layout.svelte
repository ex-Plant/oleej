
<script lang="ts">
  //todo -> change prerendered to true when development is over
  export const prerender = true
  import '../app.css';
  import { fade } from 'svelte/transition';
  import Header from '../components/navigation/Header.svelte';
  import Footer from '../components/footer/Footer.svelte';
  import Spinner from '../components/Spinner.svelte';
</script>

<div class=" flex min-h-[100svh] flex-col">
  <Header />
  <div
    in:fade="{{ duration: 500 }}"
    out:fade="{{ duration: 500 }}"
    class=" mt-20"
  >
    <Spinner />
    <slot />
  </div>
  <Footer />
</div>
