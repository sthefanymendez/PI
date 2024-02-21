import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Page = () => {
  const location = useLocation();
  const history = useHistory();

  const [page, setPage] = useState(1);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get('page')) || 1;
    setPage(currentPage);

    // Realizar alguna acción con la página, por ejemplo, cargar datos basados en la página.
  }, [location.search]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= 8) {
      setPage(newPage);
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('page', newPage);
      history.push({ search: searchParams.toString().replace(/%2C/g, ',') });
    }
  };

  return (
    <div>
      <p>Page Component</p>
      <button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
        {"<"}
      </button>
      <button>{page}</button>
      <button disabled={page === 8} onClick={() => handlePageChange(page + 1)}>
        {">"}
      </button>
    </div>
  );
};

export default Page;