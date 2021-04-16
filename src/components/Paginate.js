import React from 'react';

const Paginate = ({ page, total, setPage }) => {

return (<div className="paginate">
       {(page !== 1) &&
        <h4 className="paginate__arrow__R" onClick={() => setPage(page - 1)}>←</h4>}
        <p className="paginate__tally">page {page} of {total}</p>
       {(page !== total) &&
        <h4 className="paginate__arrow__L" onClick={() => setPage(page + 1)}>→</h4>}
    </div>);
}
  
export default Paginate;