const produtos = db.produtos.count();
db.resumoProdutos.insert({ franquia: "McDonalds", totalProdutos: produtos });
db.resumoProdutos.find({}, { _id: 0, franquia: 1, totalProdutos: 1 });