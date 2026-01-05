import './Main.css';
import DisplayCard from './components/DisplayCard';

function Main() {
  const mail = {
    Gmail: 'https://mail.google.com/mail/',
    Yahoo: 'http://www.mail.yahoo.com/',
  };

  const shopping = {
    Amazon: 'https://www.amazon.in/',
    Flipkart: 'https://www.flipkart.com/viewcart?otracker=Cart_Icon_Click',
  };

  const mobiles = {
    '91Mobiles': 'https://www.91mobiles.com/',
    GSMarena: 'http://www.gsmarena.com/',
  };

  const naturalGas = {
    'Pivotal Weather (GFS)': 'https://www.pivotalweather.com/model.php?m=gfs&p=sfct_anom-imp&rh=2025111412&fh=210&r=conus&dpdt=&mc=',
    'EIA Report': 'https://ir.eia.gov/ngs/ngs.html',
    'Baker Rig Count': 'https://rigcount.bakerhughes.com/na-rig-count',
  };

  const bank = {
    'Axis Bank': 'https://omni.axis.bank.in/axisretailbanking/',
    'HDFC Bank': 'https://now.hdfc.bank.in/',
    'IDFC Bank': 'https://my.idfcbank.com/start',
    BOB: 'https://bobibanking.bankofbaroda.bank.in/',
    'ICICI Bank': 'https://retailnetbanking.icici.bank.in/login-page',
    'BOB - UG': 'https://intl.bobibanking.com/intl/uganda/uganda.htm',
  };

  const markets = {
    'Money Control': 'https://www.moneycontrol.com/',
    'Trading View': 'https://www.tradingview.com/chart/HttygHgU/?symbol=NYMEX%3ANG1%21',
    Dhan: 'https://tv.dhan.co/',
    'Dhan Options Trader': 'https://options-trader.dhan.co/home',
    IIFL: 'https://www.indiainfoline.com/',
    Zerodha: 'https://kite.zerodha.com/',
    'Angel One': 'https://www.angelone.in/',
    Shoonya: 'https://shoonya.finvasia.com/',
  };

  const socialMedia = {
    'You Tube': 'https://www.youtube.com/',
    'Face Book': 'https://www.facebook.com/',
    'Linked In': 'https://www.linkedin.com/',
    Twitter: 'https://twitter.com/',
    Google: 'https://google.com/',
  };

  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-12">
            <h1
              className="text-light bg-dark text-center"
              style={{ height: '64px', lineHeight: '64px' }}
            >
              Dakshesh Shah - CA
            </h1>
          </div>
        </div>

        {/* Main layout */}
        <div className="row g-2 mt-1 align-items-stretch">
          {/* Markets column */}
          <div className="col-12 col-lg-3 d-flex">
            <DisplayCard title="Markets" data={markets} />
          </div>

          {/* Right side: 2 rows grid */}
          <div className="col-12 col-lg-9">
            <div className="row g-2">
              <div className="col-12 col-md-6 col-lg-4 d-flex">
                <DisplayCard title="Mail" data={mail} />
              </div>

              <div className="col-12 col-md-6 col-lg-4 d-flex">
                <DisplayCard title="Natural Gas" data={naturalGas} />
              </div>

              <div className="col-12 col-md-6 col-lg-4 d-flex">
                <DisplayCard title="Mobiles" data={mobiles} />
              </div>

              <div className="col-12 col-md-6 col-lg-4 d-flex">
                <DisplayCard title="Shopping" data={shopping} />
              </div>

              <div className="col-12 col-md-6 col-lg-4 d-flex">
                <DisplayCard title="Banks" data={bank} />
              </div>

              <div className="col-12 col-md-6 col-lg-4 d-flex">
                <DisplayCard title="Social Media" data={socialMedia} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
