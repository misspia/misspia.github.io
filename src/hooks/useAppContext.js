import { useContext} from 'react';

import { AppContext } from '../context';

export default function useAppContext() {
  const context = useContext(AppContext);

  if(context === null) {
    throw new Error('Expected app context to be in scope');
  }

  return context;
}
