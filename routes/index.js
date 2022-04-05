var express = require('express');
var router = express.Router();

let menu = [
  {
    'nombre': 'Carpaccio fresco', 
    'descripcion_corta': 'Entrada Carpaccio de salmón con cítricos',
    'descripcion': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, numquam. Quo nostrum dolorem, nemo iste, praesentium impedit tenetur odit sapiente suscipit, enim aspernatur aliquid. Earum officiis mollitia adipisci perspiciatis corrupti!',
    'precio': 'U$S 65.50',
    'imagen': '/images/Carpaccio-de-salmon.jpg'
  },
  {
    'nombre': 'Risotto de berenjena', 
    'descripcion_corta': 'Risotto de berenjena y queso de cabra',
    'descripcion': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque id sapiente labore, iste eligendi voluptates modi repellendus pariatur eos quos? Similique aut eveniet corporis odit iure ratione asperiores commodi?',
    'precio': 'U$S 47.00',
    'imagen': '/images/Risotto-berenjena-queso-cabra.jpg'
  },
  {
    'nombre': 'Mousse de arroz', 
    'descripcion_corta': 'Mousse de arroz con leche y aroma de azahar',
    'descripcion': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atque culpa quia quidem labore distinctio, excepturi sapiente facere quos nisi iure est, iste corrupti. Recusandae tenetur architecto maiores alias temporibus.',
    'precio': 'U$S 27.50',
    'imagen': '/images/Mousse-de-arroz-con-leche.jpg'
  },
  {
    'nombre': 'Espárragos blancos', 
    'descripcion_corta': 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
    'descripcion': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis culpa error temporibus placeat accusantium deleniti esse odit doloremque cum quisquam sit voluptatibus eaque saepe maxime corporis, tempora repudiandae. Sint, error.',
    'precio': 'U$S 37.50',
    'imagen': '/images/esparragos.png'
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Pimienta & sal',
    productos: menu,
   });
});

/* GET datail page. */
router.get('/detalle/:id', function(req, res, next) {
  let id = req.params.id;
  let menuItem = menu[id];
  res.render('detalleMenu', {
    title: 'Pimienta & sal',
    producto: menuItem,
  });
});

module.exports = router;
