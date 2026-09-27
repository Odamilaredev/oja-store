import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';
const db=new PrismaClient();
const products=[
['heatwave-cotton-shirt','Heatwave Cotton Shirt','Clothing','100% cotton. Boxy cut. Built for 34°C mornings.',38500,24,'/products/shirt.svg','Best seller',true],
['sunday-market-tote','Sunday Market Tote','Bags','Heavy canvas with a long handle and roomy base.',18500,38,'/products/tote.svg','New',true],
['yellow-enamel-tray','Yellow Enamel Tray','Home','A bright little tray for keys, glasses and loose change.',14500,17,'/products/tray.svg','Small run',false],
['black-sun-cap','Black Sun Cap','Accessories','Cotton twill, curved brim, one-size adjustment.',22000,31,'/products/cap.svg','Limited',false],
['palm-line-poster','Palm Line Poster','Home','A3 risograph-style wall print on warm stock.',12000,40,'/products/poster.svg','Print',false],
['forest-utility-pouch','Forest Utility Pouch','Accessories','Zip pouch for chargers, cards and the cable situation.',16000,29,'/products/pouch.svg','Useful',true]
];
async function main(){const password=await bcrypt.hash(process.env.ADMIN_PASSWORD||'change-this-password',12);await db.user.upsert({where:{email:process.env.ADMIN_EMAIL||'admin@oja.ng'},update:{role:Role.ADMIN,passwordHash:password},create:{email:process.env.ADMIN_EMAIL||'admin@oja.ng',name:'OJA Admin',role:Role.ADMIN,passwordHash:password}});for(const p of products){await db.product.upsert({where:{slug:p[0] as string},update:{name:p[1] as string,category:p[2] as string,description:p[3] as string,price:p[4] as number,stock:p[5] as number,imageUrl:p[6] as string,tag:p[7] as string,featured:p[8] as boolean},create:{slug:p[0] as string,name:p[1] as string,category:p[2] as string,description:p[3] as string,price:p[4] as number,stock:p[5] as number,imageUrl:p[6] as string,tag:p[7] as string,featured:p[8] as boolean}})}}
main().finally(()=>db.$disconnect());
