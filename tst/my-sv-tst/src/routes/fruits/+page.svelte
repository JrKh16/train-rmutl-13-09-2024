<script lang="ts">
	import { onMount } from 'svelte';
	// type
	let fruits: { id: number; name: string; color: string; price: string }[] = [];
	// ตัวแปรของ fruits
	let selectedId = 0,
		debug = '',
		fruitName = '',
		fruitColor = '',
		fruitPrice = '';

	// ดึงข้อมูลทั้งหมด
	async function load() {
		const res = await fetch('http://localhost:4000/api/fruits');
		fruits = await res.json();
	}
	async function create() {
		const res = await fetch('http://localhost:4000/api/fruits', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: fruitName, color: fruitColor, price: fruitPrice })
		});
		load();
	}
	async function remove() {
		// selectedId คือตัวแปรของfruitsที่กำหนด
		const res = await fetch(`http://localhost:4000/api/fruits/${selectedId}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		load();
	}
	async function update() {
		const res = await fetch(`http://localhost:4000/api/fruits/${selectedId}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: fruitName, color: fruitColor, price: fruitPrice })
		});
		load();
	}
	function selectFruit(id: number) {
		let f = fruits.find((e) => e.id === id);
		if (f) {
			selectedId = id;
			fruitName = f.name;
			fruitColor = f.color;
			fruitPrice = f.price;
			debug = 'Select ID: ' + selectedId;
		} else {
			debug = id + ' not found ' + id;
		}
	}
	// ตอนเปิด ขึ้นมาแล้วจะให้ทำอะไร
	onMount(async () => {
		load();
	});
</script>

<html data-theme="nord"></html>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/>
				</svg>
			</div>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
			>
				<li><a href="http://localhost:4000/">Homepage</a></li>
				<li><a>Portfolio</a></li>
				<li><a>About</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a class="btn btn-ghost text-xl">Fruits Shop</a>
	</div>
	<div class="navbar-end">
		<button class="btn btn-ghost btn-circle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		</button>
		<button class="btn btn-ghost btn-circle">
			<div class="indicator">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/>
				</svg>
				<span class="badge badge-xs badge-primary indicator-item"></span>
			</div>
		</button>
	</div>
</div>

<input
	class="input input-bordered w-full max-w-xs"
	type="text"
	name="name"
	bind:value={fruitName}
	placeholder="name"
/>
<input
	class="input input-bordered w-full max-w-xs"
	type="text"
	name="color"
	bind:value={fruitColor}
	placeholder="color"
/>
<input
	class="input input-bordered w-full max-w-xs"
	type="text"
	name="price"
	bind:value={fruitPrice}
	placeholder="price"
/>
<button
	class="btn btn-success"
	on:click={create}
	disabled={!fruitName || !fruitColor || !fruitPrice}>Create</button
>
<button
	class="btn btn-warning"
	on:click={update}
	disabled={!fruitName || !fruitColor || !fruitPrice || selectedId === 0}>Update</button
>
<button class="btn btn-error" on:click={remove} disabled={selectedId === 0}>Delete</button>
<ul>
	<li>
		<div class="overflow-x-auto">
			<table class="table">
				<thead>
					<tr class="bg-base-200">
						<th>Selected</th>
						<th>Name</th>
						<th>Color</th>
						<th>Price</th>
					</tr>
				</thead>
				{#each fruits as fruit}
					<tbody>
						<tr>
							<th>
								<input type="radio" name="id" on:click={() => selectFruit(fruit.id)} />
							</th>
							<td>
								{fruit.name}
							</td>
							<td>
								{fruit.color}
							</td>
							<td>
								{fruit.price}
							</td>
						</tr>
					</tbody>
				{/each}
			</table>
		</div>
	</li>
</ul>
<div>{debug}</div>
