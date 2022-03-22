<svelte:options tag="goa-navigation-link" />

<!-- Script -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { getContext, ContextStore } from '../../common/context-store';
  import { NAVIGATION_LINK } from "./types";

  let ctx: ContextStore;

  onMount(async () => {
    ctx = await getContext(footerid);

    ctx.notify({
      type: NAVIGATION_LINK,
      url: navigationLink.dataset.url,
      title: navigationLink.dataset.title,
      section: navigationLink.dataset.section,
    });
  });

  let navigationLink;

  export let footerid: string = "goa-app-footer-id";
  export let title: string = "";
  export let url: string = "";
  export let section: string = "";
</script>

<!-- HTML -->
<data
  bind:this={navigationLink}
  data-url={url}
  data-title={title}
  data-section={section}
>
</data>

