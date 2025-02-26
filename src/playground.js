import './database';

import Customer from './app/models/Customer';

class Playground {
  static async play() {
    const customers = await Customer.findAll();

    console.warn(JSON.stringify(customers, null, 2));
  }
}

Playground.play();
