<script>
  import '../app.css';
  import { twMerge } from "tailwind-merge";
</script>

<div class={twMerge('paddings')}>
  <slot />

</div>
