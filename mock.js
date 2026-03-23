const API_URL = process.env.API_URL || 'https://safetemp-api.onrender.com/api/data/registertemp';
const CHIP_ID = '10711434E3EC';

const sendData = async () => {
  try {
    const variation = (Math.random() - 0.5) * 0.8;
    const baseTemp = 25.0 + variation;

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
      console.log(`✅ Enviado: ${payload.temp}°C`);
    } else {
      const text = await response.text();
      console.error(`❌ Erro no servidor: ${response.status} - ${text}`);
    }
  } catch (error) {
    console.error("❌ Erro de conexão:", error.message);
  }
};

sendData();
