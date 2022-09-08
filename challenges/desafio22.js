db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
// O primeiro item desse array representa as vendas no domingo, o segundo item representa as vendas na segunda-feira, e assim sucessivamente até chegar ao último item, que representa as vendas no sábado.
db.produtos.updateOne({ nome: "Big Mac" }, 
{ $push: { vendasPorDia: { $each: [60], $position: 3, $slice: 7 } } });
db.produtos.updateMany({ tags: { $all: ["bovino"] } }, 
{ $push: { vendasPorDia: { $each: [120], $position: 6, $slice: 7 } } });
db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });