import { HttpMethods, HttpResponse, RequestOptions } from './types'

export type Token = string | (() => string) | (() => Promise<string>)

export class FetchHttpClient {
  private basePath: string = ''
  private token: Token = ''

  /**
   * Constructs a new instance with the specified base path and token.
   *
   * @param basePath - The base URL or path for requests.
   * @param token - An optional parameter to provide the authorization token. This can be:
   *    - A `string` token for immediate use (i.e., a static token).
   *    - A `() => string` function that returns a token dynamically, useful for cases where
   *      the token may expire or need to be refreshed periodically.
   *    - A `() => Promise<string>` function that returns a token dynamically, but when the function
   *       is a promise
   */
  constructor(basePath: string, token?: Token) {
    this.basePath = basePath
    if (token) this.token = token
  }

  private async getToken() {
    if (!this.token) return null
    if (typeof this.token === 'string') return this.token
    if (typeof this.token === 'function') return await this.token()
    return null
  }

  private async request<T = any>(
    path: string,
    method: HttpMethods,
    body?: any,
    options?: RequestOptions,
  ): Promise<HttpResponse<T>> {
    const token = await this.getToken()

    const response = await fetch(`${this.basePath}${path}`, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': token ? `Bearer ${token}` : '',
        ...options?.headers,
      },
      signal: options?.signal,
    })

    if (!response.ok) {
      throw await response.json()
    }

    return await this.adaptResponse<T>(response)
  }

  private async adaptResponse<T>(response: Response): Promise<HttpResponse<T>> {
    try {
      const json = await response.json()
      return { status: response.status, body: json as T }
    } catch (error) {
      return { status: response.status, body: null as T }
    }
  }

  public async get<T = any>(path: string, options?: RequestOptions) {
    return await this.request<T>(path, 'GET', undefined, options)
  }
  public async post<T = any>(path: string, body?: any, options?: RequestOptions) {
    return await this.request<T>(path, 'POST', body, options)
  }
  public async put<T = any>(path: string, body?: any, options?: RequestOptions) {
    return await this.request<T>(path, 'PUT', body, options)
  }
  public async patch<T = any>(path: string, body?: any, options?: RequestOptions) {
    return await this.request<T>(path, 'PATCH', body, options)
  }
  public async delete<T = any>(path: string, options?: RequestOptions) {
    return await this.request<T>(path, 'DELETE', undefined, options)
  }
}
