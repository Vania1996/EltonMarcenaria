var menu = `<div class="menu-degrade">
<div class="row">
    <div class="col">
        <a href="">Inicio</a>
        <a href="">Quarto</a>
        <a href="">Sala</a>
        <a href="">Cozinhaa</a>
    </div>

</div>
</div>

<style>
<div class="menu-degrade">
        <div class="row">
            <div class="col">
                <a href="">Inicio</a>
                <a href="">Quarto</a>
                <a href="">Sala</a>
                <a href="">Cozinhaa</a>
            </div>

        </div>
    </div>
</style>
`
document.addEventListener("DOMContentLoaded", function () {
    // Aguarde o DOM ser completamente carregado
    document.querySelector(".menu").innerHTML = menu;
});

