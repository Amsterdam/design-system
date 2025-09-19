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
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'Word'
    case 'application/pdf':
      return 'pdf'
    case 'application/vnd.ms-excel':
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return 'Excel'
    case 'application/vnd.ms-powerpoint':
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return 'PowerPoint'
    case 'image/gif':
      return 'gif'
    case 'image/jpeg':
      return 'jpg'
    case 'image/png':
      return 'png'
    case 'text/plain':
      return 'txt'
    default:
      return 'Document'
  }
}
