<script lang="ts">
  export let name: string;
  export let link: string;
</script>

<a
  href="{link}"
  class="group relative flex h-20 items-center pl-4 text-mobile14 md:pl-8 md:text-desktop24 lg:pl-12 xl:pl-16"
>
  <div class=" relative">
    <span class="whitespace-nowrap"> {name} </span>
    <span
      class="{`absolute bottom-[-3px] left-[50%] h-[1px] w-0 rounded bg-black duration-300 group-hover:left-0 group-hover:w-full`}"
    >
    </span>
  </div>
</a>
