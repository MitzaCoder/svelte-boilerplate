<script lang="ts">
  const LazyLoadedP = import('../component/LazyLoaded.svelte').then(({ default: C }) => C)
</script>

<h1 class="text-xl">About Page</h1>
{#await LazyLoadedP}
  ...Loading lazy loaded component
{:then LazyLoaded}
  <LazyLoaded />
{/await}
