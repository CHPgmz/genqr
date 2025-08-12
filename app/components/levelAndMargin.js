export const LevelAndMargin = ({ config, handleSetConfig }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Corrección de errores
        </label>
        <select
          value={config.errorCorrectionLevel}
          onChange={(e) => handleSetConfig({ errorCorrectionLevel: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all text-gray-500"
        >
          <option value="L">Bajo - 7% (más datos)</option>
          <option value="M">Medio - 15% (balanceado)</option>
          <option value="Q">Alto - 25% (recomendado)</option>
          <option value="H">Muy Alto - 30% (más robusto)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Margen: {config.margin}px
        </label>
        <input
          type="range"
          min="0"
          max="20"
          value={config.margin}
          onChange={(e) => handleSetConfig({ margin: parseInt(e.target.value) })}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0px</span>
          <span>20px</span>
        </div>
      </div>
    </div>

  )
}
