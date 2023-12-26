<script lang="ts">
  import { twMerge } from 'tailwind-merge';

</script>

<div
  class="{twMerge(
    'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
  )}"
>
  <div role="status" class="flex items-center justify-center">
    <div
      class="{`inline-block  h-10 w-10  animate-spin rounded-full border-4 border-solid
               border-black border-r-white align-[-0.125em]  motion-reduce:animate-[spin_1.5s_linear_infinite]
              md:h-10 md:w-10`}"
      role="status"
    >
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >
        Loading...
      </span>
    </div>
  </div>
</div>
