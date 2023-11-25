<script lang="ts">
  /** @type {import("./$types").PageData} */

  export let data;
  let posts = data.posts;
  let fotos = data.fotos;

</script>

<!--todo - this is completely fucked up logic -> get proper data object with post-->






<div class="  ">
  {#each posts as post}
    {#each fotos as foto}
      {#if (post.acf.foto_id === foto.id)}
        <div class=" grid">
          <h2 class=" ">{post.acf.title}</h2>
          <img src={foto.source_url} alt='' class="bg-red"/>
          <p>{post.acf.post_description}</p>
        </div>
      {/if}
    {/each}
  {/each}
</div>
