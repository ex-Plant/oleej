<script lang="ts">
  import emailjs from '@emailjs/browser';
  import GoToBtn from '../../assets/GoToBtn.svelte';
  import { fade } from 'svelte/transition';
  import Spinner from '../../components/Spinner.svelte';
  let sending = false;
  let dialog: HTMLDialogElement;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let dialogMessage = 'Git, doszło! Daj mi chwilę - niebawem odpiszę';
  let name = '';
  let email = '';
  let message = '';

  // const dataOlej = await emailjs.sendForm('service_mec1d3j', 'template_i2u267j', e.target, {
  //   publicKey: 'nSTfxziruyOHKe_kb',
  // });

  const sendEmail = async (e) => {
    sending = true;
    const data = await emailjs.sendForm('service_mec1d3j', 'template_i2u267j', e.target, {
      publicKey: 'nSTfxziruyOHKe_kb',
    });
    if (data.status !== 200) {
      message = 'oj coś nie pykło..., spróbuj jeszcze raz lub napisz mi maila: piotrolej@gmail.com';
    }
    sending = false;
    dialog.showModal();
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      dialog.close();
      email = '';
      name = '';
      message = '';
    }, 3000);
  };
</script>

{#if sending}
  <Spinner />
{/if}
<main in:fade="{{ duration: 500 }}" class="max-w-[1440px] px-[clamp(20px,6vw,60px)] pt-16 lg:block xl:mx-auto">
  <!--  <button class="text-2xl" on:click="{() => dialog.showModal()}">open</button>-->
  <form class="flex flex-col gap-y-4 pb-20" on:submit|preventDefault="{sendEmail}">
    <div class="grid max-w-[600px] gap-y-1">
      <label for='name' class="flex w-[200px]">Twoje imię</label>
      <input required class="h-10 p-4" type="text" name="name" bind:value="{name}" />
    </div>
    <div class="grid max-w-[600px] gap-y-1">
      <label for='name' class="flex w-[200px]">Twój mail</label>
      <input required class="h-10 p-4" type="email" name="email" bind:value="{email}" />
    </div>
    <div class="grid max-w-[600px] gap-y-1">
      <label for='name' class="flex w-[200px]">Wiadomość</label>
      <textarea required class="h-40 p-4" name="message" bind:value="{message}"></textarea>
    </div>
    <div class="flex items-center justify-start space-x-4">
      <span>Wyślij</span>
      <button type="submit" value="Send"> <GoToBtn /></button>
    </div>
  </form>
</main>
<dialog
  on:click="{() => dialog.close()}"
  class=" fixed inset-0 z-[1000] max-w-[260px] cursor-pointer rounded text-[16px]"
  bind:this="{dialog}"
>
  <p>
    {dialogMessage}
    <span class="emoticon"> ✌️ </span>
  </p>
</dialog>
