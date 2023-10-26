//Lojas com o IPs que fogem do padrão
const excecao = {
  9: "10.150.9",
  43: "192.168.103",
  52: "192.168.101",
  54: "192.168.104",
  55: "192.168.226",
  86: "192.168.121",
  95: "192.168.118",
  109: "192.168.220",
  180: "10.150.18",
  185: "10.150.104",
  243: "192.168.221",
  244: "10.150.210",
  1101: "10.150.1",
};

//lista com o numero de todas as lojas
const nomeUFLoja = {
  9: ["ARENA Centauro Parque Ibirapuera", "SP"],
  12: ["Shopping Cidade", "MG"],
  20: ["Shopping Rio Sul", "RJ"],
  23: ["Brasilia Shopping", "DF"],
  24: ["Shopping Alameda", "N/A"],
  25: ["Shopping Park", "DF"],
  32: ["Shopping Barra", "RJ"],
  34: ["Shopping Morumbi", "SP"],
  35: ["Shopping Center Norte", "SP"],
  37: ["Shopping Patio Brasil", "DF"],
  38: ["Shopping Barra", "BA"],
  39: ["Shopping Park Dom Pedro", "SP"],
  41: ["Shopping Metro Tatuape", "SP"],
  43: ["Shopping BH", "MG"],
  44: ["Shopping SPMarket", "SP"],
  45: ["Shopping Ribeirão", "SP"],
  46: ["Shopping Eldorado", "SP"],
  47: ["Shopping Iguatemi", "CE"],
  48: ["Shopping Leste Aricanduva", "SP"],
  50: ["Shopping Park Barigui", "PR"],
  52: ["Shopping Tambore", "SP"],
  53: ["Shopping Recife", "PE"],
  54: ["Shopping Estação", "PR"],
  55: ["Shopping Patio Savassi", "MG"],
  56: ["Shopping Midway Mall", "RN"],
  57: ["Shopping Jardim Sul", "SP"],
  59: ["Shopping Osasco", "SP"],
  60: ["Shopping da Bahia", "BA"],
  62: ["Shopping Metro Santa Cruz", "SP"],
  63: ["Shopping Jardins Aracaju", "SE"],
  64: ["Shopping Floripa", "SC"],
  66: ["Shopping Leblon", "RJ"],
  67: ["Shopping Salvador", "BA"],
  68: ["Shopping Maua", "SP"],
  69: ["Shopping Balneario Camboriu", "SC"],
  70: ["Shopping Piracicaba", "SP"],
  71: ["Shopping Pompeia Bourbon", "SP"],
  72: ["Shopping Plaza Casa Forte", "PE"],
  73: ["Shopping Itau Power", "MG"],
  75: ["Shopping Park Santana", "SP"],
  76: ["Shopping Bangu", "RJ"],
  77: ["Shopping Plaza Litoral", "SP"],
  79: ["Shopping Bourbon Country", "N/A"],
  80: ["Central Plaza Shopping", "SP"],
  81: ["Novo Shopping", "SP"],
  82: ["Independência Shopping", "MG"],
  84: ["Shopping Palladium", "PR"],
  85: ["CenterVale Shopping", "SP"],
  86: ["Norte Shopping", "RJ"],
  87: ["Bourbon Shopping São Leopoldo", "RS"],
  88: ["Shopping Bougainville", "GO"],
  89: ["Shopping Neumarkt Blumenau", "SC"],
  90: ["Shopping São José", "PR"],
  91: ["Catuaí Shopping Londrina", "PR"],
  92: ["Brasil Park Shopping", "GO"],
  94: ["Shopping Buriti", "GO"],
  95: ["Shopping Grande Rio", "RJ"],
  96: ["Shopping North", "CE"],
  97: ["Shopping Via Sul", "CE"],
  98: ["Shopping União Osasco", "SP"],
  99: ["Goiânia Shopping", "GO"],
  100: ["Shopping Tacaruna", "PE"],
  101: ["Suzano Shopping", "SP"],
  102: ["Shopping Praça da Moça", "SP"],
  103: ["Shopping Iguatemi Caxias", "RS"],
  105: ["Shopping Paralela", "BA"],
  106: ["Shopping Boulevard Brasília Asa Norte", "DF"],
  107: ["Bourbon Ipiranga Shopping", "RS"],
  108: ["Shopping Guararapes", "PE"],
  109: ["Shopping Taguatinga", "DF"],
  110: ["Raposo Shopping", "N/A"],
  111: ["Shopping Patio Maceió", "N/A"],
  112: ["Shopping Boulevard Belém", "PA"],
  114: ["Ilha Plaza Shopping", "RJ"],
  115: ["PrudenShopping", "SP"],
  116: ["Beiramar Shopping", "SC"],
  117: ["Shopping Anália Franco", "SP"],
  118: ["Interligada ao CD Extrema", "MG"],
  119: ["Shopping Mueller", "PR"],
  120: ["Bourbon Shopping Novo Hamburgo", "RS"],
  121: ["Shopping BonsuCesso", "SP"],
  122: ["Marília Shopping", "SP"],
  123: ["Via Shopping Barreiro", "MG"],
  124: ["Shopping Rio Mar", "SE"],
  125: ["Shopping Bauru", "SP"],
  126: ["Center Shopping Rio", "N/A"],
  128: ["Botafogo Praia Shopping", "RJ"],
  129: ["Center Shopping Uberlândia", "MG"],
  130: ["Joinville Garten Shopping", "SC"],
  131: ["Boulevard Shopping Belo Horizonte", "MG"],
  133: ["Shopping Granja Viana", "SP"],
  135: ["Shopping Rio Claro", "SP"],
  136: ["Shopping Aldeota", "CE"],
  138: ["Rio Anil Shopping", "MA"],
  139: ["Shopping Capim Dourado", "TO"],
  141: ["Shopping Center Taboão", "SP"],
  142: ["Franca Shopping Center", "SP"],
  143: ["São Gonçalo Shopping Rio", "RJ"],
  144: ["Penha Shopping Center", "SP"],
  145: ["Catuaí Shopping Maringá", "PR"],
  146: ["Shopping Norte Sul", "MS"],
  147: ["Shopping Pátio Higienópolis", "SP"],
  149: ["West Shopping Rio", "RJ"],
  150: ["Salvador Norte Shopping", "BA"],
  151: ["Shopping Minas", "MG"],
  152: ["Center Shopping Sete Lagoas", "MG"],
  153: ["Partage Shopping São Gonçalo", "RJ"],
  154: ["Shopping Vila Olímpia", "N/A"],
  155: ["West Plaza", "N/A"],
  156: ["Itapetininga Shopping", "SP"],
  157: ["Shopping Polo Indaiatuba", "SP"],
  158: ["Blumenau Norte Shopping", "SC"],
  159: ["Shopping Pátio Mix Resende", "RJ"],
  160: ["Bourbon Shopping Walling", "N/A"],
  161: ["Uberlândia Shopping", "MG"],
  162: ["Shopping da Ilha", "MA"],
  164: ["Parque Shopping Barueri", "SP"],
  165: ["Park Shopping São Caetano", "SP"],
  167: ["Golden Square Shopping", "SP"],
  168: ["Shopping Poços de Caldas", "MG"],
  169: ["Boulevard Shopping Campos", "RJ"],
  170: ["Limeira Shopping", "SP"],
  171: ["Plaza Shopping ITU", "SP"],
  172: ["Shopping Jardim Guadalupe", "N/A"],
  173: ["Jequitibá Plaza", "BA"],
  174: ["Shopping Eldorado Campo Grande", "MS"],
  175: ["Boulevard Shopping Feira de Santana", "BA"],
  176: ["Plaza shopping", "RJ"],
  177: ["Plaza Shopping Macaé", "RJ"],
  178: ["Shopping River", "PE"],
  179: ["Shopping Pátio Chapecó", "SC"],
  180: ["Shopping Mooca Plaza", "SP"],
  181: ["Montes Claros Shopping", "MG"],
  182: ["Shopping Sul Valparaíso", "GO"],
  183: ["Via Verde Shopping", "AC"],
  184: ["Palladium Ponta Grossa", "PR"],
  185: ["Shopping Manauara", "AM"],
  186: ["Manaíra Shopping Center", "PB"],
  187: ["Internacional Guarulhos", "SP"],
  188: ["Shopping Serramar Parque", "SP"],
  190: ["Parque Shopping Belém", "PA"],
  191: ["Shopping ABC", "N/A"],
  192: ["Shopping Bela Vista", "BA"],
  193: ["Imperial Shopping", "MA"],
  194: ["BANDEIRAS SHOPPING", "SP"],
  195: ["Jundiaí Shopping", "SP"],
  196: ["Shopping Grand Plaza ABC", "SP"],
  197: ["SHOPPING PATIO BATEL", "PR"],
  198: ["Shopping Rio Mar", "PE"],
  199: ["Shopping Center Cariri", "CE"],
  200: ["Shopping Estação", "MG"],
  202: ["Continente Park Shopping", "SC"],
  203: ["Boulevard Londrina Shopping", "PR"],
  205: ["Shopping Patio Marabá", "PA"],
  206: ["PARK SHOPPING CAMPO GRANDE", "RJ"],
  207: ["Mogi Shopping", "SP"],
  208: ["SÃO BERNARDO PLAZA SHOPPING", "SP"],
  209: ["AMAZONAS SHOPPING", "AM"],
  217: ["Metropolitan Garden", "MG"],
  218: ["Shopping Cidade Sorocaba", "SP"],
  219: ["Shopping Pelotas", "RS"],
  220: ["Shopping Tietê", "SP"],
  221: ["Shopping Parangaba", "CE"],
  222: ["Natal Shopping", "RN"],
  223: ["Shopping Arapiraca", "AL"],
  224: ["Shopping Metropolitano", "RJ"],
  225: ["PARQUE SHOPPING MACEIÓ", "AL"],
  226: ["Shopping Rio Mar", "CE"],
  227: ["Shopping Mangabeira", "PB"],
  229: ["Campinas Shopping Center", "SP"],
  230: ["Shopping Metrópole Ananindeua", "PA"],
  234: ["Pantanal Shopping", "MT"],
  235: ["Riomar Presidente Kennedy", "CE"],
  236: ["Park shoppping Canoas", "RS"],
  237: ["Shopping Estação Cuiaba", "MT"],
  238: ["Shopping Iguatemi Porto Alegre", "RS"],
  239: ["Shopping Nova Iguaçu", "RJ"],
  240: ["Shopping Barra Sul", "RS"],
  241: ["Barra Shopping", "RJ"],
  242: ["Jockey Plaza Shopping", "PR"],
  243: ["Shopping Tijuca", "RJ"],
  244: ["Via Brasil Shopping", "N/A"],
  245: ["North Shopping Jóquei", "CE"],
  246: ["Carioca Shopping", "RJ"],
  247: ["Américas Shopping", "PB"],
  248: ["Shopping Pátio Belém", "PA"],
  249: ["Partage Shopping Campina Grande", "PB"],
  250: ["Shopping Bosque Grão Pará", "PA"],
  251: ["Shopping Bosque dos Ipês", "MS"],
  252: ["Shopping Parque Maia", "SP"],
  253: ["Parque Shopping Bahia", "BA"],
  254: ["Shopping Boulevard Bauru", "SP"],
  255: ["Av. Paulista", "SP"],
  256: ["Boulevard Shopping Vitória da Conquista", "BA"],
  258: ["Shopping Ibirapuera", "SP"],
  259: ["Nações Shopping", "SC"],
  260: ["Partage Shopping Rio Grande", "RS"],
  262: ["Shopping Itaguaçu", "SC"],
  263: ["Camará Shopping", "PE"],
  264: ["Shopping Pátio Roraima", "RR"],
  266: ["Shopping Passeio das Águas", "GO"],
  267: ["Rio Poty Shopping", "PI"],
  269: ["Shopping Iguatemi Rio Preto", "SP"],
  270: ["Shopping Iguatemi Campinas", "SP"],
  272: ["Shopping Tivoli", "SP"],
  273: ["Shopping Flamboyant", "GO"],
  274: ["Shopping Del Rey", "MG"],
  275: ["Shopping Patio Ciane", "SP"],
  276: ["Shopping Trimais", "SP"],
  277: ["Maringá Park Shopping", "SP"],
  278: ["Shopping Cantareira", "SP"],
  279: ["Shopping Praia de Belas", "RS"],
  280: ["Shopping Iguatemi Brasília", "DF"],
  281: ["Shopping Iguatemi Ribeirão Preto", "SP"],
  283: ["Palladium Umuarama", "PR"],
  284: ["Shopping Patteo Olinda", "PE"],
  285: ["Shopping Serra Sul", "MG"],
  286: ["Shopping Passo Fundo", "RS"],
  287: ["Shopping Iguatemi JK", "SP"],
  288: ["Shopping Iguatemi São Paulo", "SP"],
  291: ["Shopping Sinop", "MT"],
  292: ["Shopping Nova Araçatuba", "SP"],
  294: ["Porto Velho Shopping", "RO"],
  295: ["Shopping Metro Tucuruvi", "SP"],
  296: ["Shopping Conj Nacional", "DF"],
  297: ["Shopping Interlagos", "SP"],
  298: ["Shopping Vitória", "ES"],
  299: ["Shopping Metro Itaquera", "SP"],
  300: ["Shopping Curitiba", "PR"],
  301: ["Shopping Pato Branco", "PR"],
  303: ["Shopping Patio Maceió", "AL"],
  304: ["SHOPPING NOVA AMERICA", "RJ"],
  305: ["Shopping Madureira", "RJ"],
  306: ["Shopping ABC", "SP"],
  307: ["Shopping Iguatemi Alphaville", "SP"],
  308: ["Shopping Mueller Joinville", "SC"],
  1101: ["Centauro PC - Araras", "SP"],
};

