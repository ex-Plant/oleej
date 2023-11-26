<script lang="ts">/** @type {import("./$types").PageData} */
  import { getPostCategory } from "../helpers/getPostCategory";

export let data;
  let posts = data.posts;
  let fotos = data.fotos;
  // console.log(posts[0]);

</script>

<!--todo - this is completely fucked up logic -> get proper data object with post-->


<div class="pt-6 border-t border-black  ">
  {#each posts as post}
    {#each fotos as foto}
      {#if (post.acf.foto_id === foto.id)}
        <a href={`/blog/${post.acf.slug}`}>
        <div class=" grid">
          <h4 class=' min-h- uppercase'>{getPostCategory(post.categories[0])}</h4>
          <h2 class=" ">{post.acf.title}</h2>
          <img src={foto.source_url} alt='' class="bg-red"/>
          <p>{post.acf.post_description}</p>
        </div>
        </a>
      {/if}
    {/each}
  {/each}
</div>
