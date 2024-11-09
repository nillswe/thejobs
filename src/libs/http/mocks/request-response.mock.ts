type MockResponseProps = {
  json?: (() => Promise<any>) | any
  status?: number
  ok?: boolean
}

type MockRequestProps = {
  method?: string
  body?: any
  headers?: {
    token?: string
  }
  signal?: AbortSignal
}

export const mockResponse = ({ json = true, status, ok }: MockResponseProps = {}) => ({
  ok: ok ?? true,
  status: status ?? 200,
  json: typeof json === 'function' ? json : () => Promise.resolve(json),
})

export const mockRequest = ({ body, method, headers, signal }: MockRequestProps = {}) => {
  return {
    method: method ?? 'GET',
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': headers?.token ? `Bearer ${headers.token}` : '',
    },
    signal: signal,
  }
}
