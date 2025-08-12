export const InfoQR = ({ config }) => {
  return (
    <>
      <div className="bg-blue-50 p-4 rounded-lg w-3/4 m-auto">
        <h3 className="font-medium text-blue-800 mb-2 text-center">
          Información del QR
        </h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 text-sm text-blue-700 w-2/3 content-center items-center m-auto">
          <div>
            Dimensiones: {config?.size}×{config?.size}px
          </div>
          <div>Formato: {config?.format}</div>
          <div>Margen: {config?.margin}px</div>
          <div>Corrección: {config?.errorCorrectionLevel}</div>
        </div>
      </div>
    </>
  );
};
