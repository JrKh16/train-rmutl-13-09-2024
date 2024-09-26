# เพื่อใช้งาน daisyui component library for Tailwind CSS

<h2>ขั้นตอนแรก ติดตั้งใน project ของคุณ</h2>
npm install -D tailwindcss <br>
npx tailwindcss init <br>

แล้วก็ติดตั้ง daisyui  <br>
npm i -D daisyui@latest <br>

และใน tailwind.config.js <br>
เพิ่ม plugins <br>
module.exports = { <br>
  //... <br>
  plugins: [ <br>
    require('daisyui'), <br>
  ], <br>
} <br>
 <br>
สร้างไฟล์ app.css
----
@tailwind base; <br>
@tailwind components; <br>
@tailwind utilities; <br>
---

<h2>และสร้างไฟล์ +layout.svelte<h2>
---
<script> <br>
	import '../app.css'; <br>
</script>

<slot />
----
หากต้องการเปลี่ยนสีธีมให้เพิ่ม them list in tailwind.config.js <br>
module.exports = { <br>
  //...
  daisyui: { <br>
    themes: ["light", "dark", "cupcake"], <br>
  }, <br>
} <br>
 <br>
เรียกใช้ในไฟล์ +page.svelte  <br>
<html data-theme="cupcake"></html>

https://daisyui.com/docs/install/