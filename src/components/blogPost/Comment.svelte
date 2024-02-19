<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionResult } from '@sveltejs/kit';
  import { page } from '$app/stores';
  import GoToBtn from '../../assets/GoToBtn.svelte';
  export let post_id: number;

  $: comments = $page.data.comments;
  $: console.log('comments:', comments);

  function handleSubmit() {
    return async ({
      result,
      update,
    }: {
      result: ActionResult<any, any>;
      update: (opts?: {
        reset?: boolean;
        invalidateAll?: boolean;
      }) => Promise<void>;
    }) => {
      if (result.type === 'success') {
        console.log('result.data:', result.data);
        await update({ reset: false });
        // dialogOptions = onShowCustomDialog(dialog, result?.data?.message, 'success', 1000);
      } else if (result.type === 'failure') {
        console.error('result:', result);
        // dialogOptions = onShowCustomDialog(dialog, result?.data?.message, 'error', 3000);
      }
    };
  }
</script>

<div class="mb-4 text-[2.25rem] font-bold uppercase leading-[2.75rem]">
  Zostaw swój komentarz
</div>
<form
  class="flex flex-col items-start gap-y-4"
  action="?/add_comment"
  method="POST"
  use:enhance="{handleSubmit}"
>
  <input type="hidden" name="post_id" value="{post_id}" />
  <input type="hidden" name="author_name" value="{'name'}" />
  <input type="hidden" name="content" value="{'content'}" />
  <div class="grid w-full max-w-[600px] gap-y-1">
    <textarea
      placeholder="treść"
      required
      class="h-40 border border-black bg-primary p-4 placeholder:text-black"
      name="content"></textarea>
  </div>
  <div class="grid w-full max-w-[600px] grid-cols-2 gap-x-4">
    <div class="grid w-full max-w-[600px] gap-y-4">
      <input
        placeholder="podpis"
        required
        class="h-10 border border-black bg-primary p-4 placeholder:text-black"
        type="text"
        name="author_name"
      />
    </div>
    <button
      type="submit"
      class="flex items-center justify-center space-x-4 border border-black px-4 uppercase duration-500 hover:bg-black hover:text-white font-bold"
    >
      <span>Wyślij</span>
    </button>
  </div>
</form>
{#if comments}
  <div class="grid gap-4 mt-12">
    {#each comments as comment}
      <div class="grid grid-cols-[55px_auto] gap-x-2">
        <div class="aspect-square w-[33px] grow-0 bg-[#D9D9D9]"></div>
        <div>
          <div class="text-[1.25rem] font-bold h-[33px] flex  items-center">
            <span>
              {comment.author_name}
            </span></div>
          <div class="text-[1.25rem]">{@html comment.content.rendered}</div>
        </div>
      </div>
    {/each}
  </div>
{/if}
