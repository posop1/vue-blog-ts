export const formatDate = (date?: string): string => {
  if (date) {
    return date.slice(0, 10).split('-').join(' ')
  } else {
    return ''
  }
}
