import mysql from 'mysql2/promise';

let connection;

export async function initConnection() {
  try {
    connection = await mysql.createConnection({
      host: '127.0.0.1',
      user: 'bit',
      password: process.env.BIT_USER_PASSWORD,
      database: 'bit',
      namedPlaceholders: true,
      typeCast: (field, useDefaultTypeCasting) => ((field.type === "TINY") && (field.length === 1)) ? field.string() === '1' : useDefaultTypeCasting()
    });

  } catch (error) {
    console.log(error);
    throw new Error("Service is down: " + 1);
  }
}

export async function getDb() {
  if (!connection) {
    await initConnection();
    return connection;
  } else return connection;
}


