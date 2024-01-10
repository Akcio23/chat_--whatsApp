function api(){
    const tel = document.getElementById('numero').value;
    const whatsappLink = "https://api.whatsapp.com/send/?phone=" + 55 +tel;

    // Abrir uma nova página com o link gerado
    window.open(whatsappLink, '_blank');

    return false;
}

function handleEnter(event) {
    if (event.key === "Enter") {
        api();
    }
}