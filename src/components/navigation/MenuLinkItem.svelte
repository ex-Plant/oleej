<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let name: string;
  export let link: string;

  export let className = '';

  export let homeDesktopFullMenu = false;
</script>

<a
  href="{link}"
  class="{twMerge(
    'group relative flex h-9 items-center uppercase',
    homeDesktopFullMenu ? `pl-0 ` : 'md:pl-12 xl:pl-16',
    className,
  )}"
>
  <div class=" relative">
    <span class={twMerge("whitespace-nowrap ",
    homeDesktopFullMenu ? `text-[1.5rem] ` : 'text-[1.5rem] md:text-[1.125rem]',

    )
    }>
      {name}
    </span>
    <span
      class="{`absolute bottom-[-1px] left-[50%] h-[1px] w-0 rounded bg-black duration-300 group-hover:left-0 group-hover:w-full`}"
    >
    </span>
  </div>
</a>
