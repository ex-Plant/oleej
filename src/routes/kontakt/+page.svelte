<script lang="ts">
  import ContactMobile from "../../components/contakt/contact/ContactMobile.svelte";
  import ContactDesktop from "../../components/contakt/contact/ContactDesktop.svelte";
  import { onMount } from "svelte";
  import { loading } from "../../store/global";
  onMount(() => {
    window.scrollTo(0, 0);
    loading.set(false);
  });

</script>
<main class='flex flex-col pb-16   '>
  <ContactMobile />
  <ContactDesktop  />
</main>
