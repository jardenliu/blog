import { getDateDiff } from 'src/units/date'
import { isDate } from 'lodash'

export default function dateDiff(value) {
  if (!isDate(value)) {
    value = new Date(value)
  }
  let dateTimeStamp = value.getTime()
  if (dateTimeStamp > 0) {
    return getDateDiff(dateTimeStamp)
  }
  return ''
}
