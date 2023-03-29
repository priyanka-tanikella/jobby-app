import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'

import Cookies from 'js-cookie'

import SimilarJobCard from '../SimilarJobCard'

import Header from '../Header'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobItemDetails extends Component {
  state = {
    jobData: {},
    skillsList: [],
    similarJobsList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getJobData()
  }

  getJobData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    const data = await response.json()

    console.log(data)
    if (response.ok === true) {
      const updatedData = {
        companyLogoUrl: data.job_details.company_logo_url,
        employmentType: data.job_details.employment_type,
        companyWebsiteUrl: data.job_details.company_website_url,
        id: data.job_details.id,
        jobDescription: data.job_details.job_description,
        location: data.job_details.location,
        rating: data.job_details.rating,
        title: data.job_details.title,
        packagePerAnnum: data.job_details.package_per_annum,
        description: data.job_details.life_at_company.description,
        imageUrl: data.job_details.life_at_company.image_url,
      }

      const skills = data.job_details.skills.map(eachSkill => ({
        imageUrl: eachSkill.image_url,
        name: eachSkill.name,
      }))

      const similarJobs = data.similar_jobs.map(job => ({
        companyLogoUrl: job.company_logo_url,
        employmentType: job.employment_type,
        id: job.id,
        jobDescription: job.job_description,
        location: job.location,
        rating: job.rating,
        title: job.title,
      }))

      this.setState({
        jobData: updatedData,
        skillsList: skills,
        similarJobsList: similarJobs,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderJobsDetailsView = () => {
    const {jobData, skillsList, similarJobsList} = this.state
    const {
      companyLogoUrl,
      jobDescription,
      location,
      rating,
      title,
      employmentType,
      packagePerAnnum,
      companyWebsiteUrl,
      imageUrl,
      description,
    } = jobData
    return (
      <div className="job-details-container">
        <div className="product-card-container">
          <div className="company-logo-and-employment-type">
            <img
              src={companyLogoUrl}
              alt="job details company logo"
              className="company-logo"
            />
            <div className="title-and-rating">
              <p className="job-title">{title} </p>
              <div className="star-rating">
                <AiFillStar color="gold" />
                <p className="rating">{rating}</p>
              </div>
            </div>
          </div>
          <div className="some-details">
            <div className="location-and-employment">
              <div className="location-container">
                <MdLocationOn color="white" />
                <p className="location">{location} </p>
              </div>
              <div className="employment-type">
                <MdLocationOn color="white" />
                <p className="employment-type">{employmentType} </p>
              </div>
            </div>
            <div>
              <p className="package">{packagePerAnnum} </p>
            </div>
          </div>
          <hr />
          <div className="description-and-website-url">
            <h1 className="description-heading">Description</h1>
            <a className="website-link" href={companyWebsiteUrl}>
              Visit{' '}
            </a>
          </div>
          <p className="description">{jobDescription} </p>
          <h1 className="skills-heading">Skills</h1>
          <div className="skills-container">
            <ul>
              {skillsList.map(eachSkill => (
                <li className="list-item" key={eachSkill.name}>
                  <div className="skill">
                    <img
                      src={eachSkill.imageUrl}
                      alt={eachSkill.name}
                      className="skill-img"
                    />
                    <p className="skill-name">{eachSkill.name} </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <h1 className="life-at-company-heading">Life at Company</h1>
          <div className="life-at-company-container">
            <p className="life-at-company-description">{description} </p>
            <img
              src={imageUrl}
              alt="life at company"
              className="life-at-company=img"
            />
          </div>
        </div>
        <h1 className="similar-jobs">Similar Jobs </h1>
        <div className="similar-jobs-container">
          <ul className="similar-list-container">
            {similarJobsList.map(eachJob => (
              <SimilarJobCard similarJobDetails={eachJob} key={eachJob.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onClickRetry = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    const data = await response.json()

    console.log(data)
    if (response.ok === true) {
      const updatedData = {
        companyLogoUrl: data.job_details.company_logo_url,
        employmentType: data.job_details.employment_type,
        companyWebsiteUrl: data.job_details.company_website_url,
        id: data.job_details.id,
        jobDescription: data.job_details.job_description,
        location: data.job_details.location,
        rating: data.job_details.rating,
        title: data.job_details.title,
        packagePerAnnum: data.job_details.package_per_annum,
        description: data.job_details.life_at_company.description,
        imageUrl: data.job_details.life_at_company.image_url,
      }

      const skills = data.job_details.skills.map(eachSkill => ({
        imageUrl: eachSkill.image_url,
        name: eachSkill.name,
      }))

      const similarJobs = data.similar_jobs.map(job => ({
        companyLogoUrl: job.company_logo_url,
        employmentType: job.employment_type,
        id: job.id,
        jobDescription: job.job_description,
        location: job.location,
        rating: job.rating,
        title: job.title,
      }))

      this.setState({
        jobData: updatedData,
        skillsList: skills,
        similarJobsList: similarJobs,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = () => (
    <div className="jobs-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="jobs-failure-img"
      />
      <h1 className="jobs-failure-heading-text">Oops! Something Went Wrong</h1>
      <p className="jobs-failure-description">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        className="retry-button"
        type="button"
        onClick={this.onClickRetry}
      >
        Retry
      </button>
    </div>
  )

  renderAllJobDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {jobData, similarJobsList} = this.state
    console.log(jobData)

    console.log(similarJobsList)
    return (
      <>
        <Header />
        <div className="job-details">{this.renderAllJobDetails()}</div>
      </>
    )
  }
}
export default JobItemDetails
