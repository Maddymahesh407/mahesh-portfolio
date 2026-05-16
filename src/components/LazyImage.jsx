<<<<<<< HEAD
import React from 'react'

export default function LazyImage({ src, alt = '', className = '', width, height }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      width={width}
      height={height}
      decoding="async"
    />
  )
}
=======
import React from 'react'

export default function LazyImage({ src, alt = '', className = '', width, height }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      width={width}
      height={height}
      decoding="async"
    />
  )
}
>>>>>>> e530600cdb5d7da99edfd6fca2cfbda5d92830bb
