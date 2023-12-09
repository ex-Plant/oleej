<script>
  import '../app.css';
  import Header from '../components/navigation/Header.svelte';
  import Footer from '../components/footer/Footer.svelte';
</script>

<div class=" flex min-h-[100vh] flex-col">
  <Header />

  <div class=" mt-20">
    <slot />
  </div>
  <Footer />
</div>
