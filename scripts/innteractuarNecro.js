const innteractuarNecro = (e) => {
    // ---------------------------------------------------------------   
    //-------- parte dos---------------------------------------------
    //-------------------------------------------------------------
    if (pjPrincipal.detectarColision(campamentoNecro)) {
        //console.log("Entra el detectar desde el PJ")
        // eventoRPG();
        ctx.drawImage(imgagenInte, 50, 600);
    }
    if (e.key === "Enter" && campamentoNecro.detectarColision(pjPrincipal)) {
        console.log("entra el detectar desde campamento NECRO");
        ctx.drawImage(imgagenInte, 50, 600);
    }
    //if (entradaCastillo.detectarColision(pjPrincipal)) {
    //}
};
