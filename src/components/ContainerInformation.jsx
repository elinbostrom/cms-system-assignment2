import React from 'react'

export default function ContainerInformation({ title, informationText, sourceUrl, altText }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{informationText}</p>
      <div>
        <img src={sourceUrl} alt={altText} />
      </div>
    </section>
  )
}
