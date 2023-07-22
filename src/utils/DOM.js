export function getAttribute (el , attributeName ) {
  return document.querySelector(el).getAttribute(attributeName)

}

export function setAttribute (el , attributeName , value) {
  document.querySelector(el).setAttribute(attributeName , value)
}