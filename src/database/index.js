import { Sequelize } from 'sequelize';
import config from '../config/database';

import Customer from '../app/models/Customer';
import User from '../app/models/User';
import Contact from '../app/models/Contact';

const models = [User, Contact, Customer];

class Database {
  constructor() {
    console.warn('🛠 Inicializando conexão com o banco de dados...');
    this.connection = new Sequelize(config);

    this.initModels();
    this.associateModels();
    this.testConnection();
  }

  initModels() {
    models.forEach((model) => {
      console.warn(`🔄 Inicializando modelo: ${model.name}`);
      model.init(this.connection); // Passando a conexão corretamente
    });
  }

  associateModels() {
    models.forEach((model) => {
      if (model.associate) {
        console.warn(`🔗 Associando modelo: ${model.name}`);
        model.associate(this.connection.models);
      }
    });
  }

  async testConnection() {
    try {
      await this.connection.authenticate();
      console.warn('✅ Conexão bem-sucedida!');
    } catch (error) {
      console.error('❌ Erro ao conectar ao banco de dados:', error);
    }
  }
}

export default new Database();
