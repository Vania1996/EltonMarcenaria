var menu = `<div class="menu-degrade">
<div class="row">
    <div class="col">
        <a href="index.html">Inicio</a>
        <a href="quarto.html">Quarto</a>
        <a href="sala.html">Sala</a>
        <a href="cozinha.html">Cozinhaa</a>
    </div>

</div>
</div>

<style>

/* menu */
.menu-degrade{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to left, rgb(14, 14, 20), rgb(151, 130, 91), rgb(84, 53, 53),rgb(41, 6, 6));
    background-size: 500% 100%;
    animation: menu 5s infinite alternate;
    padding: 40px 4%;
}
.menu-degrade a{
    color:rgb(255, 255, 255);
    font-weight:bold;
    margin: 10px;
}
@keyframes menu {
    0%{
        background-position-x:0%;
    }
    100%{
        background-position-x:100% ;
    }
}

/* fim menu */

</style>
`



document.addEventListener("DOMContentLoaded", function () {
    // Aguarde o DOM ser completamente carregado
    document.querySelector(".menu").innerHTML = menu;
});

