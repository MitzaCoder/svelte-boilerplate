<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing'
  import Home from './page/Home.svelte'
  import About from './page/About.svelte'

  export let url = ''
</script>

<main>
  <h1 class="text-xl text-red-500">Svelte, Typescript, Tailwindcss</h1>
  <Router ulr={url}>
    <nav>
      <Link to="home">Home</Link>
      <Link to="about">About</Link>
    </nav>

    <div>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
    </div>
  </Router>
</main>

<style global lang="postcss">
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;
</style>
