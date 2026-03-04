import { useEffect, useRef } from "react";
import "./CandlestickChart.css";

function CandlestickChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    const candleWidth = 8;
    const gap = 6;
    const maxCandles = 50;

    let candles = [];

    // ===== Controlled Market Simulation =====
    function generateCandle(prevClose = 200) {
      const volatility = 8;

      // Mean reversion to prevent drift
      const mean = 200;
      const pull = (mean - prevClose) * 0.03;

      const randomMove = (Math.random() - 0.5) * volatility;
      const close = prevClose + randomMove + pull;
      const open = prevClose;

      const high = Math.max(open, close) + Math.random() * 4;
      const low = Math.min(open, close) - Math.random() * 4;

      return { open, close, high, low };
    }

    // Seed initial candles
    let seed = 200;
    for (let i = 0; i < maxCandles; i++) {
      const candle = generateCandle(seed);
      candles.push(candle);
      seed = candle.close;
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // ===== Dynamic Scaling =====
      const prices = candles.flatMap(c => [c.high, c.low]);
      const maxPrice = Math.max(...prices);
      const minPrice = Math.min(...prices);
      const priceRange = maxPrice - minPrice || 1;

      const padding = 20;
      const scale = (height - padding) / priceRange;

      candles.forEach((candle, index) => {
        const x =
          width - (candles.length - index) * (candleWidth + gap);

        const isGreen = candle.close > candle.open;
        const color = isGreen ? "#16c784" : "#ea3943";

        const yOpen = height - (candle.open - minPrice) * scale;
        const yClose = height - (candle.close - minPrice) * scale;
        const yHigh = height - (candle.high - minPrice) * scale;
        const yLow = height - (candle.low - minPrice) * scale;

        ctx.strokeStyle = color;
        ctx.fillStyle = color;

        // Wick
        ctx.beginPath();
        ctx.moveTo(x + candleWidth / 2, yHigh);
        ctx.lineTo(x + candleWidth / 2, yLow);
        ctx.stroke();

        // Body
        ctx.fillRect(
          x,
          Math.min(yOpen, yClose),
          candleWidth,
          Math.max(2, Math.abs(yClose - yOpen))
        );
      });
    }

    function update() {
      const lastClose = candles[candles.length - 1].close;
      const newCandle = generateCandle(lastClose);

      candles.push(newCandle);

      if (candles.length > maxCandles) {
        candles.shift();
      }

      draw();
    }

    draw();
    const interval = setInterval(update, 800);

    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="candlestick-canvas" />;
}

export default CandlestickChart;