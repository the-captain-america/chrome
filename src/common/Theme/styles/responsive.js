const breakpoints = {
  xs: '@media (max-width: 767px), (min-width: 768px)',
  sm: '@media (min-width: 768px)',
  md: '@media (min-width: 860px)',
  lg: '@media (min-width: 1280px)',
}

const widthHelperFn = (value) => {
  if (value === 'unset' || value === 'auto' || value === '100%') {
    return value
  }

  if (
    typeof value === 'string' &&
    (value.includes('px') || value.includes('%'))
  ) {
    return value
  }

  if (typeof value === 'number') {
    return `${value}px`
  }

  return value
}

const propertyHandler = (prop, value) => {
  if (prop === 'width') return widthHelperFn(value)
  const excludedCssProps = ['font-weight']
  if (excludedCssProps.includes(prop)) {
    return value
  }
  return typeof value === 'number' ? `${value}px` : `${value}`
}

const responsiveProps = (prop, value) => {
  if (typeof value === 'object') {
    const breakpointsMap = {
      xs: breakpoints.xs,
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
    }

    const result = Object.keys(breakpointsMap)
      .filter((key) => value[key])
      .map(
        (key) =>
          `${breakpointsMap[key]} {
                  ${prop}: ${propertyHandler(prop, value[key])};
                }`,
      )
      .join('\n')

    return result.trim()
  }

  return `${prop}: ${propertyHandler(prop, value)};`
}

export { responsiveProps, widthHelperFn, propertyHandler }
