<script>
  import { page } from '$app/stores';
</script>

<div class='fixed inset-0 pt-20 flex justify-center items-center flex-col space-y-2 pointer-events-none '>
  <h1>{$page.status}: coś jest nie tak...</h1>
  <a class='pointer-events-auto' href='/'> wróc do bloga </a>
</div>
