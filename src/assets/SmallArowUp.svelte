<script lang="ts">
  import { twMerge } from "tailwind-merge";

  export let className = "";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="7"
  height="7"
  viewBox="0 0 7 7"
  fill="none"
  class={twMerge(`arrowUp `, className)}
>
  <g clip-path="url(#clip0_32_693)">
    <path
      d="M1.41141 0V0.600601L5.97598 0.600601L0 6.57658L0.423423 7L6.3994 1.02703V5.11411H7V0L1.41141 0Z"
      fill="#010101"></path>
  </g>
  <defs>
    <clipPath id="clip0_32_693">
      <rect width="7" height="7" fill="white"></rect>
    </clipPath>
  </defs>
</svg>
