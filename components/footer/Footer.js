const Footer = () => {
  return (
    <footer className="h-auto py-4 bg-illegalGreen text-white">
      <div className="max-w-7xl mx-auto h-full px-4 py-10">
        <div className="text-white text-3xl font-Koulen mb-1">illegal burger</div>
        <span className="text-lg text-illegalBlack font-Noto block mb-6">@illegaburger</span>

        <span className="font-bold text-white">Restauranter</span>
        <div className="mt-1">
          <address>
            <div>Olaf Ryes plass 4</div>
            <div>21 90 19 19</div>
          </address>
        </div>

        <div className="mt-4">
          <address>
            <div>Møllergata 23</div>
            <div>22 20 33 02</div>
          </address>
        </div>
      </div>
    </footer>
  )
}

export default Footer