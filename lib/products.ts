import { db } from './db';
export async function getProducts(){return db.product.findMany({orderBy:[{featured:'desc'},{createdAt:'desc'}]})}
