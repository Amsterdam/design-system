/* eslint-disable no-undef */
const patchConfig = require('./.ncurc.patch')

module.exports = {
  reject: [...patchConfig.reject],
}
