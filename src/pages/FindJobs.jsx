import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import { Icon } from '@iconify/react';
import JobCard from '../components/JobCard/JobCard';
import SmallCompanyCard from '../components/company/SmallCompanyCard';
import PostJob from '../components/postJob/PostJob';
import Footer from '../components/footer/Footer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllJobs } from '../actions/jobs';
import ReactPaginate from 'react-paginate';
import { getAllCompanies } from '../actions/company';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { search } from '../actions/user';

const FindJobs = () => {

    const dispatch = useDispatch()
    const company = useSelector(state => state.company)
    const jobs = useSelector(state => state.job)
    const [pageNumber, setPageNumber] = useState(0)
    const [loading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [Refresh, setRefresh] = useState(false);


    const jobsPerPage = 8;
    const pagesVisited = pageNumber * jobsPerPage
    const pageCount = Math.ceil(jobs.length / jobsPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    
    useEffect(() => {
        dispatch(getAllJobs(setLoading))
        dispatch(getAllCompanies(setLoading))
    }, [Refresh])

    if(loading) {
        return <LoadingSpinner />
    }

    const handleSearch = (e) => {
        e.preventDefault()

        if(e.target.value.trim() == ""){
            return setRefresh(true)
        }

        const keyword = e.target.value

        dispatch(search(keyword))
    }

    return (
        <div>
            <Navbar />
            <div className="container mx-auto w-full h-20 mt-28">
                    <div className="flex justify-center w-full  p-4 items-center">
                        <form className="m-2 w-6/12">
                            <input name='search' onChange={handleSearch} placeholder="Job title, Keywords , Company or Location" className="text-md p-3 outline-0 border-0 h-12 w-full bg-secondary w-full h-14 rounded-lg" type="text" />
                        </form>
                        <div className="w-14 h-14 bg-primary flex items-center justify-center rounded-lg cursor-pointer">
                        <button onClick={handleSearch} type='submit'><Icon icon="akar-icons:search" className="text-white text-xl" /></button>
                        </div>
                    </div>
            </div>

            <div className="h-auto w-screen ">
            <div className="container mx-auto pb-8 mt-12">
                <div className="grid grid-cols-2 gap-4">
                    {jobs.length == 0 ? <div className="w-full text-center text-danger"><p className="text-center">No jobs Available right now, Try again later.</p></div> : <>{jobs.slice(pagesVisited , pagesVisited + jobsPerPage).map((job) =>(
                        <JobCard job={job}/>
                    ))}</>}
                </div>
            </div>
        </div>
        <div className="w-full items-center flex flex-col">
            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName="flex w-1/4 justify-around "
                previousLinkClassName="text-primary"
                nextLinkClassName="text-primary"
                disabledClassName="text-dark"
                activeClassName="px-3 py-1 bg-primary text-white"
                className="m-3 flex w-1/4 justify-around"
            />
        </div>
        <div className="container mx-auto">
            <h5 className="font-semibold text-2xl my-3">Top Companies.</h5>
            <div className="w-full h-20 flex justify-center mt-4">
                {
                    !company?.allCompanies.length == 0 ? <>
                    {
                        company?.allCompanies.map((company) => (
                            <SmallCompanyCard company={company} />
                        ))
                    }

                    </> : <p className='text-danger'>No Companies Found.</p>
                }
            </div>
        </div>
        <div className="mt-60">
            <PostJob />
        </div>
        <Footer />
        </div>
    )
}

export default FindJobs
