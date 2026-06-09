function mostrarInfo(produto){

    const texto = document.getElementById("texto-info");

    if(produto === "hortalicas"){
        texto.innerHTML =
        "As hortaliças orgânicas são cultivadas sem pesticidas químicos, preservando a saúde e o meio ambiente.";
    }

    if(produto === "cafe"){
        texto.innerHTML =
        "O café sustentável utiliza técnicas que reduzem impactos ambientais e valorizam os produtores locais.";
    }

    if(produto === "mel"){
        texto.innerHTML =
        "O mel orgânico é produzido respeitando as abelhas e a biodiversidade da região.";
    }
}