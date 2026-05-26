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
              <div>© 2010 - 2025, Zerodha Broking Ltd.</div>
              <div>All rights reserved.</div>
            </div>
            {/* Social icons row 1 */}
            <div className="flex gap-6 mt-4 text-2xl text-gray-500">
              <i className="fa-brands fa-x-twitter hover:text-[#387ed1] cursor-pointer"></i>
              <i className="fa-brands fa-facebook-f hover:text-[#387ed1] cursor-pointer"></i>
              <i className="fa-brands fa-instagram hover:text-[#387ed1] cursor-pointer"></i>
              <i className="fa-brands fa-linkedin-in hover:text-[#387ed1] cursor-pointer"></i>
            </div>
            <hr className='w-[80%] text-gray-200' />
            {/* Social icons row 2 */}
            <div className="flex gap-6 mt-0 text-2xl text-gray-400">
              <i className="fa-brands fa-youtube hover:text-[#387ed1] cursor-pointer"></i>
              <i className="fa-brands fa-whatsapp hover:text-[#387ed1] cursor-pointer"></i>
              <i className="fa-brands fa-telegram hover:text-[#387ed1] cursor-pointer"></i>
            </div>
          </div>
          {/* Center: Links */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Account</h3>
              <ul className="space-y-2">
                <li>Open demat account</li>
                <li>Minor demat account</li>
                <li>NRI demat account</li>
                <li>Commodity</li>
                <li>Dematerialisation</li>
                <li>Fund transfer</li>
                <li>MTF</li>
                <li>Referral program</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
              <ul className="space-y-2">
                <li>Contact us</li>
                <li><Link href="/support" className="hover:text-[#387ed1] transition-colors">Support portal</Link></li>
                <li>How to file a complaint?</li>
                <li>Status of your complaints</li>
                <li>Bulletin</li>
                <li>Circular</li>
                <li>Z-Connect blog</li>
                <li>Downloads</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-[#387ed1] transition-colors">About</Link></li>
                <li>Philosophy</li>
                <li>Press & media</li>
                <li>Careers</li>
                <li>Zerodha Cares (CSR)</li>
                <li>Zerodha.tech</li>
                <li>Open source</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quick links</h3>
              <ul className="space-y-2">
                <li>Upcoming IPOs</li>
                <li><Link href="/pricing" className="hover:text-[#387ed1] transition-colors">Brokerage charges</Link></li>
                <li>Market holidays</li>
                <li>Economic calendar</li>
                <li>Calculators</li>
                <li>Markets</li>
                <li>Sectors</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="my-8 border-gray-200" />
        {/* Legal and info text */}
        <div className="text-xs text-gray-500 space-y-2">
          <div>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com" className="text-blue-600">complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com" className="text-blue-600">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </div>
          <div>
            Procedure to file a complaint on <a href="#" className="text-blue-600">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </div>
          <div>
            <a href="#" className="text-blue-600">Smart Online Dispute Resolution</a> | <a href="#" className="text-blue-600">Grievances Redressal Mechanism</a>
          </div>
          <div>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </div>
          <div>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </div>
          <div>
            India's largest broker based on networth as per NSE. <a href="#" className="text-blue-600">NSE broker factsheet</a>
          </div>
          <div>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="#" className="text-blue-600">create a ticket here</a>.
          </div>
          <div>
            *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
          </div>
        </div>
        {/* Bottom nav */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 text-gray-400 font-medium text-sm">
          <span>NSE</span>
          <span>BSE</span>
          <span>MCX</span>
          <span>Terms & conditions</span>
          <span>Policies & procedures</span>
          <span>Privacy policy</span>
          <span>Disclosure</span>
          <span>For investor's attention</span>
          <span>Investor charter</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;