<script lang="ts">
  import { Button } from '../ui/button/index.js';
  import Comment from './Comment.svelte';
  import { fade } from 'svelte/transition';
  import type { CommentType } from '../../types';
  import { page } from '$app/stores';

  export let comments: CommentType[] = [];
  $: parentComments = comments.filter((comment) => !comment.parentId);
  const post_id: number = $page.data.post.id;
  let commentsOpen = true;
  function toggleComments() {
    commentsOpen = !commentsOpen;
  }
</script>

{#if comments?.length > 0}
  <div class="mt-12">
    <Button on:click="{toggleComments}" class=" pl-0 font-bold hover:underline">
      Komentarze:{comments?.length}
    </Button>
  </div>
  {#if commentsOpen}
    <div in:fade="{{ duration: 500 }}" class="mt-12 grid gap-10">
      {#each parentComments as comment (comment.id)}
        <Comment
          comment="{comment}"
          post_id="{post_id}"
          responses="{comments.filter((c) => c.parentId === comment.id && c.id !== comment.id)}"
        />
      {/each}
    </div>
  {/if}
{/if}
