"use client";
import React, { useState, useEffect } from "react";
import { Download, RefreshCw, Copy, Check, QrCode } from "lucide-react";
import QRCode from "qrcode";
import { InfoQR } from "./components/infoQR.js";
import { SizeImage } from "./components/sizeImage.js";
import { ColorCode } from "./components/colorCode.js";
import { InputText } from "./components/inputText.js";
import { LevelAndMargin } from "./components/levelAndMargin.js";
import { useQRHooks } from "./hooks/useQRHooks.js";

export default function Home() {
  const [text, setText] = useState("TEXTO DE PRUEBA");
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const { downloadQR, copyToClipboard } = useQRHooks();
  // Configuración del QR
  const [config, setConfig] = useState({
    size: 256,
    darkColor: "#000000",
    lightColor: "#ffffff",
    errorCorrectionLevel: "M",
    margin: 4,
    format: "png",
  });

  // Función para generar QR usando qrcode.js
  const generateQR = async () => {
    if (!text.trim()) {
      setError("Por favor ingresa un texto o URL");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Simulamos el uso de QRCode.toDataURL (en producción sería exactamente así)
      const opts = {
        width: config.size,
        color: {
          dark: config.darkColor,
          light: config.lightColor,
        },
        errorCorrectionLevel: config.errorCorrectionLevel,
        margin: config.margin,
        type: config.format === "png" ? "image/png" : "image/jpeg",
      };

      //En producción, reemplaza todo el código de canvas arriba con esta línea:
      const dataUrl = await QRCode.toDataURL(text, opts);
      setQrDataUrl(dataUrl);
    } catch (error) {
      console.error("Error generando QR:", error);
      setError("Error al generar el código QR");
    } finally {
      setIsLoading(false);
    }
  };

  // Regenerar QR cuando cambian los parámetros
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      generateQR();
    }, 300); // Debounce para evitar regeneraciones excesivas

    return () => clearTimeout(timeoutId);
  }, [text, config]);

  // Generar QR inicial
  useEffect(() => {
    generateQR();
  }, []);

  const handleSetConfig = (data) => {
    setConfig({ ...config, ...data });
  };

  const handleSetText = (data) => {
    setText(data);
  };

  const handleDownloadQR = () => {
    downloadQR({ qrDataUrl, config });
  };

  const handleCopyClipboard = () => {
    copyToClipboard({ qrDataUrl, setCopied, setError });
  };

  return (
    <div className="w-full h-screen sm:h-auto mx-auto flex p-6 bg-gradient-to-br from-blue-50 to-indigo-100 justify-center">
      <div className="bg-white rounded-xl shadow-xl p-8 w-4/5 flex flex-wrap justify-center">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <QrCode className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">
              Generador de Códigos QR
            </h1>
          </div>
          <p className="text-gray-600">
            Crea códigos QR personalizados para textos, URLs y más
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Panel de configuración */}
          <div className="space-y-6 border rounded-lg border-slate-300">
            {/* Entrada de texto */}
            <InputText text={text} handleSetText={handleSetText} />
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Configuración
              </h2>
              <SizeImage config={config} handleSetConfig={handleSetConfig} />

              {/*Permite cambiar el color de fondo del QR */}
              <ColorCode config={config} handleSetConfig={handleSetConfig} />

              <LevelAndMargin
                config={config}
                handleSetConfig={handleSetConfig}
              />
            </div>
          </div>

          {/* Panel de vista previa */}
          <div className="flex flex-col items-center space-y-6 border rounded-lg border-slate-300">
            <div className="bg-gray-50 p-6 rounded-lg w-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Vista Previa
              </h2>

              <div className="flex justify-center mb-4">
                <div className="relative inline-block">
                  {qrDataUrl && (
                    <img
                      src={qrDataUrl}
                      alt="Código QR generado"
                      className="border border-gray-300 rounded-lg shadow-lg max-w-full h-auto"
                      style={{ maxWidth: "320px" }}
                    />
                  )}

                  {isLoading && (
                    <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center rounded-lg">
                      <div className="text-center">
                        <RefreshCw className="w-8 h-8 animate-spin text-blue-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Generando QR...</p>
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="absolute inset-0 bg-red-50 border border-red-300 rounded-lg flex items-center justify-center">
                      <p className="text-red-600 text-sm text-center p-4">
                        {error}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3 justify-center flex-wrap">
                <button
                  onClick={handleDownloadQR}
                  disabled={!qrDataUrl || isLoading}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-105 disabled:hover:scale-100"
                >
                  <Download className="w-5 h-5" />
                  Descargar
                </button>

                <button
                  onClick={handleCopyClipboard}
                  disabled={!qrDataUrl || isLoading}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-105 disabled:hover:scale-100"
                >
                  {copied ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                  {copied ? "¡Copiado!" : "Copiar"}
                </button>
              </div>
            </div>

            {qrDataUrl && <InfoQR config={config} />}
          </div>
        </div>
      </div>
    </div>
  );
}
