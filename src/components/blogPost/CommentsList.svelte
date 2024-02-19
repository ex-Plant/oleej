<script>
  export let comments = [];
</script>


<div class="mt-12 grid gap-4">
  {#each comments as comment}
    <div class="grid grid-cols-[55px_auto] gap-x-2">
      <div class="aspect-square w-[33px] grow-0 bg-[#D9D9D9]"></div>
      <div>
        <div class="flex h-[33px] items-center text-[1.25rem] font-bold">
            <span>
              {comment.author_name}
            </span>
        </div>
        <div class="text-[1.25rem]">{@html comment.content.rendered}</div>
      </div>
    </div>
  {/each}
</div>
