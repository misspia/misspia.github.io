import { Colors } from '../themes/themes.js'
import resumePDF from './pialeung.pdf'

const Metadata = {
  bio: {
    name: 'Pia',
    email: 'miss.pialeung@gmail.com'
  },
  links: {
    resume: {
      label: 'Resume',
      color: Colors.pink,
      url: resumePDF
    },
    github: {
      label: 'Github',
      color: Colors.github,
      url: 'https://github.com/misspia'
    },
    linkedin: {
      label: 'LinkedIn',
      color: Colors.linkedin,
      url: 'https://www.linkedin.com/in/pia-leung'
    },
    codepen: {
      label: 'Codepen',
      color: Colors.codepen,
      url: 'https://codepen.io/misspia/'
    },
    poly: {
      label: 'Google Poly',
      color: Colors.poly,
      url: 'https://poly.google.com/user/04engSSutGE'
    }
  }

}

export default Metadata;
