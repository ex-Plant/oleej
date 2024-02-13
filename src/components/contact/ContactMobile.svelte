<script lang="ts">
  import BigArrowDown from '../../assets/BigArrowDown.svelte';
  import { onMount } from 'svelte';

  let anchor: HTMLAnchorElement;


  onMount(() => {
    const encodedUsername = btoa('piotrolej'); // Base64 encode
    const encodedHostname = btoa('gmail.com'); // Base64 encode
    const decodedLinkText = `${atob(encodedUsername)}@${atob(encodedHostname)}`; // Decode when setting

    anchor.href = `mailto:${decodedLinkText}`;
    anchor.textContent = decodedLinkText;
  });
</script>

<div class="grid max-w-[1440px] px-[clamp(20px,6vw,60px)] lg:hidden">
  <div class="py-12 text-[1.125rem] font-bold">
    <p class="leading-[110%]">Potrzebujesz tekstu?</p>
    <p class="leading-[110%]">Korekty? Pomysłu?</p>
  </div>

  <a
    bind:this="{anchor}"
    class="{' group text-[3.625rem]  font-bold'}"
  >
    <div class="pb-12">
      <p class="leading-[84%]">NAPISZ</p>
      <div class="flex items-center space-x-4 leading-[84%]">
        <span class="leading-[84%]"> DO MNIE </span>
        <span class=" mt-4 inline-block aspect-square h-[25px]">
          <BigArrowDown />
        </span>
      </div>
    </div>

    <p class="h-10 pt-4 text-[1.125rem] font-bold group-hover:underline">
      piotrolej@gmail.com
    </p>
  </a>
  <a
    target="_blank"
    href="https://www.instagram.com/0lejto?igsh=eXhoenEyNWNuOWJ4&utm_source=qr"
    class="flex items-center space-x-6 hover:underline"
  >
    <p class="text-[1.125rem] font-bold leading-[110%]">IG</p>
    <div class="grid">
      <p class="text-[1.125rem] leading-[110%]">olejto</p>
    </div>
  </a>
</div>
