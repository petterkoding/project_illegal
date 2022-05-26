const Footer = () => {
  return (
    <footer className="h-auto py-4 bg-illegalGreen text-white">
      <div className="max-w-7xl mx-auto h-full px-4 py-10">
        <div className="text-white text-3xl font-Koulen mb-1">illegal burger</div>
        <span className="text-sm text-illegalBlack font-Noto block mb-6">@illegaburger</span>

        <span className="font-bold text-white font-Noto uppercase">Restauranter</span>
        <div className="mt-1">
          <address>
            <div className="font-Noto text-md text-white">Olaf Ryes plass 4</div>
            <div className="font-Roboto text-md text-white tracking-wider">21 90 19 19</div>
          </address>
        </div>

        <div className="mt-4">
          <address>
            <div className="font-Noto text-md text-white">Møllergata 23</div>
            <div className="font-Roboto text-md text-white tracking-wider">22 20 33 02</div>
          </address>
        </div>
      </div>
    </footer>
  )
}

export default Footer