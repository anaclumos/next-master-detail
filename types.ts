export type Member = {
  name: string
  birthday: Date
  image: string
  country: string
}

export type Group = {
  name: string
  debut: Date
  members: Member[]
  image: string
}
