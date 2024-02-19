<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionResult } from '@sveltejs/kit';
  import { page } from '$app/stores';
  import CommentsList from './CommentsList.svelte';
  import Spinner from '../Spinner.svelte';

  export let post_id: number;
  let comments: any[] = [];
  $: comments = $page.data.comments;
  let dialog: HTMLDialogElement;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let message = '🚀';
  let sending = false;

  let sign = '';
  let content = '';

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
      sending = true;
      if (result.type === 'success') {
        console.log('result.data:', result.data);
        await update();

        // dialogOptions = onShowCustomDialog(dialog, result?.data?.message, 'success', 1000);
      } else if (result.type === 'failure') {
        console.error('result:', result);
        message =
          'oj coś nie pykło..., spróbuj jeszcze raz lub napisz mi maila: piotrolej@gmail.com';
        // dialogOptions = onShowCustomDialog(dialog, result?.data?.message, 'error', 3000);
      }

      sending = false;
      dialog.show();
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        dialog.close();
        sign = '';
        content = '';
      }, 1000);
    };
  }

  function onSubmit() {
    sending = true;
  }
</script>

{#if sending}
  <Spinner />
{/if}

<div>
  <div
    class="mb-0 text-[1.125rem] font-bold uppercase leading-[2.75rem] md:mb-4 md:text-[2.25rem]"
  >
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
        on:focus="{() => (sending = false)}"
        value="{content}"
        placeholder="treść"
        required
        class="h-40 border border-black bg-primary p-4 text-[14px] placeholder:text-black"
        name="content"></textarea>
    </div>
    <div class="grid w-full max-w-[600px] gap-x-4 md:grid-cols-2">
      <div class="grid h-[46px] w-full max-w-[600px] gap-y-4">
        <input
          on:focus="{() => (sending = false)}"
          placeholder="podpis"
          required
          class="h-[46px] border border-black bg-primary p-4 text-[14px] placeholder:text-black"
          type="text"
          value="{sign}"
          name="author_name"
        />
      </div>
      <button
        on:click="{onSubmit}"
        type="submit"
        class="bg:transparent mt-2 flex h-[46px] items-center justify-center space-x-4 border border-black bg-black px-4 text-[1.25rem] font-bold uppercase text-white duration-500 md:mt-0 lg:bg-transparent lg:text-black lg:hover:bg-black lg:hover:text-white"
      >
        <span>Wyślij</span>
      </button>
    </div>
  </form>
  {#if comments}
    <CommentsList comments="{comments}" />
  {/if}
<!--  <dialog-->
<!--    on:click="{() => dialog.close()}"-->
<!--    class=" fixed inset-0 z-[1000] max-w-[260px] cursor-pointer rounded bg-transparent text-[26px]"-->
<!--    bind:this="{dialog}"-->
<!--  >-->
<!--    <p>-->
<!--      {message}-->
<!--    </p>-->
<!--  </dialog>-->
</div>
