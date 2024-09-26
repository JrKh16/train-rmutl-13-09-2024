# การใช้งาน daisyUI Component Library สำหรับ Tailwind CSS

## ขั้นตอนแรก: ติดตั้งในโปรเจกต์ของคุณ

เริ่มจากติดตั้ง `tailwindcss`:
npm install -D tailwindcss npx tailwindcss init


จากนั้นติดตั้ง daisyUI:
npm i -D daisyui@latest


และในไฟล์ `tailwind.config.js` ให้เพิ่ม plugins ดังนี้:
```javascript
module.exports = {
  //...
  plugins: [
    require('daisyui'),
  ],
}
```javascript

สร้างไฟล์ app.css
ภายในไฟล์ app.css ให้เพิ่มเนื้อหาดังนี้:
```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```javascript

สร้างไฟล์ +layout.svelte
ในไฟล์ +layout.svelte ให้นำเข้า app.css และใช้ slot ดังนี้:
```javascript
<script>
	import '../app.css';
</script>

<slot />
```javascript

การเปลี่ยนสีธีม
หากต้องการเปลี่ยนสีธีม คุณสามารถเพิ่ม themes ในไฟล์ tailwind.config.js:
```javascript
module.exports = {
  //...
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
```javascript

การเรียกใช้ในไฟล์ +page.svelte
ในไฟล์ +page.svelte คุณสามารถตั้งค่า theme ที่ต้องการได้ เช่น:
```javascript
<html data-theme="cupcake"></html>

สำหรับข้อมูลเพิ่มเติมสามารถดูที่ https://daisyui.com/docs/install/