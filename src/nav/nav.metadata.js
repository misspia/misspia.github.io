import Routes from '../router/routes.js'

const Metadata = {
  brand: {
    heading: 'Pia Leung',
    subheading: 'art + code',
    to: Routes.home
  },
  tabs: [
    {
      label: 'about',
      to: Routes.about
    },
    {
      label: 'projects',
      to: Routes.projects
    },
  ]
};

export default Metadata;
