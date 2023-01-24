import {
  arrowDown2,
  auditLogs,
  briefcase1,
  decisionModels,
  fees,
  feesAndPricing,
  guarantors,
  home1,
  karma,
  loanRequests,
  loans,
  organization,
  preferences,
  reports,
  savings,
  savingsProducts,
  serviceAccounts,
  services,
  settlements,
  transactions,
  users,
  whitelist,
} from '../../../assets/Icons';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside>
      <div className='switch'>
        <img src={briefcase1} alt='' />
        <span>Switch Organization</span>
        <img src={arrowDown2} alt='' />
      </div>

      <div>
        <img src={home1} alt='' />
        <span>Dashboard</span>
      </div>

      <p>CUSTOMERS</p>
      <div>
        <img src={users} alt='' />
        <span>Users</span>
      </div>

      <div>
        <img src={guarantors} alt='' />
        <span>Guarantors</span>
      </div>

      <div>
        <img src={loans} alt='' />
        <span>Loans</span>
      </div>

      <div>
        <img src={decisionModels} alt='' />
        <span>Decision Models</span>
      </div>

      <div>
        <img src={savings} alt='' />
        <span>Savings</span>
      </div>

      <div>
        <img src={loanRequests} alt='' />
        <span>Loan Requests</span>
      </div>

      <div>
        <img src={whitelist} alt='' />
        <span>Whitelist</span>
      </div>

      <div>
        <img src={karma} alt='' />
        <span>Karma</span>
      </div>

      <p>BUSINESSES</p>
      <div>
        <img src={organization} alt='' />
        <span>Organization</span>
      </div>

      <div>
        <img src={loanRequests} alt='' />
        <span>Loan Products</span>
      </div>

      <div>
        <img src={savingsProducts} alt='' />
        <span>Savings Products</span>
      </div>

      <div>
        <img src={fees} alt='' />
        <span>Fees and Charges</span>
      </div>

      <div>
        <img src={transactions} alt='' />
        <span>Transactions</span>
      </div>

      <div>
        <img src={services} alt='' />
        <span>Services</span>
      </div>

      <div>
        <img src={serviceAccounts} alt='' />
        <span>Service Account</span>
      </div>

      <div>
        <img src={settlements} alt='' />
        <span>Settlements</span>
      </div>

      <div>
        <img src={reports} alt='' />
        <span>Reports</span>
      </div>

      <p>SETTINGS</p>
      <div>
        <img src={preferences} alt='' />
        <span>Preferences</span>
      </div>

      <div>
        <img src={feesAndPricing} alt='' />
        <span>Fees and Pricing</span>
      </div>

      <div>
        <img src={auditLogs} alt='' />
        <span>Audit Logs</span>
      </div>
    </aside>
  );
};

export default Sidebar;
