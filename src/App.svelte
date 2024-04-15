
<script>
    import { Router, Route } from 'svelte-routing';
    import Navbar from './lib/Navbar.svelte';
    import Home from './lib/Home.svelte';
    import Cart from './lib/Cart.svelte';
    import FilmPage from './lib/FilmPage.svelte'
</script>

<Router>
    <Route path="/" component={Home} />
    <Route path="/cart" component={Cart} />
     <Route path="/film/:title" let:params>
        <FilmPage title={params.title} />
    </Route>
</Router>