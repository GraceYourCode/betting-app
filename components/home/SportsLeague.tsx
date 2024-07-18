interface leagueProps {
  country: string;
  leagueName: string;
  leagueKey?: string;
  cssClass?: string;
  setLeague: () => void
}


const League: React.FC<leagueProps> = ({country, leagueName, cssClass, setLeague}) => {
  return (
    <div className={`bg-gray-100 min-w-32 py-4 pl-4 text-xs cursor-pointer border hover:border-sky-600 hover:border-2 ${cssClass}`} onClick={setLeague}>
      <p>{country}</p>
      <p className="font-semibold">{leagueName}</p>
    </div>
  )
}

export default League
