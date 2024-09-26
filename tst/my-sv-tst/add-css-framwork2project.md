# เพื่อใช้งาน daisyui component library for Tailwind CSS

<h2>ขั้นตอนแรก ติดตั้งใน project ของคุณ</h2>
npm install -D tailwindcss
npx tailwindcss init

แล้วก็ติดตั้ง daisyui 
npm i -D daisyui@latest

และใน tailwind.config.js
เพิ่ม plugins
module.exports = {
  //...
  plugins: [
    require('daisyui'),
  ],
}

สร้างไฟล์ app.css
----
@tailwind base;
@tailwind components;
@tailwind utilities;
---

และสร้างไฟล์ +layout.svelte
<script>
	import '../app.css';
</script>

<slot />

หากต้องการเปลี่ยนสีธีมให้เพิ่ม them list in tailwind.config.js
module.exports = {
  //...
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

เรียกใช้ในไฟล์ +page.svelte 
<html data-theme="cupcake"></html>