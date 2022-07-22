import React from 'react';

const Paginate = ({ page, total, setPage }) => {

return (<div className="paginate">
       {(page !== 1) &&
        <h4 className="paginate-left" onClick={() => setPage(page - 1)}>←</h4>}
        <p>page {page} of {total}</p>
       {(page !== total) &&
        <h4 className="paginate-right" onClick={() => setPage(page + 1)}>→</h4>}
    </div>);
}
  
export default Paginate;