import axios from 'axios'

// const API = axios.create({ baseURL:process.env.REACT_APP_PRODUCTION_BASE_URL })
const API = axios.create({ baseURL:process.env.REACT_APP_DEV_BASE_URL})


//Auth
export const signup = (formData) => API.post('/signup',formData) 
export const signin = (formData) => API.post('/signin',formData) 
export const verifyotp = (formData) => API.post('/verifyotp',formData) 
export const googlesign = (formData) => API.post('/googlesign',formData) 
export const forgotPassword = (formData) => API.post('/forgot-password',formData) 
export const ForgotverifyOtp = (formData) => API.post('/forgot-otp-verify',formData) 

//User
export const getUserDetails = (id) => API.get(`/get-user/${id}`)
export const getTaskOfUser = (id) => API.get(`/tasks/${id}`)

//Jobs
export const getAllJobs = () => API.get('/getjobs')
export const getFeaturedJobs = () => API.get('/getfeaturedjobs')
export const getCompanyJobs = (id) => API.get(`/company-jobs/${id}`)
export const applyForJob = (dataObj,id) => API.post(`/applyjob/${id}`,dataObj , {headers : { "Content-Type": "multipart/form-data" } })
export const getUserAppliedJobs = (id) => API.get(`/applied/jobs/details/${id}`)
export const getJobDetailsById = (jobId) => API.get(`/job/details/${jobId}`)

//search
export const doSearch = (keyword) => API.get(`/search/${keyword}`)

//Resume 
export const createResume = (id , formData) => API.post(`/create-resume/${id}` , formData)
//Company
export const getCompanyDetails = (id) => API.get(`/getcompany/${id}`)
export const getAllCompanies = () => API.get(`/companies`)

