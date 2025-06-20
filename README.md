# SPA PARA CURSO DE REACT DE CODER HOUSE

## Campo Crudo
Esta página simula una tienda de accesorios de la marca Campo Crudo, cuyas imágenes son reales y de su propiedad. El resto de los datos fueron modificados.

## Detalles de la estructura de la aplicación

Todos los listados, ya sea de productos como de categorías, fueron creados de forma dinámica, obteniendo los datos de Firestore y mostrándolos acorde.
 
- Home page -> Cards con las categorías, las cuales llevan a su correspondiente listado.
- Navbar -> A la izquierda: botón que muestra el menú con las categorías; en el centro: botón con logo que lleva al Home page; a la derecha: botón para abrir el carrito y contador de items en él.
- Category/All Products -> Muestran el listado de productos de la correspondiente categoría o el catálogo completo, respectivamente.
- Single Product -> Muestra el detalle del producto seleccionado. De haber más de una imagen asociada al producto, las flechas que acompañan la imágen aparecerán disponible para cambiar la imágen.
- Cart -> Muestra el listado de productos agregados al carrito con su respectiva información y la opción de modificar su cantidad. El botón de Checkout te llevará a la página final para concretar la compra.
- Checkout -> Muestra un formulario para que el usuario complete con sus datos, los cuales se registrarán junto con los del producto en la colección Sales en Firestore. Concretado el registro, devuelve el código del pedido.