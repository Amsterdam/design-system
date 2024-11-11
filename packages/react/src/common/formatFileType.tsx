/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 *
 * @param fileType
 * @returns Human readable file type
 */
export const formatFileType = (fileType: string) => {
  switch (fileType) {
    case 'image/gif':
      return 'gif'
    case 'image/jpeg':
      return 'jpg'
    case 'image/png':
      return 'png'
    case 'text/plain':
      return 'txt'
    case 'application/pdf':
      return 'pdf'
    case 'application/msword':
      return 'Word'
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'Word'
    case 'application/vnd.ms-excel':
      return 'Excel'
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return 'Excel'
    case 'application/vnd.ms-powerpoint':
      return 'PowerPoint'
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return 'PowerPoint'
    default:
      return fileType
  }
}
