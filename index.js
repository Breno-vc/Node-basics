const express = require("express");
const server = express();

server.use(express.json());

let customers = [
  {
    id: 1,
    name: "Dev Samurai",
    site: "https://devsamurai.com.br",
  },
  { id: 2, name: "Google", site: "https://google.com" },
  { id: 3, name: "uol", site: "https://uol.com.br" },
];

server.get("/customers", (_, res) => {
  return res.json(customers);
});

server.get("/customers/:id", (req, res) => {
  const { id } = req.params;
  const customer = customers.find((customer) => customer.id === Number(id));
  const status = customer ? 200 : 404;

  if (status === 200) {
    return res.json(customer);
  }
  if (status === 404) {
    return res.status(status).json({ error: "Customer not found" });
  }
});

server.post("/customers", (req, res) => {
  const { name, site } = req.body;
  const id = customers[customers.length - 1].id + 1;

  const newCustomer = {
    id,
    name,
    site,
  };

  customers.push(newCustomer);

  return res.status(201).json(newCustomer);
});

server.listen(3000);
