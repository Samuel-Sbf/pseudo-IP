const $displayIps = document.querySelector('#ips')
const $link = $displayIps.querySelector('#link')
const $sp = $displayIps.querySelector('#sp')
const $estoque = $displayIps.querySelector('#estoque')
const $OMS = $displayIps.querySelector('#OMS')
const $Bar = $displayIps.querySelector('#Bar')
const $PDV = $displayIps.querySelector('#PDV')
const $CbxPDVs = $displayIps.querySelector('#PDVs')

$CbxPDVs.addEventListener('change', ipDoPDV)

function ipDoPDV () {
  /*Pegamos o numero do meio do PDV (1 >0< 1) e somamos ele com 12, isso da o final do IP do PDV*/
  let NovoIp = 12 + parseInt($CbxPDVs.value[1])
  $PDV.innerHTML = $PDV.innerHTML.slice(0, -2) + NovoIp
}

const $displayContatos = document.querySelector('#contatos')
const $nome = document.querySelector('#nome')
const $regional = document.querySelector('#regional')
const $tel = document.querySelector('#tel')

const $uf = document.querySelector('#uf')
const $rootStyle = document.querySelector('#root')
const $main = document.querySelector('main')

const $busca = document.querySelector('#busca')
/*Não importa aonde clicar na DIV de busca ele vai direcionar o cursor para o input*/
$busca.addEventListener('click', () => $CE.focus())

/*Conforme ele vai digitando nos já atualizamos os IPs no site*/
const $CE = document.querySelector('#CE')
$CE.addEventListener('keyup', imprimirIp)
$CE.addEventListener('click', imprimirIp)

function imprimirIp () {
  var loja = parseInt($CE.value)
  var ipBase /*vai ser responsavel por armasenar as 3 primeiras casa do IP da loja*/

  /*Caso a loja esteja na lista de exeção*/
  if (loja in excecao) {
    ipBase = excecao[loja]
  } else if (loja <= 0) {
    /*Caso a loja seja de um numero negativo ele informa que e um numero invalido*/
    ipBase = 'INVALIDO'
  } else if (loja < 100) {
    /*aplicação da logica dos IPs da loja*/
    ipBase = '192.168.' + (loja + 100)
  } else if (loja > 99 && loja < 251) {
    ipBase = '10.150.' + loja
  } else {
    /*Se o numero do IP for maior que 255 isso quebra a regra de IP (não existe)*/
    if (loja - 250 > 255) {
      ipBase = 'INVALIDO'
    } else {
      ipBase = '10.151.' + (loja - 250)
    }
  }

  /*imprime o IP da loja no site*/
  $link.innerHTML = ipBase + '.1'
  $sp.innerHTML = ipBase + '.10'
  $estoque.innerHTML = ipBase + '.40'
  $OMS.innerHTML = ipBase + '.80'
  $Bar.innerHTML = ipBase + '.50'
  $PDV.innerHTML = ipBase + '.12'

  /*muda a cor do texto do IP para o user saber se e ou não um*/
  estiloDaPagina(loja)

  ipDoPDV() /*Executamos essa função para alterar o final do IP do PDV*/
}

function estiloDaPagina (loja) {
  const lojaExiste = loja in nomeUFLoja

  $rootStyle.innerHTML = ':root {'
  $rootStyle.innerHTML += `--identifica: ${lojaExiste ? 'yellow' : 'red'}`
  $rootStyle.innerHTML += '} Alguma coisa'

  if (lojaExiste) {
    let dados = nomeUFLoja[loja]

    $nome.innerHTML = dados['nome']
    $uf.innerHTML = dados['uf']

    /*pegamos o ID do regional para pegar os dados dele na lista de regionais*/
    if (dados['regional']) {
      $regional.innerHTML = regionais[dados['regional']]['nome']
      $regional.appendChild(
        btn({
          id:'BtnEmail',
          onclick: ()=> window.open(`https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=${regionais[dados['regional']]['email']}&hl=pt-BR`),
          icon: 'fa fa-mail-reply-all'
        })
      )
    } else $regional.innerHTML = 'N/A'

    $tel.innerHTML = dados['tel']
  } else {
    $nome.innerHTML = 'N/A'
    $uf.innerHTML = 'N/A'
    $regional.innerHTML = 'N/A'
    $tel.innerHTML = 'N/A'
  }
}

function btn ({ id, onclick, icon }) {
  let btn = document.createElement('button')
  btn.id = id
  btn.addEventListener('click', onclick)
  btn.innerHTML = `<i class='${icon}'></i>`;

  return btn;
}

window.onload = () => {
  const $dados = document.querySelectorAll('li > span')

  $dados.forEach(x => {
    x.addEventListener('click', () => {
      copy(x.textContent)
    })
  })

  imprimirIp()
}

/*metodo par fazer a copia do IP para o usuario*/
function copy (txt) {
  const tempInput = document.createElement('input')
  tempInput.value = txt
  document.body.appendChild(tempInput)
  tempInput.select()
  document.execCommand('copy')
  document.body.removeChild(tempInput)

  $main.classList.add('copy')
  setTimeout(() => $main.classList.remove('copy'), 1100)
}
