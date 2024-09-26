<html data-theme="nord"></html>
<script lang="ts">
    import { onMount } from 'svelte';   
    // type 
    let fruits: {id:number,name:string,color:string,price:string}[]=[]
    // ตัวแปรของ fruits
    let selectedId=0,debug = "",fruitName="",fruitColor="",fruitPrice=""

    // ดึงข้อมูลทั้งหมด
    async function load(){
        const res = await fetch("http://localhost:4000/api/fruits")
        fruits = await res.json()
    }
    async function create(){
        const res = await fetch("http://localhost:4000/api/fruits",{
            "method":"POST",
            "headers":{"Content-Type": "application/json"},
            "body":JSON.stringify({name:fruitName,color:fruitColor,price:fruitPrice})
        })
        load()
    }
    async function remove(){
        // selectedId คือตัวแปรของfruitsที่กำหนด
        const res = await fetch(`http://localhost:4000/api/fruits/${selectedId}`,{
            "method":"DELETE",
            "headers":{"Content-Type": "application/json"},
        })
        load()
    }
    async function update(){
        const res = await fetch(`http://localhost:4000/api/fruits/${selectedId}`,{
            "method":"PATCH",
            "headers":{"Content-Type": "application/json"},
            "body":JSON.stringify({name:fruitName,color:fruitColor,price:fruitPrice})
        })
        load()
    }
    function selectFruit(id:number){
        let f = fruits.find((e)=>e.id===id)
        if(f){
            selectedId=id
            fruitName=f.name
            fruitColor=f.color
            fruitPrice=f.price
            debug = "Select "+selectedId    
        }else{
            debug = id+" not found "+id
        }
    }
    // ตอนเปิด ขึ้นมาแล้วจะให้ทำอะไร
    onMount(async () => {load()});
    </script>
    <input type="text" name="name" bind:value={fruitName} placeholder="name">
    <input type="text" name="color" bind:value={fruitColor} placeholder="color">
    <input type="text" name="price" bind:value={fruitPrice} placeholder="price">
    <button class="btn btn-success" on:click={create} disabled={!fruitName||!fruitColor||!fruitPrice}>Create</button> 
    <button class="btn btn-warning" on:click={update} disabled={!fruitName||!fruitColor||!fruitPrice||selectedId===0}>Update</button>
    <button class="btn btn-error" on:click={remove} disabled={selectedId===0}>Delete</button>
    <ul>
    {#each fruits as fruit}
        <li>
            <input type="radio" name="id" on:click={()=>selectFruit(fruit.id)}>
            {fruit.name} : {fruit.color} : {fruit.price} 
        </li>
    {/each}
    </ul>
    <div>{debug}</div>