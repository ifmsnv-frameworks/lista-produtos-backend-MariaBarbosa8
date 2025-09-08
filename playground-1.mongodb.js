use("Mercadinho")

db.createdatabase("Mercadinho")


db.estudante.insertOne({
    nome: "João Silva",
    idade: 20,
    cidade: "São Paulo",
    cpf: "123.456.789-00",
    rg: "129.345",
    data_nascimento: ("2003-05-15"),
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        bairro: "Jardim das Rosas"
},
email:[
    {email:"joao.silva@gmail.com", }
]
}) 