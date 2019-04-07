import React from 'react'
import Helmet from 'react-helmet'

export default function About () {
  return (
    <div>
      <Helmet
        title='About | Hello next.js!'
        meta={[
            { property: 'og:title', content: 'About' },
            { property: 'og:image', content: 'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/52450069_1244416252350097_4263800870111543296_o.jpg?_nc_cat=103&_nc_oc=AQmc0uC5YEtUj4Q26jR0zAlxjcK4s86rUyMFKoZqacxZ05ZCLBBjNv5pTnJD1SwknjH24axpjnqqDosZihwv-26y&_nc_ht=scontent.fsgn5-7.fna&oh=fd1da05c9b797a8fcb67189d8c5b0e78&oe=5D48EA49' }
            ]}
      />
      About the World
    </div>
  )
}