#### Part 09 - Client - Header ####

* montando frontend basico
* creando GlobalState.js
* CREANDO EL HEADER con su respectivo estilo y importando ese estilo del header en el index.css con @import url("../bla/bla/header.css)
* creando carpeta mainpages
* en esa carpeta mainpages estan las paginas principales
* creando Pages.js ES COMO EL INDEX DE LAS PAGINAS donde se linkea con un <Route path="/login" exact component={Login} /> para renderizar el componente Login.js al presionar lo que esta en las etiquetas "Link" que estan en el Header.js <Link to="/login">Login ~ Register</Link> y al presionar ese texto que dice "Login ~ Register" renderizara o "redireccionará" al componente "Login.js" que se puso en el "exact component" cuando se importo:  import Login from './auth/Login'


#### Part 10 - Client - Products - DetailProduct ####

* Consumiendo API del backend para obtener la informacion de los productos de la base de datos
* Creando el ProductAPI.js para consumir la API | api/ProductAPI.js |
* creando la vista de products con el Product.js component y dandole estilo con css ESE COMPONENTE RENDERIZA LA CARTA DEL PRODUCTO PASANDOLE EN LOS PROPS el "product={product}" y renderiza con la informacion del producto que se le paso | /mainPages/Products/ |
* creando ProductItem que esta conectado con el componente Product.js para renderizar con su estilo cada Item | /mainpages/utils/productitem |
* creando la vista de los detalles del producto al presionar boton "mostrar" | /mainPages/DetailProduct/ |
* creando el nuevo path en Pages.js el cual es: <Route path="/detail/:id" exact component={DetailProduct} /> para renderizar los detalles del producto al presionar el boton que tiene el Link en este caso el boton "mostrar" que esta en el ProductItem.js


#### Part 11 - Client - Login - Register ####

* Consumiendo el API del backend para registrar y logear personar
* Creando el Loading.js component para animar la recarga
* Creando el Login.js y Register.js componentes con sus respectivos <Link></Link> Para cambiarse entre registro y login
* Creando Login.css donde se le dio estilo a esos dos componentes (MODIFICAR OTRO DIA)
* Agregandole API refres_token a el GlobalState.js para poder obtener el accesstoken del usuario al logearse o al registrarse
* al logearse una persona se guarda en el navegador en apartado aplication en localstorage el "firstLogin"
* Al loagearse una persona en el navegador en el apartado Components en el DataProvider en el hook state viene el accesstoken del usuario ES LO QUE IMPORTA PARA HACER TODO


#### Part 12 - Client - Cart ####

* Consumiendo API de usuarios para obtener su informacion a la hora de loggearse
* agregando el UserAPI.js donde esta la funcion para agregar producto al carrito y guardarlo en la base de datos con la API para si sale y vuelve a entrar ahi se encuentren aun y tambien donde esta el state "isAdmin y isLogged" para verificar si el usuario esta loggeado y si es admin o no
* Agregando esa UserAPI al GlobalState para poder usarlo en los componentes que requieran renderizado condicional de si esta logeado o es admin o si tambien se necesita para algunas operaciones de cada rol
* Modificando el header haciendolo condicional con ese state de "isAdmin" y "isLogged" para que si es admin le aparezcan mas opciones en el header todo con su respectivo <Link> hacia la ruta de su componente, y para si el usuario ya esta loggeado le aparezcan las opciones de historial y Logout
* Agregando el Cart.js component para hacer la vista del carrito de compras con los productos que ha hecho el usuario
* modificando el Products.js component para hacerlo condicional y le aparezca diferente al admin
* Modificando el BtnRender.js para que se renderize condicionalmente si es admin o si es User
    
    * BACKEND: agregando el endpoint /user/addcart para guardar en la base de datos en el atributo "cart" todos los productos que agrgue el usuario
    * BACKEND: agregando el router y el controlador


#### Part 13 - Cart - Payment ####

* Haciendo funcionar dinamicamente al carrito de compras con sus nuevas vairiables para sacar el total
* Consumiendo UserAPI.js para guardar en base de datos en el atributo "cart" todos los productos tiene en el carrito el usuario
* haciendo funciones para agregar cantidad, disminuir cantidad, remover producto conectado a la base de datos tambien
* CONSUMIENDO PAYPAL API para agregar el PaypalButton.js que lo saque del |  react-paypal-express-checkout  - npm package, Full Example documentation | y lo modifique a mi sandbox y con la variable total de los props y la modeda MXN

#### Part 14 - Payment - Order History ####

* Consumiendo API de /user/history en UserAPI.js para guardar el historial de pedidos
* Agregando rutas | /history | y | /history/:id | para mostrar los componentes OrderHistory.js y OrderDetails
* Optimizando el AddToCart funcion de Cart.js para que guarde todos los cambios del carrito de compras en la base de datos
* Creando el OrderHistory.js componente para obtener del GlobalState del UserAPI.js todo el historial de pedidos del usuario
* Creando el OrderDetails.js componente para mostrar los detalles de el pedido

#### Part 15 - Client - Categories ####

* Creando el CategoriesAPI.js para consumir la API de categories del backend ahi se guarda la variable categories que contiene todas las categorias de la base de datos en un useEffect con un callback de condicion en el useEffect para cada que cambie se efectua la busqueda de nuevo
* Agregando al GlobalState.js el CategoriesAPI para tener acceso a esa variable categories globalmente donde la necesite
* Agregando en el UserAPI.js una condicion en la funcion getHistory para que si es admin retorne en la variable history todos los pedidos de la base de datos y si no es admin pues como estaba en la version anterios que solo obtenia los que coincidian con el id del usuario
* Agregando en Pages.js path="/category" con su respectivo componente condicionado para que solo el admin pueda acceder a ese componente con el path
* Agregando Categories.js componente para renderizar la vista de las categorias y ahi mismo con las funciones para editar, borrar y crear una categoria llamando a el backend

#### Part 16 - Client - Create Product(1) ####

* Cambiando en el GlobalState.js agregando un useEffect a la funcion refreshToken() con un setTimeout para que se ejecute cada 10 minutos
* Optimizando codigo quitando todas las importaciones que no se estaban usando que decia la consola de la aplicacion
* Creando Componente CreateProduct.js para renderizar el componente de la creacion de los Productos, pura vista aun no funcionan los botones ni inputs y aun no consumimos la API para crear el producto

#### Part 17 - Client - Create Product(2) ####

* Agregando el | localStorage.setItem('firstLogin', true) | a Register.js y Login.js para poner en el localStorage ese item y poder hacer con el validaciones de si esta logeado o no
* Agregando el | localStorage.removeItem('firstLogin') | en el Header.js en la funcion logout para al hacer logout se quite ese item y hacer validaciones de si esta logeado o no
* Agregando en el GlobalState (Para validar si esta logeado o no y solamente ejecutar la funcion refreshToken() si es que esta logeado)
    ```javascript 
        const firstLogin = localStorage.getItem('firstLogin', true)
        
        if(firstLogin){

        } 
    ``` 
* Avanzandole al CreateProduct.js componente agregandoles las funciones :
    * handleUpload (para subir imagenes a cloudinary)
    * handleDestory (para borrar imagenes de cloudinary)
    * handleChangeInput (a medias para obtener la informacion de los inputs de los productos)


#### Part 18 - Client - Create Product(3) ####

* Cambiando de direccion la funcion getProducts() donde se consumio API para agarrar los productos de la base de datos, cambiando de ProductsAPI.js a Products.js
* Agregando el path /edit_product en Pages.js pasandole el componente CreateProduct.js ya que ahi mismo tiene condiciones de si esta en modo edicion o en modo crear nuevo
* Agregando condiciones para entrar en modo onEdit() para que haga diferentes cosas si esta en edicion o en modo crear nuevo, en handleSubmit() se agrega esa condicion para llamar diferentes endpoint de la API si esta editando o no y usando el const param = useParams() para pasarle el id del producto a editar

#### Part 19 - Client - Delete Product ####

* volviendo a reubicar en el ProductsAPI.js la funcion getProducts()
* trabajando en Products.js , ProductItem.js y BtnRender.js para hacer funcionar el boton delete de administrador y llamar a la API para borrar el producto
* trabajando con checkbox para hacer funcionar el seleccionar productos y "borrar todos" para borrar los seleccionados mediante el atributo de cada producto "checked" en la base de datos

#### Part 20 - Client - Filter - Sort - Pagination ####

* Agregando variables category, search, sort, page, result en ProductsAPI.js y exportandolas para hacer el getProducts() dinamicamente con los parametros para los filtros que se hicieron en el backend, mandando en el get del axios estas variables
* Creando Filter.js para poner los inputs y ahi obtener estas variables para el getProducts() del ProductsAPI.js
* Creando LoadMore.js para el Cargar mas de la paginacion de los productos
* Agregando al Products.js estos dos componentes anteriores para renderizar los inputs de los filtros y el boton de Cargar mas

#### Part 21 - Client - Responsive Design ####

* Agregando apartado Responsive design en index.css
* Agregando en Header.js funcion para menu responsive al presionar el boton se trae el menu responsive y al presionar la tacha lo oculta

#### Part 21 - Client - Deploy (PENDING) ####

* 14