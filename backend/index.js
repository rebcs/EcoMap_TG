// index.js
import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import axios from "axios";

const app = express();
const GOOGLE_MAPS_API_KEY = "";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "ecomap",
});

app.use(express.json());
app.use(cors());

app.post("/buscar-pontos-coleta", async (req, res) => {
  const { latitude, longitude, raio, materiais } = req.body;

  try {
    const connection = await db;
    const query = `
      SELECT DISTINCT pc.*, 
      (6371 * acos(cos(radians(?)) * cos(radians(pc.latitude)) * cos(radians(pc.longitude) - radians(?)) 
      + sin(radians(?)) * sin(radians(pc.latitude)))) AS distance 
      FROM Ponto_coleta AS pc
      JOIN PontoColeta_TipoMaterial AS ptm ON pc.id_pontoColeta = ptm.fk_id_pontoColeta
      WHERE ptm.fk_id_tipoMaterial IN (${materiais.join(",")})
      HAVING distance < ?
      ORDER BY distance
    `;
    
    const [results] = await connection.execute(query, [latitude, longitude, latitude, raio]);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar pontos de coleta" });
  }
});

// Endpoint para buscar ONGs próximas
app.post("/buscar-ongs", async (req, res) => {
  const { latitude, longitude, raio, materiais } = req.body;

  try {
    const connection = await db;
    const query = `
      SELECT DISTINCT ong.*, 
      (6371 * acos(cos(radians(?)) * cos(radians(ong.latitude)) * cos(radians(ong.longitude) - radians(?)) 
      + sin(radians(?)) * sin(radians(ong.latitude)))) AS distance 
      FROM Usuario AS ong
      JOIN Usuario_tipoMaterial AS utm ON ong.id_usuario = utm.fk_id_usuario
      WHERE utm.fk_id_tipoMaterial IN (${materiais.join(",")}) 
        AND ong.tipo_servico = 'Retira no Local'
      HAVING distance < ?
      ORDER BY distance
    `;
    
    const [results] = await connection.execute(query, [latitude, longitude, latitude, raio]);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar ONGs próximas" });
  }
});

app.post("/buscar-empresas", async (req, res) => {
  const { latitude, longitude, raio, materiais, tipoTransacao } = req.body;

  try {
    const connection = await db;
    const query = `
      SELECT emp.*, 
      (6371 * acos(cos(radians(?)) * cos(radians(emp.latitude)) * cos(radians(emp.longitude) - radians(?)) 
      + sin(radians(?)) * sin(radians(emp.latitude)))) AS distance 
      FROM Usuario AS emp
      JOIN Usuario_tipoMaterial AS utm ON emp.id_usuario = utm.fk_id_usuario
      WHERE utm.fk_id_tipoMaterial IN (${materiais.join(",")}) 
        AND emp.tipo_servico = ?
      HAVING distance < ?
      ORDER BY distance
    `;
    
    const [results] = await connection.execute(query, [latitude, longitude, latitude, tipoTransacao, raio]);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar empresas próximas" });
  }
});

app.listen(8000, () => {
  console.log("Connected to backend!");
});