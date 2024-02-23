<script lang="ts">
  import CustomImage from '../ui/CustomImage.svelte';
  import type { ImageType } from '../../types';
  import { customSanitization } from '../../helpers/customSanitization';
  export let postFoto: ImageType;
  // export let images = null;

  // $: if (images) {
  //   console.log(images);
  // }
</script>

<CustomImage
  className="object-top shadow-[inset_0_0_0_1px_black] md:hidden"
  sizes="(max-width: 768px) 100vw"
  aspectRatio="{316 / 260}"
  height="auto"
  width="768"
  data="{postFoto}"
/>
<CustomImage
  className="shadow-[inset_0_0_0_1px_black] hidden md:block"
  sizes="(max-width: 1320px), 100vw"
  aspectRatio="{1320 / 327}"
  height="auto"
  width="{1320}"
  data="{postFoto}"
/>
<p class=" w-full pt-2.5 text-[0.75rem] md:text-12">
  {@html customSanitization(postFoto?.caption?.rendered)}
</p>
