function transporMatriz(Mat){
    console.log(`Matriz\n`);
    //Pra cada linha
    for(let i = 0; i < Mat.length; i++){
        let linha = "";
        //Percorro suas colunas
        for(let j = 0; j< Mat[i].length; j++){
            linha += Mat[i][j] + "\t";
        }
        console.log(linha);
    }

    console.log(`Transposta\n`);
    //Pra cada coluna
    for(let j = 0; j < Mat[0].length; j++){
        let linha = "";
        //Percorro suas linhas
        for(let i = 0; i< Mat.length; i++){
            linha += Mat[i][j] + "\t";
        }
        console.log(linha);
    }
}

let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matriz);