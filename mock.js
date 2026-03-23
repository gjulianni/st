// mock.js (Versão sem dependências)
const API_URL = 'https://safetemp-api.onrender.com/api/data/registertemp'; 
const CHIP_ID = '10711434E3EC';
let baseTemp = 25.0;

const sendData = async () => {
  try {
    const variation = (Math.random() - 0.5);
    baseTemp += variation;
    
    const payload = {
      chipId: CHIP_ID,
      temp: parseFloat(baseTemp.toFixed(2))
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log(`[${new Date().toLocaleTimeString()}] Enviado: ${payload.temp}°C`);
    } else {
      console.error(`❌ Erro no servidor: ${response.status}`);
    }
  } catch (error) {
    console.error("❌ Erro de conexão:", error.message);
  }
};

setInterval(sendData, 60000);
sendData();
