<script>
  import '../app.css';
  import Header from '../components/navigation/Header.svelte';

  export let data;
 const {globalFoto} = data;
  // console.log("=>(+layout.svelte:7) data", data);

</script>

<div class=" flex min-h-screen flex-col justify-between">
  <Header />

  <div class="px-primary mt-[120px]">
    <slot />
  </div>

  <footer
    class="flex h-24 items-center justify-center border-t border-black uppercase"
  >
    <p>
      <span class="font-[700]">olej.to </span>
      <span class="italic"> pisze o trudach prostego życia</span>
    </p>
  </footer>
</div>
