import './database';

import Customer from './app/models/Customer';

class Playground {
  static async play() {
    // const customers = await Customer.findAll({
    //   attributes: {
    //     exclude: ['status', 'createdAt', 'updatedAt'],
    //   },
    //   where: {
    //     customer_id: 4,
    //   },
    // });
    // const customer = await Customer.findOne({
    //   attributes: {
    //     exclude: ['status'],
    //   },
    // });
    const customer = await Customer.findByPk(4, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    console.warn(JSON.stringify(customer, null, 2));
  }
}

Playground.play();
