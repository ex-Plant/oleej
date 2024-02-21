<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
  import type { ImageType } from '../../types';
  export let data: ImageType | undefined;
  export let className = '';
  export let width: string | number = 0;
  export let height: number | string = 0;
  export let aspectRatio = 0;
  export let sizes = '';
</script>
{#if data}
  <CldImage
    class="{className}"
    sizes="{sizes}"
    height="{height}"
    width="{width}"
    aspectRatio="{aspectRatio}"
    src="{data.source_url}"
    alt="{data.alt_text}"
  />
{/if}
