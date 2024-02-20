<script lang="ts">
import { Button } from "../ui/button/index.js";
import Comment from "./Comment.svelte";
import { onMount } from "svelte";


onMount(async () => {
  const res = await fetch(`/api/comments/${post_id}`);
  const data = await res.json();
  comments = data.comments;
});
</script>
{#if comments?.length > 0}

<div class="mt-12">
  <Button on:click="{handleCommentsOpen}" variant="outline" class="font-bold">Wczytaj komentarze</Button>
</div>
<div class="mt-12 grid gap-10">
  {#each parentComments as comment (comment.id)}
    <Comment
      comment="{comment}"
      post_id="{post_id}"
      responses="{comments.filter((c) => c.parent === comment.id && c.id !== comment.id)}"
    />
  {/each}
</div>
{/if}
