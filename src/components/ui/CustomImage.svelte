<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
  import type { ImageType, LoadingType } from '../../types';
  export let data: ImageType | undefined;
  export let className = '';
  export let width: string | number = 0;
  export let height: number | string = 0;
  export let aspectRatio = 0;
  export let sizes = '';
  export let loading: LoadingType = 'lazy';
</script>

{#if data}
  <CldImage
    loading="{loading}"
    class="{className}"
    sizes="{sizes}"
    height="{height}"
    width="{width}"
    aspectRatio="{aspectRatio}"
    src="{data.source_url}"
    alt="{data.alt_text}"
  />
{/if}
