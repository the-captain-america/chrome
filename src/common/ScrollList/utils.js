const onScroll = () => {
  const section = document.querySelector('#auth')
  if (section) {
    let position = section.getBoundingClientRect()
    // scrolls to 20px above element

    const top = position.top + window.scrollY - 16
    const left = position.left

    window.scrollTo({
      top,
      left,
      behavior: 'smooth',
    })
  }
}

useEffect(() => {
  onScroll()
}, [])
