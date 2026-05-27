import React from 'react'
import Link from '@/routing/Link'

const Footer = () => {
  return (
    <footer className="bg-[#fcfcfc] border-t border-gray-200 pt-10 pb-2 text-gray-700 text-sm">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left: Logo and copyright */}
          <div className="md:w-1/4 flex flex-col gap-4 mb-8 md:mb-0">
            <div className="flex items-center gap-2">
              <img src="/assets/images/logo.svg" alt="Zerodha Logo" className="w-[60%] h-6" />
            </div>
            <div className="text-gray-600 mt-2">
              <div>© 2010 - 2026, Zerodha Broking Ltd.</div>
              <div>All rights reserved.</div>
            </div>
            {/* Social icons row 1 */}
            <div className="flex gap-6 mt-4 text-2xl text-gray-500">
              <a href='https://x.com/zerodha'><i className="fa-brands fa-x-twitter hover:text-[#387ed1]"></i></a>
              <a href='https://facebook.com/zerodha.social'><i className="fa-brands fa-facebook-f hover:text-[#387ed1]"></i></a>
              <a href='https://instagram.com/zerodhaonline/'><i className="fa-brands fa-instagram hover:text-[#387ed1]"></i></a>
              <a href='https://linkedin.com/company/zerodha'><i className="fa-brands fa-linkedin-in hover:text-[#387ed1]"></i></a>
            </div>
            <hr className='w-[80%] text-gray-200' />
            {/* Social icons row 2 */}
            <div className="flex gap-6 mt-0 text-2xl text-gray-400">
              <a href='https://www.youtube.com/@zerodhaonline'><i className="fa-brands fa-youtube hover:text-[#387ed1]"></i></a>
              <a href='https://whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g'><i className="fa-brands fa-whatsapp hover:text-[#387ed1]"></i></a>
              <a href='https://t.me/zerodhain'><i className="fa-brands fa-telegram hover:text-[#387ed1]"></i></a>
            </div>
          </div>
          {/* Center: Links */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Account</h3>
              <ul className="space-y-2">
                <li><a href='https://zerodha.com/open-account/' className="hover:text-[#387ed1] transition-colors">Open demat account</a></li>
                <li><a href='https://zerodha.com/open-account/minor/' className="hover:text-[#387ed1] transition-colors">Minor demat account</a></li>
                <li><a href='https://zerodha.com/open-account/nri/' className="hover:text-[#387ed1] transition-colors">NRI demat account</a></li>
                <li><a href='https://zerodha.com/open-account/huf/' className="hover:text-[#387ed1] transition-colors">HUF demat account</a></li>
                <li><a href='https://zerodha.com/commodities/' className="hover:text-[#387ed1] transition-colors">Commodity</a></li>
                <li><a href='https://zerodha.com/dematerialise/' className="hover:text-[#387ed1] transition-colors">Dematerialisation</a></li>
                <li><a href='https://zerodha.com/fund-transfer/' className="hover:text-[#387ed1] transition-colors">Fund transfer</a></li>
                <li><a href='https://zerodha.com/mtf/' className="hover:text-[#387ed1] transition-colors">MTF</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
              <ul className="space-y-2">
                <li><a href='https://zerodha.com/contact/' className="hover:text-[#387ed1] transition-colors">Contact us</a></li>
                <li><Link href="/support" className="hover:text-[#387ed1] transition-colors">Support portal</Link></li>
                <li><a href='https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-create-a-ticket-at-zerodha' className="hover:text-[#387ed1] transition-colors">How to file a complaint?</a></li>
                <li><a href='https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/track-complaints-or-tickets' className="hover:text-[#387ed1] transition-colors">Status of your complaints</a></li>
                <li><a href='https://zerodha.com/marketintel/bulletin/' className="hover:text-[#387ed1] transition-colors">Bulletin</a></li>
                <li><a href='https://zerodha.com/marketintel/circulars/' className="hover:text-[#387ed1] transition-colors">Circular</a></li>
                <li><a href='https://zerodha.com/z-connect/' className="hover:text-[#387ed1] transition-colors">Z-Connect blog</a></li>
                <li><a href='https://zerodha.com/resources/' className="hover:text-[#387ed1] transition-colors">Downloads</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-[#387ed1] transition-colors">About</Link></li>
                <li><a href='https://zerodha.com/about/philosophy/' className="hover:text-[#387ed1] transition-colors">Philosophy</a></li>
                <li><a href='https://zerodha.com/media/' className="hover:text-[#387ed1] transition-colors">Press & media</a></li>
                <li><a href='https://careers.zerodha.com/' className="hover:text-[#387ed1] transition-colors">Careers</a></li>
                <li><a href='https://zerodha.com/cares/' className="hover:text-[#387ed1] transition-colors">Zerodha Cares (CSR)</a></li>
                <li><a href='https://zerodha.tech/' className="hover:text-[#387ed1] transition-colors">Zerodha.tech</a></li>
                <li><a href='https://zerodha.com/open-source/' className="hover:text-[#387ed1] transition-colors">Open source</a></li>
                <li><a href='https://zerodha.com/refer/' className="hover:text-[#387ed1] transition-colors">Referral program</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quick links</h3>
              <ul className="space-y-2">
                <li><a href='https://zerodha.com/ipo/'>Upcoming IPOs</a></li>
                <li><Link href="/pricing" className="hover:text-[#387ed1] transition-colors">Brokerage charges</Link></li>
                <li><a href='https://zerodha.com/marketintel/holiday-calendar/' className="hover:text-[#387ed1] transition-colors">Market holidays</a></li>
                <li><a href='https://zerodha.com/markets/calendar/' className="hover:text-[#387ed1] transition-colors">Economic calendar</a></li>
                <li><a href='https://zerodha.com/calculators/' className="hover:text-[#387ed1] transition-colors">Calculators</a></li>
                <li><a href='https://zerodha.com/markets/stocks/' className="hover:text-[#387ed1] transition-colors">Markets</a></li>
                <li><a href='https://zerodha.com/markets/sector/' className="hover:text-[#387ed1] transition-colors">Sectors</a></li>
                <li><a href='https://zerodha.com/market/giftnifty/' className="hover:text-[#387ed1] transition-colors">Gift Nifty</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="my-8 border-gray-200" />
        {/* Legal and info text */}
        <div className="text-xs text-gray-500 space-y-2">
          <div>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com" className="text-blue-600">complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com" className="text-blue-600">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </div>
          <div>
            Procedure to file a complaint on <a href="https://scores.sebi.gov.in/" className="text-blue-600">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </div>
          <div>
            <a href="https://smartodr.in/" className="text-blue-600">Smart Online Dispute Resolution</a> | <a href="https://zerodha-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/Smart%20ODR%20info.pdf" className="text-blue-600">Grievances Redressal Mechanism</a>
          </div>
          <div>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </div>
          <div>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </div>
          <div>
            India's largest broker based on networth as per NSE. <a href="https://enit.nseindia.com/MemDirWeb/brokerDetailPage_Beta?memID=2516&h_MemType=members&memName=ZERODHA%20BROKING%20LIMITED" className="text-blue-600">NSE broker factsheet</a>
          </div>
          <div>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-place-a-complaint-at-zerodha" className="text-blue-600">create a ticket here</a>.
          </div>
          <div>
            *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
          </div>
          <div>
            Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
          </div>
        </div>
        {/* Bottom nav */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-3 text-gray-400 font-medium text-sm">
          <span><a href='https://nseindia.com/' className="hover:text-[#387ed1] transition-colors">NSE</a></span>
          <span><a href='https://www.bseindia.com/' className="hover:text-[#387ed1] transition-colors">BSE</a></span>
          <span><a href='https://www.mcxindia.com/' className="hover:text-[#387ed1] transition-colors">MCX</a></span>
          <span><a href='https://zerodha.com/terms-and-conditions/' className="hover:text-[#387ed1] transition-colors">Terms & conditions</a></span>
          <span><a href='https://zerodha.com/policies-and-procedures/' className="hover:text-[#387ed1] transition-colors">Policies & procedures</a></span>
          <span><a href='https://zerodha.com/privacy-policy/' className="hover:text-[#387ed1] transition-colors">Privacy policy</a></span>
          <span><a href='https://zerodha.com/disclosure/' className="hover:text-[#387ed1] transition-colors">Disclosure</a></span>
          <span><a href='https://zerodha.com/investor-attention/' className="hover:text-[#387ed1] transition-colors">For investor's attention</a></span>
          <span><a href='https://zerodha.com/tos/investor-charter/' className="hover:text-[#387ed1] transition-colors">Investor charter</a></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;