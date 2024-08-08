import { useState } from "react";

function TableFooter({ totalData, currentPage, fetchData, totalPage }) {

    return (
        <div className="relative overflow-hidden bg-theme3 rounded-b-lg mx-1">
            <nav className="flex items-center justify-between p-5 md:flex-row"
                aria-label="Table navigation">
                <span className="font-normal text-gray-300 text-sm">Showing
                    <span className="font-semibold text-gray-50 "> 1-10</span> of
                    <span className="font-semibold text-gray-50 "> {totalData}</span>
                </span>
                <ul className="inline-flex text-sm">
                    <li>
                        <button type="button" onClick={() => fetchData(currentPage - 1)}
                            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-300 bg-theme3 rounded-l-lg border border-gray-300 enabled:hover:bg-theme-light hover:text-white" disabled={currentPage == 1 ? true : false}>
                            <span className="sr-only">Previous</span>
                            <ion-icon name="chevron-back" size="small"></ion-icon>
                            PREV
                        </button>
                    </li>

                    <li>
                        <button type="button" onClick={() => fetchData(currentPage + 1)}
                            className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-300 bg-theme3 rounded-r-lg border border-gray-300 enabled:hover:bg-theme-light hover:text-white " disabled={currentPage == totalPage ? true : false}>
                            <span className="sr-only">Next</span>
                            NEXT
                            <ion-icon name="chevron-forward" size="small"></ion-icon>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default TableFooter;