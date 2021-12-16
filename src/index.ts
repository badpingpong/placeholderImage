interface GetPlaceholderImageParams {
  size?: number
  height?: number
  width?: number
  text?: string
  textColor?: string
  bgColor?: string
  extension?: 'gif' | 'jpg' | 'jpeg' | 'png'
}
const BASE_URL = 'https://via.placeholder.com'
const DEFAULT_SIZE = 100

/**
 *
 * @param { number } [size=100] - (px) size of image.
 * @param { number } [height] - (px) height of image (overwritten by size if size is specified)
 * @param { number } [width] - (px) width of image (overwritten by size if size is specified)
 * @param { 'gif' | 'jpg' | 'jpeg' | 'png' = 'png'} [extension] - image format
 * @returns
 */
export const getPlaceholderImage = ({
  height,
  width,
  size: __size,
  bgColor: __bgColor,
  text: __text,
  textColor: color,
  extension = 'png',
}: GetPlaceholderImageParams) => {
  const size = __size
    ? __size
    : height
    ? width
      ? `${width}x${height}`
      : `${height}`
    : width
    ? `${width}`
    : `${DEFAULT_SIZE}`
  const bgColor = __bgColor ? `/${__bgColor}` : ''
  const textColor = color ? `/${color}` : ''
  const text = __text ? `?text=${__text}` : ''
  return `${BASE_URL}/${size}.${extension}${bgColor}${textColor}${text}`
}
