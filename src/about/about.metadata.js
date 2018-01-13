import { Colors } from '../themes/themes.js'
import resumePDF from './pialeung.pdf'

const Metadata = {
  email: {
    label: 'Email',
    color: Colors.pink,
    url: 'miss.pialeung@gmail.com',
  },
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
  codepen: {
    label: 'Codepen',
    color: Colors.codepen,
    url: 'https://codepen.io/misspia/'
  },
  linkedin: {
    label: 'LinkedIn',
    color: Colors.linkedin,
    url: 'https://www.linkedin.com/in/pia-leung'
  },
}

export default Metadata;