//Elementos HTML
const $link = document.querySelector("#link");
const $sp = document.querySelector("#sp");
const $estoque = document.querySelector("#estoque");
const $OMS = document.querySelector("#OMS");
const $Bar = document.querySelector("#Bar");
const $PDV = document.querySelector("#PDV");
const $nome = document.querySelector("#nome");
const $uf = document.querySelector("#uf");
const $rootStyle = document.querySelector("#root");
const $main = document.querySelector("main");

const $busca = document.querySelector("#busca");
//Não importa aonde clicar na DIV de busca ele vai direcionar o cursor para o input
$busca.addEventListener("click", () => $CE.focus());

//Conforme ele vai digitando nos já atualizamos os IPs no site
const $CE = document.querySelector("#CE");
$CE.addEventListener("keyup", imprimirIp);
$CE.addEventListener("click", imprimirIp);

function imprimirIp() {
  var loja = parseInt($CE.value);
  var ipBase; //vai ser responsavel por armasenar as 3 primeiras casa do IP da loja

  //Caso a loja esteja na lista de exeção
  if (loja in excecao) {
    ipBase = excecao[loja];
  }
  //Caso a loja seja de um numero negativo ele informa que e um numero invalido
  else if (loja <= 0) {
    ipBase = "INVALIDO";
  }

  //aplicação da logica dos IPs da loja
  else if (loja < 100) {
    ipBase = "192.168." + (loja + 100);
  } else if (loja > 99 && loja < 251) {
    ipBase = "10.150." + loja;
  } else {
    //Se o numero do IP for maior que 255 isso quebra a regra de IP (não existe)
    if (loja - 250 > 255) {
      ipBase = "INVALIDO";
    } else {
      ipBase = "10.151." + (loja - 250);
    }
  }

  //imprime o IP da loja no site
  $link.innerHTML = ipBase + ".1";
  $sp.innerHTML = ipBase + ".10";
  $estoque.innerHTML = ipBase + ".40";
  $OMS.innerHTML = ipBase + ".80";
  $Bar.innerHTML = ipBase + ".50";
  $PDV.innerHTML = ipBase + ".12";

  //muda a cor do texto do IP para o user saber se e ou não um
  estiloDaPagina(loja);
}

function estiloDaPagina(loja) {
  const lojaExiste = loja in nomeUFLoja;
  $nome.innerHTML = lojaExiste
    ? nomeUFLoja[loja][0]
    : `Não há registors para a CE${loja}`;
  $uf.innerHTML = lojaExiste ? nomeUFLoja[loja][1] : `N/A`;

  $rootStyle.innerHTML = ":root {";
  $rootStyle.innerHTML += `--identifica: ${lojaExiste ? "yellow" : "red"}`;
  $rootStyle.innerHTML += "}";
}

window.onload = () => {
  const $dados = document.querySelectorAll("li");

  $dados.forEach((x) => {
    x.addEventListener("click", () =>
      copy(x.querySelector("span").textContent)
    );
  });

  imprimirIp();
  //$CE.select();
};

//metodo par fazer a copia do IP para o usuario
function copy(txt) {
  const tempInput = document.createElement("input");
  tempInput.value = txt;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  $main.classList.add("copy");
  setTimeout(() => $main.classList.remove("copy"), 1100);
}
