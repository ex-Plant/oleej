<script lang="ts">
  import { page } from '$app/stores';
  import Comments from './Comments.svelte';
  import { sendingForm } from '../../store/global';
  import { Button } from '../ui/button';
  import { enhance } from '$app/forms';
  import type { ActionResult } from '@sveltejs/kit';
  import Spinner from '../Spinner.svelte';

  const post_id: number = $page.data.post.id;

  let dialog: HTMLDialogElement;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let message = 'oj coś nie pykło..., spróbuj jeszcze raz lub zgłoś problem: piotrolej@gmail.com';

  let name = '';
  let content = '';

  function handleSubmit() {
    return async ({
      result,
      update,
    }: {
      result: ActionResult<any, any>;
      update: (opts?: { reset?: boolean; invalidateAll?: boolean }) => Promise<void>;
    }) => {
      sendingForm.set(true);
      if (result.type === 'success') {
        await update({ reset: false });
        console.log(result);
        name = '';
        content = '';
      } else {
        dialog.show();
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          dialog.close();
        }, 1000);
      }
      sendingForm.set(false);
    };
  }
</script>

{#if $sendingForm}
  <Spinner />
{/if}
<div class='mb-20'>
  <div class="mb-4 items-center 450:flex gap-x-2 640:flex-col 640:items-start 1280:flex-row 1280:items-center">
    <p class="whitespace-nowrap text-[1.125rem] font-bold  640:text-[2.25rem] flex items-center">
      <span> Chcesz coś dodać?  </span>
    </p>
    <p
      class="whitespace-nowrap text-[1.125rem] font-bold  640:text-[2.25rem] flex items-center gap-x-1 640:gap-x-2">
      <span> Proszę bardzo </span>
      <span>

      </span>
      <span class="emoticon pb-2   640:pb-4">👇</span>
    </p>
  </div>
  <form class="flex flex-col items-start gap-y-4" action="?/add_comment" method="POST" use:enhance="{handleSubmit}">
    <input type="hidden" name="post_id" value="{post_id}" />
    <div class="grid w-full max-w-[600px] gap-y-1">
      <textarea
        on:focus="{() => sendingForm.set(false)}"
        placeholder="treść"
        required
        class="h-40 border border-black bg-primary p-4 placeholder:text-black"
        name="content"
        bind:value="{content}"></textarea>
    </div>
    <div class="grid w-full max-w-[600px] gap-x-4 md:grid-cols-2">
      <div class="grid h-[46px] w-full max-w-[600px] gap-y-4">
        <input
          on:focus="{() => sendingForm.set(false)}"
          placeholder="podpis"
          required
          class="h-[46px] border border-black bg-primary p-4 placeholder:text-black"
          type="text"
          name="author_name"
          bind:value="{name}"
        />
      </div>
      <Button
        class=" mt-2 flex h-[46px] items-center justify-center space-x-4 rounded-none border border-black !bg-black px-4 text-[1.25rem] font-bold uppercase text-white duration-500 md:mt-0 md:!bg-transparent md:text-black md:hover:!bg-black md:hover:!text-white"
        on:click="{() => sendingForm.set(true)}"
        type="submit"
        variant="outline"
      >
        <span class=" pt-1"> Wyślij </span>
      </Button>
    </div>
  </form>
  <Comments />
</div>

<dialog
  on:click="{() => dialog.close()}"
  class=" fixed inset-0 z-[1000] max-w-[260px] cursor-pointer rounded bg-transparent text-[26px]"
  bind:this="{dialog}"
>
  <p>
    {message}
  </p>
</dialog>
