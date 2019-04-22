function _baseGetTag(value: any): string {
  return Object.prototype.toString.call(value)
}

export default _baseGetTag
