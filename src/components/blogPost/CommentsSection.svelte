<script lang="ts">
  import { page } from '$app/stores';
  import Comments from './Comments.svelte';
  import { sendingForm } from "../../store/global";
  import { Button } from '../ui/button';
  import { enhance } from '$app/forms';
  import type { ActionResult } from '@sveltejs/kit';
  import Spinner from '../Spinner.svelte';

  const post_id: number = $page.data.post.id;

  let dialog: HTMLDialogElement;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let message = 'oj coś nie pykło..., spróbuj jeszcze raz lub zgłoś problem: piotrolej@gmail.com';

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
        await update();
        console.log(result);
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
<div>
  <div class="mb-0 text-[1.125rem] font-bold uppercase leading-[2.75rem] md:mb-4 md:text-[2.25rem]">
    Zostaw swój komentarz
  </div>
  <form class="flex flex-col items-start gap-y-4" action="?/add_comment" method="POST" use:enhance="{handleSubmit}">
    <input type="hidden" name="post_id" value="{post_id}" />
    <div class="grid w-full max-w-[600px] gap-y-1">
      <textarea
        on:focus="{() => sendingForm.set(false)}"
        placeholder="treść"
        required
        class="h-40 border border-black bg-primary p-4 text-[14px] placeholder:text-black"
        name="content"></textarea>
    </div>
    <div class="grid w-full max-w-[600px] gap-x-4 md:grid-cols-2">
      <div class="grid h-[46px] w-full max-w-[600px] gap-y-4">
        <input
          on:focus="{() => sendingForm.set(false)}"
          placeholder="podpis"
          required
          class="h-[46px] border border-black bg-primary p-4 text-[14px] placeholder:text-black"
          type="text"
          name="author_name"
        />
      </div>
      <Button
        class=" mt-2 flex h-[46px] items-center justify-center space-x-4 rounded-none border border-black !bg-black px-4 text-[1.25rem] font-bold uppercase text-white duration-500 md:mt-0 md:!bg-transparent md:text-black md:hover:!bg-black md:hover:!text-white"
        on:click="{() => sendingForm.set(true)}"
        type="submit"
        variant="outline">Wyślij</Button
      >
    </div>
  </form>
  {#await $page.data.comments then comments}
    <Comments comments="{comments}" />
  {/await}
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
