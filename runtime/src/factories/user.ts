import defineFactory from './define'
import { faker } from '@faker-js/faker'
import User from '../types/user'
import Snowflake from '#src/utils/snowflake'

export default defineFactory(User, ({ params }) => {
  return {
    id: Snowflake.create(),
    username: faker.internet.userName(),
    discriminator: faker.random.numeric(4),
    // avatar: TODO: Define avatar hash
    bot: false,
    system: false,
    mfa_enabled: true,
    // banner: TODO: Define avatar hash
    accent_color: parseInt(faker.color.rgb(), 16),
    locale: 'en-US', // TODO: Make this random
    verified: true,
    email: faker.internet.email(),
    flags: 0,
    premium_type: 0,
    public_flags: 0,
  }
})
