import axios from 'axios'

const API = axios.create({ baseURL:'http://localhost:4002/api/v1/user/'})


//Auth
export const signup = (formData) => API.post('/signup',formData) 
export const signin = (formData) => API.post('/signin',formData) 
// export const sendotp = (formData) => API.post('/sendotp',formData) 
export const verifyotp = (formData) => API.post('/verifyotp',formData) 
export const googlesign = (formData) => API.post('/googlesign',formData) 

//Jobs
export const getAllJobs = () => API.get('/getjobs')
export const getFeaturedJobs = () => API.get('/getfeaturedjobs')
export const getCompanyJobs = (id) => API.get(`/company-jobs/${id}`)
export const applyForJob = (dataObj) => API.post('/applyjob',dataObj)
export const getUserAppliedJobs = (id) => API.get(`/user-applied-jobs/${id}`)


//Company
export const getCompanyDetails = (id) => API.get(`/getcompany/${id}`)
export const getAllCompanies = () => API.get(`/companies`)

