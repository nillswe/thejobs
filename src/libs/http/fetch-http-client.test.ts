import { faker } from '@faker-js/faker'

import { FetchHttpClient, Token } from './fetch-http-client'
import { mockRequest, mockResponse } from './mocks/request-response.mock'

global.fetch = jest.fn(() => Promise.resolve()) as any

const makeSut = (token?: Token | null) => {
  const basePath = 'http://localhost'
  const defaultToken = faker.string.uuid()
  const sut = new FetchHttpClient(basePath, token === null ? undefined : (token ?? defaultToken))

  return {
    sut,
    basePath,
    token: token ? undefined : defaultToken,
  }
}

describe('FetchHttpClient', () => {
  beforeEach(() => {
    ;(fetch as jest.Mock).mockClear()
  })

  describe('FAIL', () => {
    it('should throw a custom error when the server responded with a failure. e.g: 5xx, 4xx', async () => {
      const { sut } = makeSut()

      ;(fetch as jest.Mock).mockResolvedValue(
        mockResponse({
          status: 500,
          ok: false,
          json: 'Generic server error',
        }),
      )

      const requestMock = sut.get('/example')

      await expect(requestMock).rejects.toStrictEqual('Generic server error')
    })

    it('should throw a custom error when the server responded with a failure and the `error` property is null', async () => {
      const { sut } = makeSut()

      ;(fetch as jest.Mock).mockResolvedValue(
        mockResponse({
          json: () => Promise.reject('Unauthorized'),
          status: 400,
          ok: false,
        }),
      )

      const requestMock = sut.get('/example')

      await expect(requestMock).rejects.toBe('Unauthorized')
    })

    it(`should throw an generic error when the request couldn't be made`, async () => {
      const { sut } = makeSut()

      ;(fetch as jest.Mock).mockRejectedValue('Generic internal error')

      const requestMock = sut.get('/example')

      await expect(requestMock).rejects.toBe('Generic internal error')
    })
  })

  describe('GET', () => {
    it('Should call GET method properly with the correct response', async () => {
      const { sut, basePath, token } = makeSut()

      ;(fetch as jest.Mock).mockResolvedValue(mockResponse())

      const getMock = await sut.get('/get-example-request')

      expect(fetch).toHaveBeenCalledWith(
        `${basePath}/get-example-request`,
        mockRequest({ headers: { token } }),
      )

      expect(getMock).toStrictEqual({ body: true, status: 200 })
    })
  })

  describe('POST', () => {
    it('Should call POST method properly with the correct response', async () => {
      const { sut, basePath, token } = makeSut()

      ;(fetch as jest.Mock).mockResolvedValue(mockResponse())

      const postMock = await sut.post('/example', { data: true })

      expect(fetch).toHaveBeenCalledWith(
        `${basePath}/example`,
        mockRequest({ method: 'POST', body: { data: true }, headers: { token } }),
      )

      expect(postMock).toStrictEqual({ body: true, status: 200 })
    })
  })

  describe('PUT', () => {
    it('Should call PUT method properly with the correct response', async () => {
      const { sut, basePath, token } = makeSut()

      const putMock = await sut.put('/example', { data: true })

      ;(fetch as jest.Mock).mockResolvedValue(mockResponse())

      expect(fetch).toHaveBeenCalledWith(
        `${basePath}/example`,
        mockRequest({ method: 'PUT', body: { data: true }, headers: { token } }),
      )

      expect(putMock).toStrictEqual({ body: true, status: 200 })
    })
  })

  describe('PATCH', () => {
    it('Should call PATCH method properly with the correct response', async () => {
      const { sut, basePath, token } = makeSut()

      const putMock = await sut.patch('/example', { data: true })

      ;(fetch as jest.Mock).mockResolvedValue(mockResponse())

      expect(fetch).toHaveBeenCalledWith(
        `${basePath}/example`,
        mockRequest({ method: 'PATCH', body: { data: true }, headers: { token } }),
      )

      expect(putMock).toStrictEqual({ body: true, status: 200 })
    })
  })

  describe('DELETE', () => {
    it('Should call DELETE method properly with the correct response', async () => {
      const { sut, basePath, token } = makeSut()

      ;(fetch as jest.Mock).mockResolvedValue(mockResponse())

      const deleteMock = await sut.delete('/example')

      expect(fetch).toHaveBeenCalledWith(
        `${basePath}/example`,
        mockRequest({ method: 'DELETE', headers: { token } }),
      )

      expect(deleteMock).toStrictEqual({ body: true, status: 200 })
    })
  })

  describe('GENERAL', () => {
    it('should pass a signal as argument of RequestOptions', async () => {
      const { sut, basePath } = makeSut(null)
      const controller = new AbortController()

      ;(fetch as jest.Mock).mockResolvedValue(mockResponse())

      const getMock = await sut.get('/example', { signal: controller.signal })

      expect(fetch).toHaveBeenCalledWith(
        `${basePath}/example`,
        mockRequest({ signal: controller.signal }),
      )

      expect(getMock).toStrictEqual({ body: true, status: 200 })
    })

    it('Should call GET method properly without Authorization header', async () => {
      const { sut, basePath } = makeSut(null)

      ;(fetch as jest.Mock).mockResolvedValue(mockResponse())

      const getMock = await sut.get('/example')

      expect(fetch).toHaveBeenCalledWith(`${basePath}/example`, mockRequest())

      expect(getMock).toStrictEqual({ body: true, status: 200 })
    })

    it('Should get token when it was passed as a function', async () => {
      const token = faker.string.uuid()
      const getToken = () => token
      const { sut, basePath } = makeSut(getToken)

      ;(fetch as jest.Mock).mockResolvedValue(mockResponse())

      await sut.get('/example')

      expect(fetch).toHaveBeenCalledWith(`${basePath}/example`, mockRequest({ headers: { token } }))
    })

    it('Should have Authorization header empty when is passed an invalid token type', async () => {
      const { sut, basePath } = makeSut({ anything: true } as any)

      ;(fetch as jest.Mock).mockResolvedValue(mockResponse())

      await sut.get('/example')

      expect(fetch).toHaveBeenCalledWith(`${basePath}/example`, mockRequest())
    })

    it('Should return a null body when the response is empty', async () => {
      const { sut, basePath, token } = makeSut()

      ;(fetch as jest.Mock).mockResolvedValue(mockResponse({ json: () => Promise.reject() }))

      const putMock = await sut.patch('/example', { data: true })

      expect(fetch).toHaveBeenCalledWith(
        `${basePath}/example`,
        mockRequest({ method: 'PATCH', body: { data: true }, headers: { token } }),
      )

      expect(putMock).toStrictEqual({ body: null, status: 200 })
    })
  })
})
