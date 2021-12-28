<style>
	@import url(https://fonts.googleapis.com/css?family=Caveat);
	*{font-family:'Caveat';color:mediumblue;box-sizing:border-box;font-size:1.2em}
	input{border:2px solid #e8e8e8;padding:0.25em 1em;width:100%;margin:1em 0;}
	input:focus{outline:none;border:2px solid #D44147;}
	input::placeholder{color:rgb(185, 210, 255);}
	.papel{position:relative;max-width:800px;margin:0 auto;background:#fafafa;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,.3);padding:24px 16px 24px 60px;}
	.papel:before{content:'';position:absolute;top:0;bottom:0;left:0;width:60px;background:radial-gradient(#575450 6px,transparent 7px) repeat-y;background-size:30px 30px;border-right:3px solid #D44147;}
	.papel div{padding:0.5em;display:flex;border-bottom: 2px solid #91D1D3;cursor:pointer;}
	.tarea-eliminar{color:#e29699;}
	.tarea-eliminar:hover{color:#D44147;}
	.tarea-descripcion{padding-left:1em;flex-grow:1;}
	.tachada{text-decoration:line-through;color:rgb(185, 210, 255);}
</style>

<script context="module">
	export async function load({ fetch }) {
		return { props: { tareas: (await (await fetch(`https://${process.env.VERCEL_URL}/api/`)).json()) }};
	}
</script>

<script>
	let descripcionNuevaTarea = '';
	export let tareas = [];

	async function add(){
		const nuevaTarea = await(await fetch(`/api/add?descripcion=${descripcionNuevaTarea}`)).json();
		tareas = [...tareas, {id: nuevaTarea.insertId, descripcion: descripcionNuevaTarea}];
		descripcionNuevaTarea = '';
	}

	async function del(index){
		fetch(`/api/del?id=${tareas[index].id}`);
		tareas.splice(index, 1);
		tareas = tareas;
	}

	async function check(index){
		fetch(`/api/check?id=${tareas[index].id}`);
		tareas[index].tachada ^= 1;
	}
</script>

<div class="papel">
	<input bind:value={descripcionNuevaTarea} placeholder="Nueva tarea" on:keypress={(e)=>{if(e.key==='Enter')add()}}>
	{#each tareas as tarea, index}
	<div>
		<span on:click={()=>del(index)} class="tarea-eliminar">⊗</span>
		<span class:tachada={tarea.tachada} class="tarea-descripcion" on:click={()=>check(index)}>{tarea.descripcion}</span>
	</div>
	{/each}
</div>