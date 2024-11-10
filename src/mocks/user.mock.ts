import { faker } from '@faker-js/faker/.'

import { UserModel } from '@/types/models'

export const mockUser = (): UserModel => {
  return {
    id: faker.number.bigInt(),
    email: faker.internet.email(),
    name: faker.person.firstName(),
    uid: faker.string.uuid(),
  }
}
