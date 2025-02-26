import Customer from '../models/Customer';

let customers = [
  {
    id: 1,
    name: 'Dev Samurai',
    site: 'https://devsamurai.com.br',
  },
  { id: 2, name: 'Google', site: 'https://google.com' },
  { id: 3, name: 'uol', site: 'https://uol.com.br' },
];
class CustomersControllers {
  //LIST
  async index(_, res) {
    const data = await Customer.findAll({
      limit: 1000,
    });
    // const data = customers;
    return res.json(data);
  }
  // get one customer
  show(req, res) {
    const { id } = req.params;
    const customer = customers.find((customer) => customer.id === Number(id));
    const status = customer ? 200 : 404;

    if (status === 200) {
      return res.status(status).json(customer);
    }
    if (status === 404) {
      return res.status(status).json({ error: 'Customer not found' });
    }
  }
  //create a customer
  create(req, res) {
    const { name, site } = req.body;
    const id = customers[customers.length - 1].id + 1;
    customers.push({ id, name, site });
    return res.status(201).json({ id, name, site });
  }
  // update a customer
  update(req, res) {
    const { id } = req.params;
    const { name, site } = req.body;
    const index = customers.findIndex((item) => item.id === Number(id));
    const status = index >= 0 ? 200 : 404;
    if (index >= 0) {
      customers[index] = {
        ...customers[index], // Mantém os valores existentes
        name: name || customers[index].name, // Atualiza o nome se fornecido
        site: site || customers[index].site, // Atualiza o site se fornecido
      };
    }
    return res.status(status).json(customers[index]);
  }
  //delete a customer
  destroy(req, res) {
    const { id } = req.params;
    const index = customers.findIndex((item) => item.id === Number(id));
    const status = index >= 0 ? 200 : 404;
    if (index >= 0) {
      customers.splice(index, 1);
    }
    return res.status(status).json({
      message: status === 200 ? 'Customer deleted' : 'Customer not found',
    });
  }
}

export default new CustomersControllers();
