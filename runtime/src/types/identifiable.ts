import { snowflake } from '#src/utils/snowflake'

export default interface Identifiable {
  readonly id: snowflake
}
