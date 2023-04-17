// 4 - Retorne os lanches que tiveram vendas maiores que 50 e menores que 100, mostrando apenas o nome e a quantidade de lanches vendidos em ordem crescente
db.produtos
.find({ vendidos: { $lt: 100, $gt: 50 } }, { _id: 0, nome: true, vendidos: true })
.sort({ vendidos: 1 });