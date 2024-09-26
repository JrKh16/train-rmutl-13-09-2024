# การใช้งาน daisyUI Component Library สำหรับ Tailwind CSS

## ขั้นตอนแรก: ติดตั้งในโปรเจกต์ของคุณ

เริ่มจากติดตั้ง `tailwindcss`:

```bash

npm install -D tailwindcss
npx tailwindcss init


จากนั้นติดตั้ง daisyUI:
npm i -D daisyui@latest


และในไฟล์ tailwind.config.js ให้เพิ่ม plugins ดังนี้:
module.exports = {
  //...
  plugins: [
    require('daisyui'),
  ],
}


สร้างไฟล์ app.css
ภายในไฟล์ app.css ให้เพิ่มเนื้อหาดังนี้:
@tailwind base;
@tailwind components;
@tailwind utilities;


สร้างไฟล์ +layout.svelte
ในไฟล์ +layout.svelte ให้นำเข้า app.css และใช้ slot ดังนี้:
<script>
	import '../app.css';
</script>

<slot />


การเปลี่ยนสีธีม
หากต้องการเปลี่ยนสีธีม คุณสามารถเพิ่ม themes ในไฟล์ tailwind.config.js:
module.exports = {
  //...
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}


การเรียกใช้ในไฟล์ +page.svelte
ในไฟล์ +page.svelte คุณสามารถตั้งค่า theme ที่ต้องการได้ เช่น:
<html data-theme="cupcake"></html>


สำหรับข้อมูลเพิ่มเติมสามารถดูที่ daisyUI Documentation