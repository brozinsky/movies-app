import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PageBtn } from './PageBtn'

const Pagination = () => {
    const totalPages = useSelector(state => state.movies.popular.total_pages)
    const currentPage = useSelector(state => state.movies.popular.page)

    const [pageBtns, setPageBtns] = useState({
        btn1: currentPage + 1,
        btn2: currentPage + 2,
        btn3: currentPage + 3,
        btn4: currentPage + 4,
    });

    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

    const buttonUpdateUp = () => {
        console.log(currentPage);
        if (currentPage === 1) {
            setIsPrevDisabled(true)
        } else {
            setIsPrevDisabled(true)
        }
        if (currentPage <= pageBtns.btn4 && currentPage !== totalPages) {
            setPageBtns({
                btn1: pageBtns.btn4,
                btn2: pageBtns.btn4 + 1,
                btn3: pageBtns.btn4 + 2,
                btn4: pageBtns.btn4 + 3,
            })
        } else if (currentPage === totalPages) {
            setPageBtns({
                btn1: totalPages - 4,
                btn2: totalPages - 3,
                btn3: totalPages - 2,
                btn4: totalPages - 1,
            })
        }
    }
    const buttonUpdateDown = () => {
        console.log(currentPage);
        console.log(pageBtns.btn1);
        if (pageBtns.btn1 === totalPages) {
            setIsNextDisabled(true);
        }
        if (currentPage <= pageBtns.btn1 && currentPage !== 1) {
            setPageBtns({
                btn1: pageBtns.btn1 - 3,
                btn2: pageBtns.btn1 - 2,
                btn3: pageBtns.btn1 - 1,
                btn4: pageBtns.btn1,
            })
        } else if (currentPage === 1) {
            setPageBtns({
                btn1: 2,
                btn2: 3,
                btn3: 4,
                btn4: 5,
            })
        }
    }

    return (
        <nav className="pages">
            <ul>
                <PageBtn key={'Prev'}
                    id={currentPage - 1}
                    name={'Prev'}
                    isDisabled={isPrevDisabled}
                />
                <li onClick={buttonUpdateDown}
                    className={`pages-li`}>
                    <PageBtn key={totalPages}
                        id={1}
                        name={1} />
                </li>
                <li className={`pages-break`}>...</li>
                <li onClick={buttonUpdateDown}
                    className={`pages-li`}>
                    <PageBtn key={pageBtns.btn1}
                        id={pageBtns.btn1}
                        name={pageBtns.btn1} />
                </li>
                <PageBtn key={pageBtns.btn2}
                    id={pageBtns.btn2}
                    name={pageBtns.btn2} />
                <PageBtn key={pageBtns.btn3}
                    id={pageBtns.btn3}
                    name={pageBtns.btn3} />
                <li onClick={buttonUpdateUp}
                    className={`pages-li`}>
                    <PageBtn key={pageBtns.btn4}
                        id={pageBtns.btn4}
                        name={pageBtns.btn4} />
                </li>
                <li className={`pages-break`}>...</li>
                <li onClick={buttonUpdateUp}
                    className={`pages-li`}>
                    <PageBtn key={totalPages}
                        id={totalPages}
                        name={totalPages} />
                </li>
                <PageBtn key={'Next'}
                    id={currentPage + 1}
                    isDisabled={isNextDisabled}
                    name={'Next'} />
            </ul >
        </nav >
    )
}

export default Pagination
