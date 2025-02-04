const SocialMedia = ({ link, icon }) => {
  const className = 'fa-brands ' + icon

  return (
    <a className="social-media-icons" href="{link}">
      <i className={className}></i>
    </a>
  )
}

export default SocialMedia
