db.produtos.updateMany({ valoresNutricionais: { $all: [
  { $elemMatch: { tipo: "sódio", percentual: { $gt: 20, $lt: 40 } } },
  ] } }, 
  { $push: { tags: { $each: ["contém sódio"] } } });
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });