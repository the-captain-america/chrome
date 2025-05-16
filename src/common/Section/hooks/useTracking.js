import useDispatch from 'react-redux'
import { createTrackingItem } from '@state/tracking'

const useTracking = () => {
  const dispatch = useDispatch()
  const handleInteraction = (event) => {
    // Check if the event originated from a meaningful child element
    if (
      [
        'BUTTON',
        'INPUT',
        'TEXTAREA',
        'SELECT',
        'LABEL',
        'DIV',
        'LI',
        'UL',
      ].includes(event.target.tagName)
    ) {
      console.log('Interacted with:', event.target)
      dispatch(
        createTrackingItem({
          title: title,
          tagName: event.target.tagName,
          event: event.target,
          action: `Interacted with ${title}`,
          feature: title,
        }),
      )
    }
  }
  return {
    actions: {
      handleInteraction,
    },
  }
}

export default useTracking
