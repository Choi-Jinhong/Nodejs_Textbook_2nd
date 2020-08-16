const Sequelize = require('sequelize'); // 패키지이자 생성자 역할

const env = process.env.NODE_ENV || 'development'; // mode 설정
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config); // MySQL 연결 객체를 생성

db.sequelize = sequelize; // 연결 객체를 나중에 재사용하기 위해 저장

module.exports = db;