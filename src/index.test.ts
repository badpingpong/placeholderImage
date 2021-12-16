import { getPlaceholderImage } from './index'
describe('getPlaceholderImage', () => {
  test('get correctly', () => {
    expect(
      getPlaceholderImage({
        height: 200,
        width: 400,
        bgColor: 'ff0000',
        text: 'sasebo burger',
        textColor: '0000ff',
        extension: 'jpg',
      })
    ).toBe(
      'https://via.placeholder.com/400x200.jpg/ff0000/0000ff?text=sasebo burger'
    )
  })

  test('no params', () => {
    expect(getPlaceholderImage({})).toBe('https://via.placeholder.com/100.png')
  })

  test('size is prior to height/width', () => {
    expect(getPlaceholderImage({ size: 200, height: 300, width: 500 })).toBe(
      'https://via.placeholder.com/200.png'
    )
  })

  test('extension works properly', () => {
    expect(getPlaceholderImage({ extension: 'gif' })).toBe(
      'https://via.placeholder.com/100.gif'
    )
    expect(getPlaceholderImage({ extension: 'png' })).toBe(
      'https://via.placeholder.com/100.png'
    )
    expect(getPlaceholderImage({ extension: 'jpg' })).toBe(
      'https://via.placeholder.com/100.jpg'
    )
    expect(getPlaceholderImage({ extension: 'jpeg' })).toBe(
      'https://via.placeholder.com/100.jpeg'
    )
  })
})
