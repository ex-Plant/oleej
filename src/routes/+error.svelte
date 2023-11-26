<script>
  import { page } from '$app/stores';
</script>

<div class='fixed inset-0 flex justify-center items-center flex-col space-y-2'>
  <h1>{$page.status}: coś jest nie tak...</h1>
  <a href='/'> wróc do bloga </a>
</div>
