export const InfoQR = (config) => {
  return (
    <>
      {
        config?.format && (
          <div className="bg-blue-50 p-4 rounded-lg w-full">
            <h3 className="font-medium text-blue-800 mb-2">Información del QR</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-blue-700">
              <div>Dimensiones: {config?.size}×{config?.size}px</div>
              <div>Formato: {config?.format}</div>
              <div>Margen: {config?.margin}px</div>
              <div>Corrección: {config?.errorCorrectionLevel}</div>
            </div>
          </div>
        )
      }
    </>
  )
}
