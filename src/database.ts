//Criar conexão com o banco sqlite

import sqlite3 from "sqlite3";
import {open, Database} from "sqlite";
import path from "path";

export async function openDB(): Promise<Database<sqlite3.Database, sqlite3.Statement>> {
    return open({
      filename: path.join(__dirname, 'database.sqlite'), // Caminho para o arquivo do banco de dados
      driver: sqlite3.Database
    });
  }

  // Função para inicializar o banco de dados e criar as tabelas necessárias
  export async function initDB(): Promise<void> {
    const db = await openDB();

    await db.exec(`
          CREATE TABLE IF NOT EXISTS searches (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          cityName TEXT NOT NULL,
          country TEXT NOT NULL,
          temperature REAL NOT NULL,
          description TEXT NOT NULL,
          ipAddress TEXT NOT NULL,
          searchDate DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      console.log("Database initialized and tables created");

  }

    export default {
        openDB,
        initDB
    };