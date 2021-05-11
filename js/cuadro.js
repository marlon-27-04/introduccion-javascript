let i = 2

for(let i = 0; i <= 20 ; i ++){
  let table = `<table class="m-5 table" style="width: 18rem">
  <thead>
<tr>
<th scope="col">#</th>
<th scope="col">nombre</th>
<th scope="col">apellido</th>
<th scope="col">correo</th>
</tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">${i}</th>
      <td>marlon</td>
      <td>moreno</td>
      <td>marlonmoreno785@gmail.com</td>
    </tr>`

      
    document.getElementById("contenedor-tabla").innerHTML += table
}
/*<thead>
<tr>
<th scope="col">#</th>
<th scope="col">nombre</th>
<th scope="col">apellido</th>
<th scope="col">correo</th>
</tr>*/