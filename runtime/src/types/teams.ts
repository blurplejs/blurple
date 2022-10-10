import { snowflake } from '#src/utils/snowflake'

/**
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-member-object
 */
export enum TeamMembershipStateEnum {
  INVITED = 1,
  ACCEPTED = 2,
}

/**
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-member-object
 */
export interface TeamMember {
  membership_state: TeamMembershipStateEnum
  permissions: string[]
  team_id: snowflake
  user: snowflake
}

/**
 * @see https://discord.com/developers/docs/topics/teams#data-models-team-object
 */
export interface Team {
  id: snowflake
  icon: string | null
  members: TeamMember[]
  name: string
  owner_user_id: snowflake
}
