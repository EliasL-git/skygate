import { type ReactNode } from 'react'

interface CardProps {
  title: string
  description?: string
  image?: string
  link?: string
  children?: ReactNode
  className?: string
}

const Card = ({ title, description, image, link, children, className = '' }: CardProps) => {
  const CardContent = (
    <div className={`card ${className}`}>
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {children}
      </div>
    </div>
  )

  if (link) {
    return (
      <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
        {CardContent}
      </a>
    )
  }

  return CardContent
}

export default Card
