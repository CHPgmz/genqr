export const InputText = (props) => {
  const { text, handleSetText } = props;
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Contenido</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Texto o URL
        </label>
        <textarea
          value={text}
          onChange={(e) => handleSetText(e.target.value)}
          placeholder="Ingresa el texto, URL, email, teléfono..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all text-gray-500 h-2/3"
          rows={4}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Caracteres: {text.length}</span>
          <span className={text.length > 1000 ? 'text-red-500' : ''}>
            Máximo recomendado: 1000
          </span>
        </div>
      </div>
    </div>

  )
}
