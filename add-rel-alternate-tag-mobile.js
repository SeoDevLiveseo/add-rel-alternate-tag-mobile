const elementRelAlternate = document.createElement("link");
elementRelAlternate.setAttribute("rel", "alternate");
elementRelAlternate.setAttribute("media", "only screen and (max-width: 600px)");

// Captura a URL da janela
let currentUrl = window.location.href;

// Inicializa variaveis
let cleanUrl, queryString, params, url;

// Remove os parametros da URL se existirem
if (currentUrl.includes("?")) {
    cleanUrl = currentUrl.split("?");
    currentUrl = cleanUrl[0]; // Base da URL sem parametros
    queryString = cleanUrl[1]; // Somente os parametros
} else {
    queryString = ""; // Sem parametros
}

// Cria um objeto URL para manipular os parametros
url = new URL(currentUrl);
url.searchParams.set("uam", "true");
url.searchParams.set("mobile", "2");

if (queryString) {
    // Adiciona os parametros originais a pesquisa
    params = new URLSearchParams(queryString);
    const pgValue = params.get("pg");

    // Adiciona pg se ele existir
    if (pgValue) {
        url.searchParams.set("pg", pgValue);
    }
}

// Configura o atributo href com a nova URL
elementRelAlternate.setAttribute("href", url.toString());

// Adiciona o link ao head para ser reconhecido pelo navegador
document.head.appendChild(elementRelAlternate);
