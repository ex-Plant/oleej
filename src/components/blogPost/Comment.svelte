<script lang="ts">
  import SmallArowUp from '../../assets/SmallArowUp.svelte';
  import { enhance } from '$app/forms';
  import type { CommentType } from "../../types";
  import { twMerge } from "tailwind-merge";

  export let handleSubmit: () => void;
  export let showSendingLoader: () => void;
  export let hideSendingLoader: () => void;
  export let post_id: number;
  export let comment: CommentType;

  let content = '';
  let sign = '';
  let responsesOpen = false;

  function toggleResponses() {
    responsesOpen = !responsesOpen;
  }
  function openResponses() {
    responsesOpen = !responsesOpen;
  }

</script>

<div class="grid grid-cols-[20px_auto] items-center gap-x-3 md:grid-cols-[50px_auto] md:gap-4">
  <div class="aspect-square w-[20px] grow-0 bg-[#D9D9D9] md:w-[33px]"></div>
  <div class="flex h-[33px] items-center text-[1rem] font-bold">
    <span>
      {comment.author_name}
    </span>
  </div>
</div>
<div>
  <div class="text-[0.875rem] md:text-[1.25rem]">{@html comment.content.rendered}</div>
</div>
<button on:click="{toggleResponses}" class=" flex items-center gap-x-1">
  <span class="text-[0.875rem] font-bold uppercase md:text-[1.25rem]"> Odpowiedz </span>
  <SmallArowUp className="rotate-90" />
</button>
{#if responsesOpen}
  <form class={twMerge("flex flex-col items-start gap-y-4",
  responsesOpen ? "" : "", "transition-opacity duration-500"
  )} action="?/add_comment" method="POST"
  use:enhance="{handleSubmit}">
    <input type="hidden" name="post_id" value="{post_id}" />
    <input type="hidden" name="author_name" value="{'name'}" />
    <input type="hidden" name="content" value="{'content'}" />
    <div class="grid w-full max-w-[600px] gap-y-1">
      <textarea
        on:focus="{hideSendingLoader}"
        value="{content}"
        placeholder="treść"
        required
        class="h-40 border border-black bg-primary p-4 text-[14px] placeholder:text-black"
        name="content"></textarea>
    </div>
    <div class="grid w-full max-w-[600px] gap-x-4 md:grid-cols-2">
      <div class="grid h-[46px] w-full max-w-[600px] gap-y-4">
        <input
          on:focus="{hideSendingLoader}"
          placeholder="podpis"
          required
          class="h-[46px] border border-black bg-primary p-4 text-[14px] placeholder:text-black"
          type="text"
          value="{sign}"
          name="author_name"
        />
      </div>
      <button
        on:click="{showSendingLoader}"
        type="submit"
        class="bg:transparent mt-2 flex h-[46px] items-center justify-center space-x-4 border border-black bg-black px-4 text-[1.25rem] font-bold uppercase text-white duration-500 md:mt-0 lg:bg-transparent lg:text-black lg:hover:bg-black lg:hover:text-white"
      >
        <span>Wyślij</span>
      </button>
    </div>
  </form>
{/if}
