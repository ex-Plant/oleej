<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionResult } from "@sveltejs/kit";
  export let post_id: number;

  function handleSubmit() {
    return async ({
      result,
      update
    }: {
      result: ActionResult<any, any>;
      update: (opts?: { reset?: boolean; invalidateAll?: boolean }) => Promise<void>;
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
<div class=' w-full '>
  comment
</div>
<form action="?/add_comment" method="POST" use:enhance={handleSubmit}>
  <button>
    Submit
  </button>
    <input type="hidden" name="post_id" value={post_id} />
    <input type="hidden" name="author_name" value={"name"} />
    <input type="hidden" name="author_email" value={"konradantonik@gmail.com"} />
    <input type="hidden" name="content" value={"content"} />
</form>
