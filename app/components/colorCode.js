export const ColorCode = (props) => {
  const { config, handleSetConfig } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Color del código
        </label>
        <div className="flex items-center gap-3">
          <input
            type="color"
            value={config.darkColor}
            onChange={(e) => handleSetConfig({ darkColor: e.target.value })}
            className="w-14 h-12 border border-gray-300 rounded-lg cursor-pointer text-gray-500"
          />
          <input
            type="text"
            value={config.darkColor}
            onChange={(e) => handleSetConfig({ darkColor: e.target.value })}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 font-mono text-sm text-gray-500"
            placeholder="#000000"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Color de fondo
        </label>
        <div className="flex items-center gap-3">
          <input
            type="color"
            value={config.lightColor}
            onChange={(e) => handleSetConfig({ lightColor: e.target.value })}
            className="w-14 h-12 border border-gray-300 rounded-lg cursor-pointer"
          />
          <input
            type="text"
            value={config.lightColor}
            onChange={(e) => handleSetConfig({ lightColor: e.target.value })}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 font-mono text-sm text-gray-500"
            placeholder="#ffffff"
          />
        </div>
      </div>
    </div>

  )
}
