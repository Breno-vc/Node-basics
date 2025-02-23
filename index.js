// const express = require("express");
// const server = express();

// server.use(express.json());

// let customers = [
//   {
//     id: 1,
//     name: "Dev Samurai",
//     site: "https://devsamurai.com.br",
//   },
//   { id: 2, name: "Google", site: "https://google.com" },
//   { id: 3, name: "uol", site: "https://uol.com.br" },
// ];

// server.get("/customers", (_, res) => {
//   return res.json(customers);
// });

// server.get("/customers/:id", (req, res) => {
//   const { id } = req.params;
//   const customer = customers.find((customer) => customer.id === Number(id));
//   const status = customer ? 200 : 404;

//   if (status === 200) {
//     return res.json(customer);
//   }
//   if (status === 404) {
//     return res.status(status).json({ error: "Customer not found" });
//   }
// });

// server.post("/customers", (req, res) => {
//   const { name, site } = req.body;
//   const id = customers[customers.length - 1].id + 1;

//   const newCustomer = {
//     id,
//     name,
//     site,
//   };

//   customers.push(newCustomer);

//   return res.status(201).json(newCustomer);
// });

// // MAIN DIFFERENCES BETWEEN PUT AND PATCH ARE THAT PUT IS COMPLETELY REPLACING THE RESOURCE AND PATCH IS PARTIALLY UPDATING THE RESOURCE
// server.patch("/customers/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const { name, site } = req.body;
//   const index = customers.findIndex((item) => item.id === id);
//   const status = index >= 0 ? 200 : 404;

//   console.log(name, site);

//   if (index >= 0) {
//     customers[index] = {
//       id,
//       name: name ? name : customers[index].name,
//       site: site ? site : customers[index].site,
//     };
//   }

//   return res.status(status).json(customers[index]);
// });

// server.delete("/customers/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = customers.findIndex((item) => item.id === id);

//   const status = index >= 0 ? 200 : 404;

//   if (index >= 0) {
//     customers.splice(index, 1);
//   }
//   return res.status(status).json({
//     message: status === 200 ? "Customer deleted" : "Customer not found",
//   });
// });

// server.listen(3000);
