const QRCode = require("qrcode");
const fs = require("fs");

async function generateStandSvg() {
  const targetUrl = "https://pay.nomodapp.com/c/c96306ea9a854a4a";
  const qr = QRCode.create(targetUrl, { errorCorrectionLevel: "H" });
  const size = qr.modules.size;
  const data = qr.modules.data;

  // Exact poster dimensions: 800 x 1140
  const W = 800;
  const H = 1140;

  // QR box coordinates
  const qrBoxSize = 600;
  const qrBoxX = (W - qrBoxSize) / 2; // 100
  const qrBoxY = 230;
  const qrBoxR = 36;

  // Inner QR code rendering
  const qrPadding = 48;
  const qrInnerSize = qrBoxSize - qrPadding * 2; // 504
  const cellSize = qrInnerSize / size;
  const qrStartX = qrBoxX + qrPadding;
  const qrStartY = qrBoxY + qrPadding;

  function isFinderPattern(r, c) {
    if (r < 7 && c < 7) return true; // Top-left
    if (r < 7 && c >= size - 7) return true; // Top-right
    if (r >= size - 7 && c < 7) return true; // Bottom-left
    return false;
  }

  let qrCircles = "";

  // Render modules outside finders as rounded dots
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (isFinderPattern(r, c)) continue;
      const isDark = data[r * size + c];
      if (isDark) {
        const cx = (qrStartX + c * cellSize + cellSize / 2).toFixed(2);
        const cy = (qrStartY + r * cellSize + cellSize / 2).toFixed(2);
        qrCircles += `<circle cx="${cx}" cy="${cy}" r="${(cellSize * 0.44).toFixed(2)}" fill="#0c0d0e" />\n`;
      }
    }
  }

  // Draw custom rounded finder patterns matching Nomod aesthetic
  function renderFinder(r0, c0) {
    const fx = qrStartX + c0 * cellSize;
    const fy = qrStartY + r0 * cellSize;
    const fSize = 7 * cellSize;
    const strokeW = cellSize * 1.05;
    const innerSize = 3 * cellSize;
    const innerX = fx + 2 * cellSize;
    const innerY = fy + 2 * cellSize;

    const outX = (fx + strokeW / 2).toFixed(2);
    const outY = (fy + strokeW / 2).toFixed(2);
    const outS = (fSize - strokeW).toFixed(2);
    const outR = (cellSize * 1.85).toFixed(2);
    const innerR = (cellSize * 0.85).toFixed(2);

    return `
      <rect x="${outX}" y="${outY}" width="${outS}" height="${outS}" rx="${outR}" ry="${outR}" fill="none" stroke="#0c0d0e" stroke-width="${strokeW.toFixed(2)}" />
      <rect x="${innerX.toFixed(2)}" y="${innerY.toFixed(2)}" width="${innerSize.toFixed(2)}" height="${innerSize.toFixed(2)}" rx="${innerR}" ry="${innerR}" fill="#0c0d0e" />
    `;
  }

  const finders = renderFinder(0, 0) + renderFinder(0, size - 7) + renderFinder(size - 7, 0);

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="100%" height="100%">
  <defs>
    <!-- Multi-color border gradient around QR -->
    <linearGradient id="rainbowBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E575" />
      <stop offset="18%" stop-color="#76FF03" />
      <stop offset="32%" stop-color="#FFDD00" />
      <stop offset="52%" stop-color="#FF3838" />
      <stop offset="78%" stop-color="#C820E8" />
      <stop offset="100%" stop-color="#0088FF" />
    </linearGradient>

    <!-- Tamara multi-color gradient badge -->
    <linearGradient id="tamaraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF6F00" />
      <stop offset="30%" stop-color="#FFA800" />
      <stop offset="68%" stop-color="#FF388C" />
      <stop offset="100%" stop-color="#CF28D8" />
    </linearGradient>
    <radialGradient id="tamaraBlueGlow" cx="12%" cy="95%" r="65%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0" />
    </radialGradient>

    <!-- Nomod Swirl Gradients -->
    <linearGradient id="swirlGreenYellow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00D26A" />
      <stop offset="100%" stop-color="#FFDD00" />
    </linearGradient>
    <linearGradient id="swirlOrangeRed" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF7A00" />
      <stop offset="100%" stop-color="#FF2E2E" />
    </linearGradient>
    <linearGradient id="swirlPurpleBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C520E8" />
      <stop offset="100%" stop-color="#0070F3" />
    </linearGradient>
  </defs>

  <!-- Background Card -->
  <rect width="${W}" height="${H}" fill="#ffffff" rx="36" />

  <!-- TOP NOMOD LOGO -->
  <g id="nomod-header" transform="translate(400, 118)">
    <!-- Swirl circular pinwheel icon -->
    <g transform="translate(-185, -55) scale(1.1)">
      <!-- Rainbow swirl spiral -->
      <path d="M 50 10 A 40 40 0 0 1 88 38 C 76 34 64 36 55 42 C 46 48 40 56 40 68 C 28 65 18 55 18 42 A 32 32 0 0 1 50 10 Z" fill="#00D5FF" />
      <path d="M 88 38 A 40 40 0 0 1 88 68 C 78 60 66 58 56 61 C 46 64 39 72 38 82 C 28 76 22 65 22 52 C 22 42 26 33 33 26 C 46 38 68 44 88 38 Z" fill="url(#swirlGreenYellow)" />
      <path d="M 88 68 A 40 40 0 0 1 58 90 C 58 78 52 66 42 58 C 32 50 20 48 10 52 C 10 40 18 28 28 22 C 34 36 50 56 65 60 C 76 63 83 65 88 68 Z" fill="url(#swirlOrangeRed)" />
      <path d="M 58 90 A 40 40 0 0 1 20 78 C 30 70 38 58 38 46 C 38 34 32 24 24 16 C 36 12 50 14 62 20 C 56 34 50 58 48 70 C 47 78 52 85 58 90 Z" fill="url(#swirlPurpleBlue)" />
      <!-- Center white circle for hole -->
      <circle cx="50" cy="50" r="18" fill="#ffffff" />
    </g>

    <!-- Wordmark "nomod" -->
    <text x="-60" y="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="88" font-weight="900" letter-spacing="-3.5px" fill="#0c0d0e">nomod</text>
  </g>

  <!-- QR CODE FRAME WITH RAINBOW BORDER -->
  <rect x="${qrBoxX}" y="${qrBoxY}" width="${qrBoxSize}" height="${qrBoxSize}" rx="${qrBoxR}" fill="#ffffff" stroke="url(#rainbowBorder)" stroke-width="4.5" />

  <!-- QR Modules & Finders -->
  <g id="qr-code">
    ${qrCircles}
    ${finders}
  </g>

  <!-- BADGES (TABBY & TAMARA) -->
  <g id="badges" transform="translate(${qrBoxX}, ${qrBoxY + qrBoxSize + 36})">
    <!-- Left: Tabby -->
    <g transform="translate(0, 0)">
      <rect width="288" height="96" rx="22" fill="#00D26A" />
      <g transform="translate(144, 48)">
        <text text-anchor="middle" dominant-baseline="central" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="900" letter-spacing="-2px" fill="#0c0d0e">
          <tspan font-family="sans-serif" font-weight="bold">₺</tspan>abby
        </text>
      </g>
    </g>

    <!-- Right: Tamara -->
    <g transform="translate(312, 0)">
      <rect width="288" height="96" rx="22" fill="url(#tamaraGrad)" />
      <rect width="288" height="96" rx="22" fill="url(#tamaraBlueGlow)" />
      <text x="144" y="50" text-anchor="middle" dominant-baseline="central" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="50" font-weight="900" letter-spacing="-1.5px" fill="#0c0d0e">
        tamara
      </text>
    </g>
  </g>

  <!-- PAYMENT METHODS FOOTER LOGOS -->
  <g id="payment-logos" transform="translate(400, ${qrBoxY + qrBoxSize + 184})">
    <!-- Apple Pay -->
    <g transform="translate(-260, 0)">
      <path d="M -28 -14 C -26 -17 -23 -19 -20 -19 C -20 -16 -21 -13 -23 -11 C -25 -9 -28 -9 -28 -14 Z M -16 -8 C -18 -8 -20 -9 -22 -9 C -25 -9 -27 -7 -27 -4 C -27 1 -23 8 -19 8 C -17 8 -16 7 -14 7 C -12 7 -11 8 -9 8 C -6 8 -2 3 -2 0 C -6 -1 -7 -4 -7 -7 C -7 -11 -4 -13 -3 -13 C -6 -15 -10 -15 -12 -15 C -14 -15 -15 -14 -16 -14 Z" fill="#000000" />
      <text x="2" y="2" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="32" font-weight="800" fill="#000000">Pay</text>
    </g>

    <!-- Google Pay -->
    <g transform="translate(-115, -2)">
      <g transform="translate(-26, -15) scale(1.15)">
        <path d="M24 12.2c0-.8-.1-1.6-.2-2.3H12v4.6h6.8c-.3 1.6-1.2 3-2.5 3.9v3.2h4.1c2.4-2.2 3.8-5.5 3.8-9.4z" fill="#4285F4"/>
        <path d="M12 24.4c3.4 0 6.2-1.1 8.3-3.1l-4.1-3.2c-1.1.8-2.6 1.2-4.2 1.2-3.2 0-6-2.2-7-5.1H.8v3.3C2.9 21.7 7.1 24.4 12 24.4z" fill="#34A853"/>
        <path d="M5 14.2c-.3-.8-.4-1.6-.4-2.4s.1-1.6.4-2.4V6.1H.8C0 7.9-.4 9.9-.4 12s.4 4.1 1.2 5.9l4.2-3.7z" fill="#FBBC05"/>
        <path d="M12 4.4c1.8 0 3.5.6 4.8 1.9l3.6-3.6C18.2 1 15.3 0 12 0 7.1 0 2.9 2.7.8 6.9l4.2 3.3c1-2.9 3.8-5.8 7-5.8z" fill="#EA4335"/>
      </g>
      <text x="9" y="5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="30" font-weight="700" fill="#5f6368">Pay</text>
    </g>

    <!-- VISA -->
    <g transform="translate(22, 0)">
      <text x="0" y="7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="38" font-weight="900" font-style="italic" fill="#1434CB" letter-spacing="1px">VISA</text>
    </g>

    <!-- Mastercard -->
    <g transform="translate(148, 0)">
      <circle cx="-15" cy="0" r="20" fill="#EB001B" />
      <circle cx="15" cy="0" r="20" fill="#F79E1B" fill-opacity="0.94" />
      <path d="M 0 -13.8 A 20 20 0 0 1 0 13.8 A 20 20 0 0 1 0 -13.8 Z" fill="#FF5F00" />
    </g>

    <!-- AMEX -->
    <g transform="translate(275, 0)">
      <rect x="-40" y="-17" width="80" height="34" rx="4" fill="#006FCF" />
      <text x="0" y="6" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="900" fill="#ffffff" letter-spacing="1.5px">AMEX</text>
    </g>
  </g>
</svg>`;

  fs.writeFileSync("public/tabby-tamara-qr-stand.svg", svg.trim());
  console.log("Updated SVG written to public/tabby-tamara-qr-stand.svg");
}

generateStandSvg();

