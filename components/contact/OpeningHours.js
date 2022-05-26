const OpeningHours = ({regular, fri, sat, sun}) => {
  return (
    <div className="font-Oswald text-illegalBlack uppercase mt-2">
        <h2 className="font-thin uppercase text-lg mb-2">Åpningstider kjøkken:</h2>
        <div className="font-bold text-lg">mandag - torsdag <span className="font-thin">{regular}</span></div>
        <div className="font-bold text-lg inline-block">fredag <span className="font-thin">{fri}</span></div>
        <div className="font-bold text-lg inline-block mx-4">lørdag <span className="font-thin">{sat}</span></div>
        <div className="font-bold text-lg inline-block">søndag <span className="font-thin">{sun}</span></div>
    </div>
  )
}

export default OpeningHours