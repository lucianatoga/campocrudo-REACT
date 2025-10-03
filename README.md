# SPA PARA CURSO DE REACT DE CODER HOUSE
## ES
### Campo Crudo
Esta página simula una tienda de accesorios de la marca Campo Crudo, cuyas imágenes son reales y de su propiedad. El resto de los datos fueron modificados.

### Detalles de la estructura de la aplicación

Todos los listados, ya sea de productos como de categorías, fueron creados de forma dinámica, obteniendo los datos de Firestore y mostrándolos acorde.
 
- Home page -> Cards con las categorías, las cuales llevan a su correspondiente listado.
- Navbar -> A la izquierda: botón que muestra el menú con las categorías; en el centro: botón con logo que lleva al Home page; a la derecha: botón para abrir el carrito y contador de items en él.
- Category/All Products -> Muestran el listado de productos de la correspondiente categoría o el catálogo completo, respectivamente.
- Single Product -> Muestra el detalle del producto seleccionado. De haber más de una imagen asociada al producto, las flechas que acompañan la imágen aparecerán disponible para cambiar la imágen.
- Cart -> Muestra el listado de productos agregados al carrito con su respectiva información y la opción de modificar su cantidad. El botón de Checkout te llevará a la página final para concretar la compra.
- Checkout -> Muestra un formulario para que el usuario complete con sus datos, los cuales se registrarán junto con los del producto en la colección Sales en Firestore. Concretado el registro, devuelve el ID del pedido.

## EN
### Campo Crudo
This page simulates an accessories shop from the brand Campo Crudo, the images it contains are real and of its property. The rest of the information has been altered. 

### Details on the application structure

All the listings, wheather it's products or categories, were dynamically created, obtaining the data from Firestore and displaying them accordingly.

- Home page -> Displays cards with categories, each take you to their corresponding listing of products.
- Navbar -> To the left: button that shows the category menu; in the center: button with logo that takes you to the Home page; to the right: button to open the cart and the items counter.
- Category/All Products -> Displays the categories corresponding listing of products or the whole catalogue, respectively.
- Single Product -> Shows the selected product detail. If there's more than one image attached to the product, the arrows below it will be enabled for the user can scroll.
- Cart -> Displays the list of products that have been added to the cart with its respective inormation and the option to modify their quantity. The Checkout button will take you to a page to finalize the purchase.
- Checkout -> Has a form for the user to complete with their PI, which will be registered alongside the products' details in the Sales collection on Firestore. Once successfully registered, it returns the purchase ID.