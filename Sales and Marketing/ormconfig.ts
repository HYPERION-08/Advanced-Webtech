import { Users } from 'src/entities/users.entity';
import { Notification } from 'src/entities/notification.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Analytics } from 'src/entities/analytics.entity';
import { Sale } from 'src/entities/sales.entity';
import { Customer } from 'src/entities/customer.entity';

const ormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  entities: [Users,Notification,Analytics,Sale,Customer],
  synchronize: true,
  schema: 'public',
};

export default ormConfig;
