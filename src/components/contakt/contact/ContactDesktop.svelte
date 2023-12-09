<script>
import BigArrowDown from "../../../assets/BigArrowDown.svelte";
</script>

  <div
    class="xl:mx-auto md:grid max-w-[1440px] gap-y-6 px-[clamp(20px,6vw,60px)]  hidden pt-[156px]"
  >
    <a
      on:click="{() => alert('To jeszcze nie działa')}"
      class="{'pr-4 font-bold text-desktop196 '}"
      href="mailto:piotrolej@gmail.com"
    >
      <p>NAPISZ</p>
      <span>  DO MNIE </span>
      <div class=" inline-block aspect-square w-[clamp(53px,7vw,106px)]">
        <BigArrowDown />
      </div>
      <p class="h-10 pt-4 text-[clamp(32px,3vw,44px)] font-bold">piotrolej@gmail.com</p>
    </a>
    <div class="flex space-x-[150px]  pt-[144px]">
      <p class=" text-[clamp(24px,2vw,30px)]  font-bold">SOCIALE</p>
      <div class="grid gapy-8">
        <a class=" text-[clamp(24px,2vw,30px)] " href="#">olejtopisze</a>
        <a class=" text-[clamp(24px,2vw,30px)] " href="#">kotlet_devolaj</a>
      </div>
    </div>

  </div>
