<svelte:options tag="goa-meta-link" />

<!-- Script -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { getContext, ContextStore } from '../../common/context-store';
  import { META_LINK } from "./types";

  let ctx: ContextStore;

  onMount(async () => {
    ctx = await getContext(footerid);
    console.log("MetaLink Context onMOunt for : " + footerid);
    ctx.notify({
      type: META_LINK,
      url: metaLink.dataset.url,
      title: metaLink.dataset.title
    });
  });

  let metaLink;

  export let footerid: string = "goa-app-footer-id";
  export let title: string = "";
  export let url: string = "";
</script>

<!-- HTML -->
<data
  bind:this={metaLink}
  data-url={url}
  data-title={title}
>
</data>

