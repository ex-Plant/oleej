
<!--// 6LeIE4EpAAAAAA_HKbCE_sW9nolQbS5yL1iiNeHe // klucz witryny-->
<!--// 6LeIE4EpAAAAAKRC3P9ax-8jtzF1p_qG16BfKkgL secret key-->

<script lang="ts">
  import GoToBtn from '../../assets/GoToBtn.svelte';
  import { fade } from 'svelte/transition';
  import Spinner from '../../components/Spinner.svelte';
  import { sendEmail } from '../../helpers/sendEmail';
  import { onMount } from 'svelte';
  let sending = false;
  let dialog: HTMLDialogElement;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let dialogMessage = 'Git, doszło! Daj mi chwilę - niebawem odpiszę';
  let name = '';
  let email = '';
  let message = '';

  let error: string;
  let requests: number;

  const send = async (e) => {
    sending = true;
    const data = await sendEmail(e);
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


  onMount(() => {
    window.handleCaptchaCallback = handleCaptchaCallback;
    window.handleCaptchaError = handleCaptchaError;
    window.resetCaptcha = resetCaptcha;
  });
  const handleCaptchaError = () => {
    error = 'Recaptcha error. Please reload the page';
  };

  const resetCaptcha = () => {
    window.grecaptcha.reset();
  };

  const handleCaptchaCallback = async (token: string) => {
    await fetch('/api/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        recaptchaToken: token
      })
    });

    requests += 1;

    // reset recaptcha for future requests
    resetCaptcha();
  };

  const handleSubmit = () => {
    // reset any errors
    error = '';

    // tell recaptcha to process a request
    window.grecaptcha.execute();
  };


</script>

{#if sending}
  <Spinner />
{/if}

{#if error}
  <div>
    <small class="text-yellow-300 font-bold">{error}</small>
  </div>
{/if}

<main in:fade="{{ duration: 500 }}" class="max-w-[1440px] px-[clamp(20px,6vw,60px)] pt-16 lg:block xl:mx-auto">
  <!--  <button class="text-2xl" on:click="{() => dialog.showModal()}">open</button>-->
  <form class="flex flex-col gap-y-4 pb-20" method="POST" on:submit={handleSubmit}>
    <div
      class="g-recaptcha"
      data-sitekey={"6LeIE4EpAAAAAA_HKbCE_sW9nolQbS5yL1iiNeHe"}
      data-callback="handleCaptchaCallback"
      data-expired-callback="resetCaptcha"
      data-error-callback="handleCaptchaError"
      data-size="invisible"
    />

    <div class="grid max-w-[600px] gap-y-1">
      <label for="name" class="flex w-[200px]">Twoje imię</label>
      <input required class="h-10 p-4" type="text" name="name" bind:value="{name}" />
    </div>
    <div class="grid max-w-[600px] gap-y-1">
      <!--      <label for="email" class="flex w-[200px]">Twój mail</label>-->
      <!--      <input required class="h-10 p-4" type="email" name="email" bind:value="{email}" />-->
    </div>
    <div class="grid max-w-[600px] gap-y-1">
      <!--      <label for="message" class="flex w-[200px]">Wiadomość</label>-->
      <!--      <textarea required class="h-40 p-4" name="message" bind:value="{message}"></textarea>-->
    </div>
    <div class="flex items-center justify-start space-x-4">
      <span>Wyślij</span>
      <button type="submit" value="Send"> <GoToBtn /></button>
    </div>
  </form>
</main>

<dialog class=" fixed inset-0 z-[1000] max-w-[260px] cursor-pointer rounded text-[16px]" bind:this="{dialog}">
  <button class='absolute inset-0' on:click="{() => dialog.close}">
    <span>
      {dialogMessage}
      <span class="emoticon"> ✌️ </span>
    </span>
    <button></button>
  </button>
</dialog>
