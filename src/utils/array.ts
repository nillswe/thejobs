export const parseToArray = (value: any) => {
  return Array.isArray(value) ? value : value ? [value] : null
}
