# vue3-docker

## แนะนำโปรเจค
 ระบบ Tam jai (ตาม-ใจ) เป็นโปรเจคเว็บไซต์สำหรับซื้อขายสินค้า โดยในหน้าเว็บจะมีสินค้าหลายหมวดหมู่ที่วางขายอยู่ ผู้ใช้สามารถกดเลือกซื้อสินค้า หรือเปิดร้านค้าเพื่อขายในเว็บไซต์นี้ได้

## ชื่อกลุ่ม และรายชื่อสมาชิกในกลุ่ม
 
### กลุ่ม Tam-Jai (ทำใจ)
- รหัสนิสิต-ชื่อนามสกุล 6310450051 ลีโอณิช เช็ง 
GitHub: KenzieLeonic 
- รหัสนิสิต-ชื่อนามสกุล 6310450484 ณภัทร พัชโรภาสวงศ์ 
GitHub: aungpor 
- รหัสนิสิต-ชื่อนามสกุล 6310450522 ธนบดี กังวลกิจ 
GitHub: nax200 
- รหัสนิสิต-ชื่อนามสกุล 6310450620 พุธิตา จองศิริกุล 
GitHub: ployputita 
- รหัสนิสิต-ชื่อนามสกุล 6310451120 ณัฐพงษ์ เหล่าเราวัฒนกุล 
GitHub: S-Nattapong 
- รหัสนิสิต-ชื่อนามสกุล 630451294 พชร สุวราวรนาถ 
GitHub: Irisia

## คำแนะนำในการติดตั้งโปรเจค
> require: ต้องติดตั้ง docker และเปิดใช้งานอยู่
1. change directory ไปที่ ๆ ต้องการติดตั้ง
2. ใช้คำสั่งในการโหลดโปรเจค
```url
git clone https://github.com/TamJai-Shopping/TamJai-Frontend.git
```
3. รันคำสั่งเหล่านี้ตามลำดับ
```bash
docker-compose up -d
docker-compose exec app npm install
docker-compose exec app npm run dev
```

## คำแนะนำในการติดตั้งโปรเจคสำหรับ deploy



## คำแนะนำในการรันโปรเจคหรือการเข้าถึงหน้าเว็บไซต์
> require: ต้องรันโปรเจคที่ back-end ก่อนเพื่อให้สามารถเข้าถึง api ได้ <br>
เข้าผ่าน url [http://localhost:3000](http://localhost:3000)



## default username และ password สำหรับผู้ใช้แต่ละ role

- Role user
- Email: user01@api.example.com
- Password: userpass
-----------------------------------
- Role Admin
- Email: admin@api.example.com
- Password: adminpass

## ระบุ release tag ของโปรเจคที่สมบูรณ์ ใช้ในการนำเสนอ
> v1.0.0
