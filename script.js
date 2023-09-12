const excecao = {
    9: '10.150.9',
    43: '192.168.103',
    52: '192.168.101',
    54: '192.168.104',
    55: '192.168.226',
    86: '192.168.121',
    95: '192.168.118',
    109: '192.168.220',
    180: '10.150.18',
    185: '10.150.104',
    243: '192.168.221',
    244: '10.150.210',
    1101: '10.150.1',
}

const $CE = document.querySelector('#CE')
const $link = document.querySelector('#link')
const $sp = document.querySelector('#sp')
const $estoque = document.querySelector('#estoque')
const $OMS = document.querySelector('#OMS')
const $Bar = document.querySelector('#Bar')
const $PDV = document.querySelector('#PDV')


$CE.addEventListener('keyup', imprimirIp)
$CE.addEventListener('click', imprimirIp)
function imprimirIp() {
    var loja = $CE.value
    var ipBase;
    if (loja in excecao) {
        ipBase = excecao[loja]
    }
    else if (loja <= 0) {
        ipBase = "0.0." + loja
    }
    else if (loja < 100) {
        ipBase = "192.168." + (parseInt(loja) + 100)
    } else if (loja > 99 && loja < 251) {
        ipBase = "10.150." + loja
    } else {
        ipBase = "10.151." + (loja - 250)
    }

    $link.innerHTML = ipBase + ".1 &nbsp;"
    $sp.innerHTML = ipBase + ".10"
    $estoque.innerHTML = ipBase + ".40"
    $OMS.innerHTML = ipBase + ".80"
    $Bar.innerHTML = ipBase + ".50"
    $PDV.innerHTML = ipBase + ".12"
}


window.onload = () => {
    imprimirIp()
}