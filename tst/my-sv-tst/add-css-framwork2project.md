# เพื่อใช้งาน daisyui component library for Tailwind CSS

<h2>ขั้นตอนแรก ติดตั้งใน project ของคุณ</h2>
npm install -D tailwindcss <br>
npx tailwindcss init <br>

แล้วก็ติดตั้ง daisyui  <br>
npm i -D daisyui@latest <br>

และใน tailwind.config.js <br>
เพิ่ม plugins <br>
module.exports = {
  //...
  plugins: [
    require('daisyui'),
  ],
}
 <br>
สร้างไฟล์ app.css <br>
----
@tailwind base;
@tailwind components;
@tailwind utilities;
---

และสร้างไฟล์ +layout.svelte <br>
<script>
	import '../app.css';
</script>

<slot />
 <br>
หากต้องการเปลี่ยนสีธีมให้เพิ่ม them list in tailwind.config.js <br>
module.exports = {
  //...
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
 <br>
เรียกใช้ในไฟล์ +page.svelte  <br>
<html data-theme="cupcake"></html>

https://daisyui.com/docs/install/