import './index.css'

import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'

import {Link} from 'react-router-dom'

const JobCard = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    id,
    title,
    packagePerAnnum,
  } = jobData

  return (
    <li className="list-item">
      <Link to={`/jobs/${id}`} className="nav-link">
        <div className="product-card-container">
          <div className="company-logo-and-employment-type">
            <img
              src={companyLogoUrl}
              alt="company logo"
              className="company-logo"
            />
            <div className="title-and-rating">
              <h1 className="job-title">{title} </h1>
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
          <h1 className="description">Description</h1>
          <p className="description">{jobDescription} </p>
        </div>
      </Link>
    </li>
  )
}
export default JobCard
