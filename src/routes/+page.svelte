<script lang="ts">
  /** @type {import("./$types").PageData} */
  import { spacesToDashes } from '../helpers/spacesToDashes';

  export let data;
  let posts = data.posts;
  let fotos = data.fotos;
  // console.log(posts[0]);
</script>

<!--todo - this is completely fucked up logic -> get proper data object with post-->

<div class=" py-6 space-y-6 divide-black divide-y-[1px]  ">
  {#each posts as post}
    {#each fotos as foto}
      {#if post.acf.foto_id === foto.id}
        <div class=" grid gap-y-6  ">
          <h4 class=" uppercase text-14 pt-6">{post.acf.category}</h4>
          <h2 class=" text-18 font-[700]">{post.acf.title}</h2>
          <a href="{`/blog/${spacesToDashes(post.acf.slug)}`}">
            <img src="{foto.source_url}" alt="" class="" />
          </a>
          <p class='pb-6'>{post.acf.post_description}</p>
        </div>
      {/if}
    {/each}
  {/each}
</div>
