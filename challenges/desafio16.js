db.produtos.updateOne({ nome: "Big Mac" }, 
{ $currentDate: { ultimaModificacao: { $type: "date" } } });
db.produtos.find({ $and: [
  { ultimaModificacao: { $exists: true } }, { ultimaModificacao: { $ne: null } }] }, 
  { _id: 0, nome: 1 })
  .pretty();