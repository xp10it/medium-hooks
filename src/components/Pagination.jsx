import React from 'react';
import {Link} from "react-router-dom";

import {range} from '../utils/utils';

const PaginationItem = ({page, currentPage, url}) => {
    return (
        <li className={currentPage === page ? 'page-item active' : 'page-item'}>
            <Link to={`${url}?page=${page}`} className="page-link">
                {page}
            </Link>
        </li>
    )
}

const Pagination = ({total, limit, url, currentPage}) => {
    const pagesCount = Math.ceil(total / limit);
    const pages = range(1, pagesCount);

    return (
        <ul className="pagination">
            {pages.map(page => (
                <PaginationItem
                    page={page}
                    currentPage={currentPage}
                    url={url}
                    key={page}
                />
            ))}
        </ul>
    );
};

export default Pagination;
