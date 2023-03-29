import './index.css'

import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'

const SimilarJobCard = props => {
  const {similarJobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = similarJobDetails

  return (
    <li className="list-item">
      <div className="product-card-container">
        <div className="company-logo-and-employment-type">
          <img
            src={companyLogoUrl}
            alt="similar job company logo"
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
        <h1 className="description">Description</h1>
        <p className="description-theory">{jobDescription} </p>
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
      </div>
    </li>
  )
}
export default SimilarJobCard
