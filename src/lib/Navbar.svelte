<script>
    import { Link } from 'svelte-routing';
</script>

<nav class="navbar">
    <ul>
        <li><Link to="/" class="nav-link">Home</Link></li>
        <li><Link to="/cart" class="nav-link">Cart</Link></li>
    </ul>
</nav>

<style>
    .navbar {
        background-color: #f2f2f2;
        padding: 10px;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li {
        display: inline;
        margin-right: 10px;
    }

    li:last-child {
        margin-right: 0;
    }

    .nav-link {
        color: black;
        text-decoration: none;
    }

    .nav-link:hover {
        text-decoration: underline;
    }
</style>
