import { Elysia } from 'elysia'

import { db } from './db'
import { slugify } from '@/web/lib/utils'

const hang = async (ms = 1000) => {
  await new Promise((resolve) => setTimeout(resolve, ms))
}

const randomHang = async (min = 1, max = 2) => {
  const ms = Math.floor(Math.random() * (max - min) + min) * 1000
  await hang(ms)
}

const app = new Elysia()
  .get('/', () => '200')
  .get('/groups', async () => {
    await randomHang()
    return db.groups
      .map(({ name, debut, image, members }) => ({
        name,
        debut,
        image,
        count: members.length,
        sort: Math.random(),
      }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ name, debut, image, count }) => ({
        name,
        debut,
        image,
        count,
      }))
  })
  .get('/:group/:name', async ({ params: { group, name } }) => {
    await randomHang()
    return db.groups
      .find((g) => slugify(g.name) === slugify(group))
      ?.members.find((m) => slugify(m.name) === slugify(name))
  })
  .get('/:group', async ({ params: { group } }) => {
    await randomHang()
    return db.groups.find((g) => slugify(g.name) === group)
  })
  .get('/:group/members', async ({ params: { group } }) => {
    await randomHang()
    return db.groups.find((g) => slugify(g.name) === group)?.members
  })
  .listen(5678)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
