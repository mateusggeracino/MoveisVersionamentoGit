var banners = ["Os melhores do Brasil!", "Venha conhecer nossas promoções"];

var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('h2#mensagem').textContent = banners[bannerAtual];
}
                       
setInterval(trocaBanner, 1000);