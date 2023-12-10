<script lang="ts">
  export const prerender = true;
  import { onMount } from 'svelte';
  import { loading } from '../../store/global';
  import ContactDesktop from '../../components/contact/ContactDesktop.svelte';
  import ContactMobile from '../../components/contact/ContactMobile.svelte';

  onMount(() => {
    window.scrollTo(0, 0);
    loading.set(false);
  });
</script>

<main class="flex flex-col pb-16">
  <ContactMobile />
  <ContactDesktop />
</main>
