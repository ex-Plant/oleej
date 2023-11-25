<script>
  import '../app.css';
  import { twMerge } from "tailwind-merge";
  import Header from "../components/navigation/Header.svelte";
</script>

    <Header />

  <div class='mt-[120px] px-primary'>
    <slot />
  </div>

<footer class='h-24 flex justify-center items-center uppercase border-t border-black'>
  <p>
    <span class='font-[700]'>olej.to </span>
    <span class='italic'>  pisze o trudach prostego życia</span>
  </p>


</footer>
