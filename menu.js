var menu = `<!--  menu -->
<div class="menu-degrade">
<a href=""><img style="height: 80px;" src="logo/icon2.ico" alt=""></a>
<div class="row">
    <div class="col">
        <a href="index.html">Inicio</a>
        <a href="quarto.html">Quarto</a>
        <a href="sala.html">Sala</a>
        <a href="cozinha.html">Cozinha</a>
    </div>
</div>
</div>

<!-- fim menu -->

<style>
.menu-degrade{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to left, rgb(39, 67, 170), rgb(105, 102, 96), rgb(17, 52, 210),rgb(163, 125, 125));
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

</style>


`



document.addEventListener("DOMContentLoaded", function () {
    // Aguarde o DOM ser completamente carregado
    document.querySelector(".menu").innerHTML = menu;
});

