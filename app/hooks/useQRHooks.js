export const useQRHooks = () => {
  const downloadQR = ({ qrDataUrl, config }) => {
    if (!qrDataUrl) return;

    const link = document.createElement('a');
    const fileName = `qrcode-${Date.now()}.${config.format}`;
    link.download = fileName;
    link.href = qrDataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Función para copiar al portapapeles
  const copyToClipboard = async ({ qrDataUrl, setCopied, setError }) => {
    if (!qrDataUrl) return;

    try {
      const response = await fetch(qrDataUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob })
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error copiando al portapapeles:', err);
      // Fallback: copiar la URL del data
      try {
        await navigator.clipboard.writeText(qrDataUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        setError('No se pudo copiar al portapapeles');
      }
    }
  };

  return {
    downloadQR,
    copyToClipboard
  }
}
