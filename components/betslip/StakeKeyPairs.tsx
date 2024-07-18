const KeyPairs = ({name, value}: {name: string; value: number;}) => {
  return (
    <div className="*:bg-transparent flex-center justify-between text-xs">
      <p>{name}</p>
      <input type="text" readOnly value={value} className="w-1/2 text-right text-sm"/>
    </div>
  )
}

export default KeyPairs
