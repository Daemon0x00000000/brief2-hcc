import * as process from 'process';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config({
  path: '.env',
});

const dataSource: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity.js'],
};

export default new DataSource(dataSource);
