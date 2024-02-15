<script lang="ts">
  import ContactDesktop from '../../components/contact/ContactDesktop.svelte';
  import ContactMobile from '../../components/contact/ContactMobile.svelte';
  import { fade } from 'svelte/transition';
</script>

<main in:fade="{{ duration: 500 }}" class="flex flex-col pb-16">
  <ContactMobile />
  <ContactDesktop />
</main>
