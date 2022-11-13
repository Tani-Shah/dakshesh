import './Main.css';
import DisplayCard from './components/DisplayCard';

function Main() {

  const mail = {
    'Gmail': 'https://mail.google.com/mail/',
    'Yahoo': 'http://www.mail.yahoo.com/'
  }

  const news ={
    'Divya Bhaskar': 'http://www.divyabhaskar.co.in/',
    'Gujarat Samachar': 'http://www.gujaratsamachar.com/'
  }
  
  const mutualFunds ={
    'Prudent Corp': 'https://www.prudentcorporate.com/ccd/index.aspx',
    'FundBazar': 'https://www.fundzbazar.com/'
  }

  const shopping ={
    'Amazon': 'https://www.amazon.in/',
    'Flip Kart': 'https://www.flipkart.com/viewcart?otracker=Cart_Icon_Click',
    'Snap Deal': 'http://www.snapdeal.com/',
    'SOUQ': 'https://uae.souq.com/ae-en/auth_portal.php?action=index',
    'Jumia': 'https://www.jumia.ug/'
  }

  const mobiles ={
    '91Mobiles': 'https://www.91mobiles.com/',
    'GSMarena': 'http://www.gsmarena.com/'
  }

  const socialMedia ={
    'You Tube': 'https://www.youtube.com/',
    'Face Book': 'https://www.facebook.com/',
    'Linked In': 'https://www.linkedin.com/',
    'Twitter': 'https://twitter.com/',
    'Google': 'https://google.com/'
  }

  const bank ={
    'Axis Bank': 'https://www.axisbank.co.in/',
    'HDFC Bank': 'https://netbanking.hdfcbank.com/netbanking/',
    'IDFC Bank': 'https://my.idfcbank.com/start',
    'BOB': 'https://www.bobibanking.com/',
    'ICICI Bank': 'https://infinity.icicibank.com/corp/'
  }

  const shares ={
    'Money Control': 'https://www.moneycontrol.com/',
    'Prudent': 'https://www.prudentcorporate.com/brokingt/Login.aspx',
    'Market Hub': 'http://backoffice.markethubonline.com:8091/',
    'Tradebull': 'https://www.tradebulls.in/',
    'BSE': 'https://www.bseindia.com/',
    'ERP': 'http://192.168.9.18:7003/ebiz/faces/ModulePage.jspx'
  }

  return (
    <div style={{height: '100vh', width: '100wh', display:'flex', alignItems: 'center', justifyContent: 'center', backgroundColor:'#333333'}}>
      <div className="container" >
        <div className="row" style={{marginTop: '2vh'}}>
          <div className="col-12">
            <h1 className="text-light bg-dark text-center" style={{height: '10vh', lineHeight: '10vh'}}>Dakshesh Shah - CA</h1>
          </div>
        </div>
        <div className="row" style={{marginTop: '2vh'}}>
          <div className="col-3">
            <DisplayCard title='Mail' data={mail}/>
          </div>
          <div className="col-3">
            <DisplayCard title='News' data={news}/>
          </div>
          <div className="col-3">
            <DisplayCard title='Mutual Funds' data={mutualFunds}/>
          </div>
          <div className="col-3">
            <DisplayCard title='Mobiles' data={mobiles}/>
          </div>
        </div>
        <div className="row" style={{marginTop: '2vh'}}>
          <div className="col-3">
            <DisplayCard title='Banks' data={bank}/>
          </div>
          <div className="col-3">
            <DisplayCard title='Share Market' data={shares}/>
          </div>
          <div className="col-3">
            <DisplayCard title='Shopping' data={shopping}/>
          </div>
          <div className="col-3">
            <DisplayCard title='Social Media' data={socialMedia}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
