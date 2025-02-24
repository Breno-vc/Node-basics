import Sequelize, { Model } from 'sequelize';

class Customer extends Model {
  static init(sequelize) {
    super.init(
      {
        customer_name: Sequelize.STRING,
        customer_email: Sequelize.STRING,
        // customer_status: Sequelize.ENUM('ACTIVE', 'ARCHIVED'),
      },
      { sequelize },
    );
  }
  static associate(models) {
    this.hasMany(models.Contact);
  }
}

export default Customer;
