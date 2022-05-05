#   Angular Effects NGRX

##  API FAKE
```
    -> https://reqres.in/
```
##  USING EFFECTS IN NGRX
```
    -> ng add @ngrx/store@latest
    -> ng add @ngrx/store-devtools@latest
    -> ng add @ngrx/effects@latest

    1.  Que son los Effectos ( 3era ley de Newton a toda accion hay una reaccion )
    1.1 Accion -> Escucha el Effecto -> Accion / Servicio -> Regresa al Reducer
    1.2 Efectos escucha acciones que son despachadas por el ngrx/store -> Ayuda a simplificar la logica de los componentes
        comunicarse fuera del ecosistema de Angular
        Store Simple: componente -> accion ( servicio ) -> reducer -> Estado ( Nuevo o Actual ) -> Regresa al Componente
        Effectos: componente -> accion ( servicio ) <----> Effectos - Servicio - Servidor -> Regresa al Reducer 
```

##  Despliegue GitHub Pages
```
- Github permite hostear aplicaciones de tipo ( plana [HTML, CSS, JAVASCRIPT])
1.  Generar ng build
2.  Github Pages 
3.  Add base  <base href="sevenapp_effects/"> index.html
4.  config docs replace dist name in folder production build
```