// 26 - Adicione o valor contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40
db.produtos.updateMany(
    { valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $lt: 40, $gt: 20 } } } },
    { $push: { tags: { $each: ["contém sódio"] } } },
  );
  
  db.produtos.find({}, { _id: false, nome: true, tags: true });
function soma(v1, v2) {
 return v1 + v2;
}

console.log(soma(3, 5));