export const SizeImage = (config, handleSetConfig) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tamaño
        </label>
        <select
          value={config.size}
          onChange={(e) => handleSetConfig({ size: parseInt(e.target.value) })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all text-gray-500"
        >
          <option value={128}>128x128 px</option>
          <option value={256}>256x256 px</option>
          <option value={512}>512x512 px</option>
          <option value={1024}>1024x1024 px</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Formato
        </label>
        <select
          value={config.format}
          onChange={(e) => handleSetConfig({ format: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all text-gray-500"
        >
          <option value="png">PNG (sin pérdida)</option>
          <option value="jpeg">JPEG (menor tamaño)</option>
        </select>
      </div>
    </div>

  )
}
