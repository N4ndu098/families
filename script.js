function calcular() {
    // Pegando inputs
    const tipoVenda = document.getElementById('tipoVenda').value;
    const qtdColete = parseInt(document.getElementById('qtdColete').value) || 0;
    const qtdM1911_final = parseInt(document.getElementById('qtdM1911').value) || 0;
    const qtdAti = parseInt(document.getElementById('qtdAti').value) || 0;

    const gridResultados = document.getElementById('gridResultados');
    gridResultados.innerHTML = ''; // Limpa resultados anteriores

    let gerouAlgumResultado = false;

    // Variáveis para somar o valor total da venda
    let totalLimpoGeral = 0;
    let totalSujoGeral = 0;

    // Tabela de Preços com base nos flyers e ajustes
    const tabelaPrecos = {
        parceria: { colete: { limpo: 26000, sujo: 33000 }, m1911: { limpo: 26000, sujo: 33000 }, ati: { limpo: 37000, sujo: 48000 } },
        cnpj: { colete: { limpo: 30000, sujo: 39000 }, m1911: { limpo: 30000, sujo: 39000 }, ati: { limpo: 40000, sujo: 52000 } },
        pista: { colete: { limpo: 40000, sujo: 52000 }, m1911: { limpo: 40000, sujo: 52000 }, ati: { limpo: 60000, sujo: 78000 } }
    };

    const precos = tabelaPrecos[tipoVenda];
    const nomeTabela = tipoVenda.charAt(0).toUpperCase() + tipoVenda.slice(1);

    let htmlCards = ''; // Variável para armazenar os cards dos itens

    // ==========================================
    // 1. CÁLCULO DO COLETE BALÍSTICO
    // ==========================================
    if (qtdColete > 0) {
        gerouAlgumResultado = true;
        const totalPlacas = qtdColete * 1;

        const valorLimpo = precos.colete.limpo * qtdColete;
        const valorSujo = precos.colete.sujo * qtdColete;

        // Somando ao total geral
        totalLimpoGeral += valorLimpo;
        totalSujoGeral += valorSujo;

        htmlCards += `
            <div class="card-result">
                <h2>Colete Balístico <span class="qty-total">${qtdColete}x</span></h2>
                
                <div class="material-block">
                    <h3>Valores de Venda (${nomeTabela}):</h3>
                    <ul class="mat-list">
                        <li>Dinheiro Limpo <span class="qty">$${valorLimpo.toLocaleString('pt-BR')}</span></li>
                        <li>Dinheiro Sujo <span class="qty">$${valorSujo.toLocaleString('pt-BR')}</span></li>
                    </ul>
                </div>

                <div class="material-block">
                    <h3>Para a Montagem Final:</h3>
                    <ul class="mat-list">
                        <li>Real Sujo <span class="qty">${(qtdColete * 500).toLocaleString('pt-BR')}x</span></li>
                        <li>Lona <span class="qty">${(qtdColete * 2).toLocaleString('pt-BR')}x</span></li>
                        <li>Placa Blindada <span class="qty">${totalPlacas.toLocaleString('pt-BR')}x</span></li>
                    </ul>
                </div>

                <div class="material-block">
                    <h3>Matéria-Prima p/ Fabricar as Placas (${totalPlacas}x):</h3>
                    <ul class="mat-list subproduct-list">
                        <li>Cobre <span class="qty">${(totalPlacas * 40).toLocaleString('pt-BR')}x</span></li>
                        <li>Alumínio <span class="qty">${(totalPlacas * 40).toLocaleString('pt-BR')}x</span></li>
                        <li>Plástico <span class="qty">${(totalPlacas * 60).toLocaleString('pt-BR')}x</span></li>
                        <li>Vidro <span class="qty">${(totalPlacas * 60).toLocaleString('pt-BR')}x</span></li>
                        <li>Borracha <span class="qty">${(totalPlacas * 65).toLocaleString('pt-BR')}x</span></li>
                        <li>Placa <span class="qty">${(totalPlacas * 1).toLocaleString('pt-BR')}x</span></li>
                        <li>Chapa de Metal <span class="qty">${(totalPlacas * 2).toLocaleString('pt-BR')}x</span></li>
                    </ul>
                </div>
            </div>
        `;
    }

    // ==========================================
    // 2. CÁLCULO DA M1911 (Como arma final)
    // ==========================================
    if (qtdM1911_final > 0) {
        gerouAlgumResultado = true;
        const totalPecasLevesM1911 = qtdM1911_final * 2;

        const valorLimpo = precos.m1911.limpo * qtdM1911_final;
        const valorSujo = precos.m1911.sujo * qtdM1911_final;

        // Somando ao total geral
        totalLimpoGeral += valorLimpo;
        totalSujoGeral += valorSujo;

        htmlCards += `
            <div class="card-result">
                <h2>M1911 (Final) <span class="qty-total">${qtdM1911_final}x</span></h2>
                
                <div class="material-block">
                    <h3>Valores de Venda (${nomeTabela}):</h3>
                    <ul class="mat-list">
                        <li>Dinheiro Limpo <span class="qty">$${valorLimpo.toLocaleString('pt-BR')}</span></li>
                        <li>Dinheiro Sujo <span class="qty">$${valorSujo.toLocaleString('pt-BR')}</span></li>
                    </ul>
                </div>

                <div class="material-block">
                    <h3>Para a Montagem Final:</h3>
                    <ul class="mat-list">
                        <li>Real Sujo <span class="qty">${(qtdM1911_final * 1000).toLocaleString('pt-BR')}x</span></li>
                        <li>Peças de Arma Leve <span class="qty">${totalPecasLevesM1911.toLocaleString('pt-BR')}x</span></li>
                    </ul>
                </div>

                <div class="material-block">
                    <h3>Matéria-Prima p/ Peças Leves (${totalPecasLevesM1911}x):</h3>
                    <ul class="mat-list subproduct-list">
                        <li>Real Sujo <span class="qty">${(totalPecasLevesM1911 * 1000).toLocaleString('pt-BR')}x</span></li>
                        <li>Alumínio <span class="qty">${(totalPecasLevesM1911 * 25).toLocaleString('pt-BR')}x</span></li>
                        <li>Cobre <span class="qty">${(totalPecasLevesM1911 * 25).toLocaleString('pt-BR')}x</span></li>
                        <li>Vidro <span class="qty">${(totalPecasLevesM1911 * 25).toLocaleString('pt-BR')}x</span></li>
                        <li>Borracha <span class="qty">${(totalPecasLevesM1911 * 25).toLocaleString('pt-BR')}x</span></li>
                        <li>Corpo de Pistola <span class="qty">${(totalPecasLevesM1911 * 1).toLocaleString('pt-BR')}x</span></li>
                        <li>Peças de Armas <span class="qty">${(totalPecasLevesM1911 * 2).toLocaleString('pt-BR')}x</span></li>
                    </ul>
                </div>
            </div>
        `;
    }

    // ==========================================
    // 3. CÁLCULO DA ATI FX45
    // ==========================================
    if (qtdAti > 0) {
        gerouAlgumResultado = true;
        
        // A ATI exige a M1911 montada, que exige Peça Leve
        const m1911Necessarias = qtdAti * 1;
        const pecasLevesNecessariasATI = m1911Necessarias * 2;

        const valorLimpo = precos.ati.limpo * qtdAti;
        const valorSujo = precos.ati.sujo * qtdAti;

        // Somando ao total geral
        totalLimpoGeral += valorLimpo;
        totalSujoGeral += valorSujo;

        htmlCards += `
            <div class="card-result">
                <h2>Ati FX45 <span class="qty-total">${qtdAti}x</span></h2>
                
                <div class="material-block">
                    <h3>Valores de Venda (${nomeTabela}):</h3>
                    <ul class="mat-list">
                        <li>Dinheiro Limpo <span class="qty">$${valorLimpo.toLocaleString('pt-BR')}</span></li>
                        <li>Dinheiro Sujo <span class="qty">$${valorSujo.toLocaleString('pt-BR')}</span></li>
                    </ul>
                    <p style="color: #f39c12; font-size: 0.85em; margin-top: 10px;">*Necessário trazer 2 UP's por unidade.</p>
                </div>

                <div class="material-block">
                    <h3>Para a Montagem Final:</h3>
                    <ul class="mat-list">
                        <li>M1911 Pronta <span class="qty">${m1911Necessarias.toLocaleString('pt-BR')}x</span></li>
                        <li>Real Sujo <span class="qty">${(qtdAti * 1000).toLocaleString('pt-BR')}x</span></li>
                        <li>Parafusos Pequenos <span class="qty">${(qtdAti * 1).toLocaleString('pt-BR')}x</span></li>
                        <li>Caixa de Aperfeiçoamento <span class="qty">${(qtdAti * 2).toLocaleString('pt-BR')}x</span></li>
                    </ul>
                </div>

                <div class="material-block">
                    <h3>Para a M1911 da ATI (${m1911Necessarias}x):</h3>
                    <ul class="mat-list subproduct-list">
                        <li>Real Sujo <span class="qty">${(m1911Necessarias * 1000).toLocaleString('pt-BR')}x</span></li>
                        <li>Peças de Arma Leve <span class="qty">${pecasLevesNecessariasATI.toLocaleString('pt-BR')}x</span></li>
                    </ul>
                </div>

                <div class="material-block">
                    <h3>Matéria-Prima p/ Peças Leves (${pecasLevesNecessariasATI}x):</h3>
                    <ul class="mat-list subproduct-list">
                        <li>Real Sujo <span class="qty">${(pecasLevesNecessariasATI * 1000).toLocaleString('pt-BR')}x</span></li>
                        <li>Alumínio <span class="qty">${(pecasLevesNecessariasATI * 25).toLocaleString('pt-BR')}x</span></li>
                        <li>Cobre <span class="qty">${(pecasLevesNecessariasATI * 25).toLocaleString('pt-BR')}x</span></li>
                        <li>Vidro <span class="qty">${(pecasLevesNecessariasATI * 25).toLocaleString('pt-BR')}x</span></li>
                        <li>Borracha <span class="qty">${(pecasLevesNecessariasATI * 25).toLocaleString('pt-BR')}x</span></li>
                        <li>Corpo de Pistola <span class="qty">${(pecasLevesNecessariasATI * 1).toLocaleString('pt-BR')}x</span></li>
                        <li>Peças de Armas <span class="qty">${(pecasLevesNecessariasATI * 2).toLocaleString('pt-BR')}x</span></li>
                    </ul>
                </div>
            </div>
        `;
    }

    // Exibe ou esconde o container principal de resultados e insere o Total Geral
    const containerResultados = document.getElementById('resultados');
    if (gerouAlgumResultado) {
        
        // Criando o Card do Resumo Total (vai ocupar a largura toda)
        let htmlTotal = `
            <div class="card-result" style="border-top: 4px solid #f39c12; grid-column: 1 / -1;">
                <h2 style="color: #f39c12;">💰 Resumo Total da Venda (${nomeTabela})</h2>
                <div class="material-block">
                    <ul class="mat-list">
                        <li>Total em Dinheiro Limpo <span class="qty" style="background-color: #27ae60; color: white;">$${totalLimpoGeral.toLocaleString('pt-BR')}</span></li>
                        <li>Total em Dinheiro Sujo <span class="qty" style="background-color: #c0392b; color: white;">$${totalSujoGeral.toLocaleString('pt-BR')}</span></li>
                    </ul>
                </div>
            </div>
        `;

        // Insere o Total primeiro, e depois os cards dos itens
        gridResultados.innerHTML = htmlTotal + htmlCards;
        containerResultados.style.display = 'block';

    } else {
        containerResultados.style.display = 'none';
        alert('Por favor, insira a quantidade de pelo menos um item para calcular!');
    }
}