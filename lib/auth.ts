import { cookies } from 'next/headers';
import { db } from './db';
import crypto from 'crypto';
const COOKIE='oja_session';
function sign(value:string){return crypto.createHmac('sha256',process.env.AUTH_SECRET||'dev-secret').update(value).digest('hex')}
export function makeToken(id:string){return `${id}.${sign(id)}`}
export async function setSession(id:string){(await cookies()).set(COOKIE,makeToken(id),{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/',maxAge:60*60*24*30})}
export async function clearSession(){(await cookies()).delete(COOKIE)}
export async function currentUser(){const token=(await cookies()).get(COOKIE)?.value;if(!token)return null;const [id,sig]=token.split('.');if(!id||sig!==sign(id))return null;return db.user.findUnique({where:{id}})}
export async function requireAdmin(){const u=await currentUser();if(!u||u.role!=='ADMIN')throw new Error('UNAUTHORIZED');return u}
